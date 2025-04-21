import React, { useState } from 'react';
import MyProfileForm from '../Form/ProfileForm/MyProfileForm';
import useRole from '../Utility/useRole';

const MyProfile = () => {
  const [visible,setVisible]=useState(false)
  const{role}=useRole()
  const{email,name,number,photoUrl,_id,}=role || {}
    return (
        <div className="w-full  bg-[#1b132a] rounded-xl p-6 shadow-md">
        <div className="flex justify-between items-center border-b border-dashed pb-2 mb-4">
          <h3 className="text-lg font-bold text-purple-400">My Profile</h3>
          <button onClick={()=>setVisible(!visible)} className="text-purple-300 hover:text-purple-500">
            ✏️ Edit
          </button>
        </div>
        {
          visible? <>
          <MyProfileForm setVisible={setVisible}/>
          </>
          :
          <>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <p><span className="font-semibold text-lg text-[#eee0ff66]">Full Name </span><br />
           {name}
           </p>
          <p>
            <span className="font-semibold text-lg text-[#eee0ff66]">Email </span> <br />
            {email}</p>
          <p><span className="font-semibold text-lg text-[#eee0ff66]">Job-Seeker ID</span> <br />
           JVI-{_id?.slice(-5)}</p>
          <p><span className="font-semibold text-lg text-[#eee0ff66]">Mobile Number</span> <br />
           +88{number}
           </p>
        </div>

        <h4 className="text-md font-semibold text-purple-400 mb-2 border-b border-dashed pb-1">Device Activity</h4>
        <div className="overflow-x-auto">
          <table className="table w-full text-sm">
            <thead className="text-purple-300">
              <tr>
                <th>Serial</th>
                <th>Platform</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { serial: 1, platform: "Windows 10", date: "15-04-2025 06:08 AM" },
                { serial: 2, platform: "Android 33", date: "06-03-2025 09:57 PM" },
                { serial: 3, platform: "Windows 10", date: "22-02-2025 07:44 PM" },
              ].map((device) => (
                <tr key={device.serial}>
                  <td>{device.serial}</td>
                  <td>{device.platform}</td>
                  <td>{device.date}</td>
                  <td>
                    <button className="text-purple-400 hover:underline">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </>
        }
      
      </div>
    );
};

export default MyProfile;