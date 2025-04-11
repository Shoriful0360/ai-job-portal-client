import { imageUpload } from "../Utility/imageUpload";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import pic from '../../public/Photo/register page pic.webp'
import { useDispatch } from "react-redux";
import { googleLogin, profileUpdate, signUp } from "../Redux/authSlice";
import { useState } from "react";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [role, setRole] = useState("Job Seeker");

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
            role,
            photoURL: photoUrl,
        };

        if (role === "Employer") {
            userData.companyName = companyName;
            userData.companyDetails = companyDetails;
        }

        try {
            const result = await dispatch(signUp({ email, password }));
            if (result.payload) {
                await dispatch(profileUpdate({ displayName: name, photoURL: photoUrl }));

                // Save user data to backend
                await fetch(`${import.meta.env.VITE_API_URL}/user/${email}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(userData),
                });

                Swal.fire({
                    title: "Account Created Successfully!",
                    icon: "success",
                    draggable: true
                });

                navigate('/');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="py-9 bg-cover" style={{ backgroundImage: `url(${pic})` }}>
            <div className="my-12 mx-auto card backdrop-blur-md backdrop-brightness-125 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="fieldset">
                            <p className="text-2xl font-bold text-white mx-auto">Sign Up</p>

                            <label className="font-bold text-white">Select Role</label>
                            <select className="select select-bordered w-full" onChange={e => setRole(e.target.value)} required>
                                <option value="Job Seeker">Job Seeker</option>
                                <option value="Employer">Employer</option>
                            </select>

                            <label className="font-bold text-white mt-2">User Name</label>
                            <input required type="text" placeholder="User Name" name="name" className="input w-full" />

                            <label className="font-bold text-white">Email</label>
                            <input required type="email" name="email" className="input w-full" placeholder="Email" />

                            <label className="font-bold text-white">Password</label>
                            <input required type="password" name="password" className="input w-full" placeholder="Password" />

                            <label className="font-bold text-white">Photo</label>
                            <input required type="file" name="image" className="file-input file-input-md" />

                            {/* Only show these if role is Employer */}
                            {role === "Employer" && (
                                <>
                                    <label className="font-bold text-white mt-2">Company Name</label>
                                    <input required type="text" name="companyName" placeholder="Company Name" className="input w-full" />

                                    <label className="font-bold text-white mt-2">Company Details</label>
                                    <textarea required name="companyDetails" placeholder="Company Details" className="textarea textarea-bordered w-full" />
                                </>
                            )}

                            <button className="btn btn-neutral mt-4">Create Account</button>
                        </fieldset>
                    </form>

                    <button onClick={() => dispatch(googleLogin())} className="btn mt-4">
                        Sign Up With <span className="text-2xl font-bold ml-1"><FcGoogle /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
