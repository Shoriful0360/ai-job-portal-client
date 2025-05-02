import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Password Reset Email Sent',
          text: 'Please check your inbox.',
          confirmButtonColor: '#a59387'
        }).then(() => {
          window.open('https://mail.google.com', '_blank');
          navigate('/login');
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
          confirmButtonColor: '#a59387'
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#faf9f5' }}>
      <div className="w-full max-w-sm p-8 rounded-2xl shadow-lg" style={{ backgroundColor: '#fff', border: '1px solid #ddd3c2' }}>
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#3a3b40' }}>
          Forgot Password
        </h2>
        <form onSubmit={handleResetPassword}>
          <div className="mb-4">
            <label className="block mb-1 font-medium" style={{ color: '#3a3b40' }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded border focus:outline-none"
              style={{
                borderColor: '#ddd3c2',
                backgroundColor: '#faf9f5',
                color: '#3a3b40',
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded font-semibold"
            style={{
              backgroundColor: '#a59387',
              color: '#fff',
            }}
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-sm mt-4" style={{ color: '#3a3b40' }}>
          Remember your password?{' '}
          <NavLink to="/auth/login" className="font-semibold" style={{ color: '#898278' }}>
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
