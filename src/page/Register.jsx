
import { useContext } from "react";
import { imageUpload } from "../Utility/imageUpload";
import { AuthContext } from "../Utility/AuthProvidor";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Register = () => {
    const { googleLogin, createUser, profileUpdate, logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const image = e.target.image.files[0]
        const photoUrl = await imageUpload(image)
       
        try {
            await createUser(email, password)
            await profileUpdate({ displayName: name, photoURL: photoUrl });
            Swal.fire({
                title: "Account Created SuccessFully!",
                icon: "success",
                draggable: true
            });
            logout()
            navigate('/login')

        } catch (error) {

        }

    }
    return (
        <div className="my-12 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">

                        <p className="text-2xl font-bold text-gray-600 mx-auto">Sign Up</p>
                        <label className=" fieldset-label">User Name</label>
                        <input required type="text" placeholder="User Name" name="name" className="input w-full" />
                        <label className=" fieldset-label">Email</label>
                        <input required type="email" name="email" className="input w-full" placeholder="Email" />
                        <label className=" fieldset-label">Password</label>
                        <input required type="password" name="password" className="input w-full" placeholder="Password" />
                        <label className="fieldset-label">Photo</label>
                        <input type="file" name="image" className="file-input file-input-md" />
                        <button className="btn btn-neutral mt-4">Account Create</button>
                    </fieldset>
                </form>
                <button onClick={googleLogin} className="btn  mt-4">Sign Up With <span className="text-2xl font-bold"><FcGoogle /></span></button>
            </div>
        </div>
    );
};

export default Register;