
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import pic from '../../public/Photo/login page pic.webp'
import { useDispatch } from "react-redux";
import { googleLogin, login } from "../Redux/authSlice";
const Login = () => {
    const dispatch=useDispatch()
    const navigate = useNavigate()
    const gmailLogin =async () => {
      const log = await dispatch( googleLogin())
      navigate('/')
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        try {
           const result= await dispatch(login({email,password}))
            if(result.payload){
                Swal.fire({
                    title: "Login SuccessFully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/')
            }
        
        } catch (error) {
            Swal.fire({
                title: "Something Else . Please Try Again!",
                icon: "error",
                draggable: true
            });
        }
    }
    return (
        <div className="py-9 bg-cover" style={{ backgroundImage: `url(${pic})` }}>
            <div className=" mx-auto card  w-full max-w-sm shrink-0 backdrop-blur-md backdrop-brightness-125 "
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
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                        
                    </form>
                    <button onClick={gmailLogin} className="border  mb-12 block border-blue-400 mx-auto p-1 rounded-full bg-white"><span className="text-5xl font-extrabold "><FcGoogle /></span></button>
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