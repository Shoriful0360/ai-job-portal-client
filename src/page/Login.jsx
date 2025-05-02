import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import pic from '../../public/Photo/login page pic.webp'
import { useDispatch } from "react-redux";
import { googleLogin, login } from "../Redux/authSlice";
import UseAxios from "../Utility/UseAxios";
const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const axiosPublic=UseAxios()
  const location=useLocation()
  const from=location?.state?.from?.pathname || '/'

    
    const handleSubmit = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
    
        try {
            // Step 1: Check if user is locked
            await axiosPublic.post('/check-user-status', { email });
    
            // Step 2: Try Firebase login
            const result = await dispatch(login({ email, password }));
            const isLoginSuccess = login.fulfilled.match(result);
    
            if (isLoginSuccess) {
                await axiosPublic.post('/reset-login-attempts', { email });
    
                Swal.fire({ title: 'Login Success', icon: 'success' });
                navigate(from || '/');
            } else {
                throw new Error('Firebase login failed');
            }
        } catch (error) {
            // Step 3: On any error, track failed attempt
            if (error.response?.status !== 403) {
                await axiosPublic.post('/track-login-attempts', { email });
            }
    
            Swal.fire({
                title: error.response?.data?.message || "Wrong Password",
                icon: "error"
            });
        }
    };
    
    
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
        <div className="py-9 mx-4 sm:mx-9 bg-cover" style={{ backgroundImage: `url(${pic})` }}>
            <div className=" mx-auto card w-72 sm:w-full max-w-sm shrink-0 backdrop-blur-md backdrop-brightness-125 "
            >
                <div className="card-body ">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset mb-16">
                            <p className="text-8xl font-bold text-gray-600 mx-auto"><IoPersonCircleSharp /></p>
                            <p className="text-2xl font-bold text-gray-600 mx-auto">Login</p>
                            <label className="fieldset-label text-white font-bold">Email</label>
                            <input required type="email" name="email" className="input" placeholder="Email" />
                            <label className="fieldset-label  text-white font-bold">Password</label>
                            <input required type="password" name="password" className="input" placeholder="Password" />
                            <label className="label">
                <NavLink
                  to="/forgot-password"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </NavLink>
              </label>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        
                    </form>
                    <button onClick={handleGoogleLogin} className="border  mb-12 block border-blue-400 mx-auto p-1 rounded-full bg-white"><span className="text-5xl font-extrabold "><FcGoogle /></span></button>
                        <div className="text-center">
                            <p className="text-sm font-bold">You have No Account</p>
                            <Link to='/register' className="text-lg font-bold text-white underline">Sign Up</Link>
                        </div>
                </div>
            </div>
        </div>


    );
};

export default Login;