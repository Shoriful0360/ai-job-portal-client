

import { imageUpload } from "../Utility/imageUpload";

import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import pic from '../../public/Photo/register page pic.webp'
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, profileUpdate, signUp } from "../Redux/authSlice";
const Register = () => {
    const dispatch=useDispatch()

    const navigate = useNavigate()  

    // form submit
    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const image = e.target.image.files[0]
        const photoUrl = await imageUpload(image)


        try {
     const result= await dispatch(signUp({email,password}))
        if(result.payload){

            await dispatch(profileUpdate({displayName:name,photoURL:photoUrl}))
        }
            Swal.fire({
                title: "Account Created SuccessFully!",
                icon: "success",
                draggable: true
            });
           
            navigate('/')

        } catch (error) {
            console.log(error.message)
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
                            <input required type="password" name="password" className="input w-full" placeholder="Password" />
                            <label className="font-bold text-white fieldset-label">Photo</label>
                            <input type="file" name="image" className="file-input file-input-md" />
                            <button className="btn btn-neutral mt-4">Account Create</button>
                        </fieldset>
                    </form>
                    <button onClick={()=>dispatch(googleLogin())} className="btn  mt-4">Sign Up With <span className="text-2xl font-bold"><FcGoogle /></span></button>
                </div>
            </div>
        </div>

    );
};

export default Register;