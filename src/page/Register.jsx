import { imageUpload } from "../Utility/imageUpload";
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import pic from '../../public/Photo/register page pic.webp'
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, profileUpdate, setPassword, signUp } from "../Redux/authSlice";
import UseAxios from "../Utility/UseAxios";
import axios from "axios";

const Register = () => {
    const [role, setRole] = useState("Job Seeker");
    const dispatch=useDispatch()
    const axiosPublic=UseAxios()
    console.log(role)
    const navigate = useNavigate()  

    // form submit
    const handleSubmit = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.image.files[0];
        const photoUrl = await imageUpload(image);
        const companyName = e.target.companyName?.value;
        const companyDetails = e.target.companyDetails?.value;

        const userData = {
            name,
            email,
            password,
            role,
            photoUrl
          };
        if (role === "Employer") {
          userData.companyName = companyName;
          userData.companyDetails = companyDetails;
      }
        try {
          const result = await dispatch(signUp({ email, password }));
      
          if (signUp.fulfilled.match(result)) {
            // ✅ Account created successfully
            dispatch(profileUpdate({ displayName: name, photoURL: photoUrl }));
            if(role ==="Employer"){
              await axiosPublic.post('/register',{email,photoUrl,companyName,companyDetails,role})

            }else{
              await axiosPublic.post('/register',{email,photoUrl,role})
            }
            Swal.fire({
              title: "Account Created Successfully!",
              icon: "success",
              confirmButtonText: "OK"
            });
      
            navigate('/');
          } 
          else if (signUp.rejected.match(result)) {
            // ❌ Error occurred (e.g., email already in use)
            const errorMessage = result.error.message;
      
            if (errorMessage.includes("auth/email-already-in-use")) {
              Swal.fire({
                title: "This email is already registered!",
                icon: "error",
                confirmButtonText: "OK"
              });
            } else {
              Swal.fire({
                title: "Something went wrong!",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "OK"
              });
            }
          }
        } catch (error) {
          // For any unexpected errors
          console.log("Unexpected Error:", error.message);
        }
      };
      
    

    // google login

    const handleGoogleLogin=async()=>{
        const result=await dispatch(googleLogin())
        
        if(googleLogin.fulfilled.match(result)){
         try{
    const userInfo={
            name:result?.payload?.displayName,
            email:result?.payload?.email,
            role:"Job Seeker",
            phtotoUrl: result?.payload?.photoURL
          }
    
          
          await axiosPublic.post('/register',userInfo)
          navigate('/')
        }catch{

          navigate('/')
        }
         }
      

    }
    return (
        <div className="py-9 bg-cover" style={{ backgroundImage: `url(${pic})` }}>
            <div className="my-12 mx-auto card backdrop-blur-md backdrop-brightness-125 w-full max-w-sm shrink-0 shadow-2xl ">
                <div className="card-body ">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">

                            <p className="text-2xl font-bold text-white mx-auto">Sign Up</p>
                            
                            
                            <label className="font-bold text-white fieldset-label">User Name</label>
                            <input required type="text" placeholder="User Name" name="name" className="input w-full" />
                            <label className="font-bold text-white fieldset-label">Email</label>
                            <input required type="email" name="email" className="input w-full" placeholder="Email" />
                            <label className="font-bold text-white fieldset-label">Password</label>
                            <input required type="password" onChange={(e)=>dispatch(setPassword(e.target.value))} name="password" className="input w-full" placeholder="Password" />
                            {/* photo */}
                            <label className="font-bold text-white fieldset-label">Photo</label>
                            <input type="file" name="image" className="file-input file-input-md" />

                            
                            {/* Only show these if role is Employer */}
                            {role === "Employer" && (
                                <>
                                    <label className="font-bold text-white mt-2">Company Name</label>
                                    <input required type="text" name="companyName" placeholder="Company Name" className="input w-full" />

                                    <label className="font-bold text-white mt-2">Company Details</label>
                                    <textarea required name="companyDetails" placeholder="Company Details" className="textarea textarea-bordered w-full" />
                                </>
                            )}
                            <button className="btn btn-neutral mt-4">Account Create</button>
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleLogin} hidden={role==="Employer"} className={`btn  mt-4 `}>Sign Up With <span className="text-2xl font-bold"><FcGoogle /></span></button>
                </div>
            </div>
        </div>

    );
};

export default Register;