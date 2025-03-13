import { useDispatch, useSelector } from "react-redux";
import { imageUpload } from "../Utility/imageUpload";


const Register = () => {
    const dispatch = useDispatch();
  const { googleLogin } = useSelector((state) => state.auth);
    const handleSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value

        const image = e.target.image.files[0]
        const photoUrl = await imageUpload(image)
     console.log(email,password,photoUrl,name)
        
    }
    return (
         <div className="my-12 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form  onSubmit={handleSubmit}>
                            <fieldset className="fieldset">
                               
                                <p className="text-2xl font-bold text-gray-600 mx-auto">Sign Up</p>
                                <label className="fieldset-label">User Name</label>
                                <input type="text" className="input" placeholder="User Name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" />
                                <label className="fieldset-label">Photo</label>
                                <input type="file" className="file-input file-input-md" />
                                <button className="btn btn-neutral mt-4">Account Create</button>
                            </fieldset>
                        </form>
                        <button onClick={() => dispatch(googleLogin)} className="btn btn-neutral mt-4">google</button>
                    </div>
                </div>
    );
};

export default Register;