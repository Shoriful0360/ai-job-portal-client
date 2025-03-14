import { useContext } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Utility/AuthProvidor";
import Swal from "sweetalert2";

const Login = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        try {
            await login(email, password)

            Swal.fire({
                title: "Login SuccessFully!",
                icon: "success",
                draggable: true
            });
            navigate('/')


        } catch (error) {
            Swal.fire({
                title: "Something Else . Please Try Again!",
                icon: "error",
                draggable: true
            });
        }
    }
    return (
        <div className="my-9 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset mb-36">
                        <p className="text-8xl font-bold text-gray-600 mx-auto"><IoPersonCircleSharp /></p>
                        <p className="text-2xl font-bold text-gray-600 mx-auto">Login</p>
                        <label className="fieldset-label">Email</label>
                        <input required type="email" name="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input required type="password" name="password" className="input" placeholder="Password" />
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <div className="text-center">
                        <p className="text-sm font-bold">You have No Account</p>
                        <Link to='/register' className="text-lg font-bold text-blue-600 underline">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;