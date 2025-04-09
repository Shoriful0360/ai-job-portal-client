import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if(location.state?.email){
            setEmail(location.state.email);
        }
    },[location]);

    const handleResetPassword = (e) => {
        e.preventDefault();
        const auth = getAuth();


        sendPasswordResetEmail(auth,email)
        .then(() => {
            alert("Password reset email sent ! please check inbox.");

            window.open("https://mail.google.com", "_blank");
            navigate("/login");
        })
        .catch((error) => {
            toast.error(error.message);
        });
    };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Forgot Password!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleResetPassword} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Reset Password</button>
                
              </div>
            </form>
        
            <p className="text-sm text-center">Remember Your Password?{" "}
              <NavLink to="/auth/login" className="text-blue-500">
                   Login

              </NavLink>
            </p>
          </div>
        </div>
      </div>
    );
};

export default ForgotPassword;