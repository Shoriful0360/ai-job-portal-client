import React from 'react';

const AdditionalInfoForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
      };
    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-6">Additional Info</h2>
  
        <div className="grid grid-cols-2 gap-6">
  
          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">Your Gender</label>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="form-radio text-green-500"
                  defaultChecked
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center">
                <input type="radio" name="gender" value="Female" className="form-radio" />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>
  
          {/* Age Range */}
          <div>
            <label className="block mb-2 font-medium">Age Range</label>
            <select name="ageRange" className="w-full bg-gray-800 rounded-md p-2">
              <option value="20-25">20-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
            </select>
          </div>
  
          {/* Primary Device */}
          <div>
            <label className="block mb-2 font-medium">Primary Device Type</label>
            <select name="deviceType" className="w-full bg-gray-800 rounded-md p-2">
              <option value="Computer">Computer</option>
              <option value="Mobile">Mobile</option>
              <option value="Tablet">Tablet</option>
            </select>
          </div>
  
          {/* Internet Type */}
          <div>
            <label className="block mb-2 font-medium">Internet Type</label>
            <select name="internetType" className="w-full bg-gray-800 rounded-md p-2">
              <option value="Mobile">Mobile</option>
              <option value="Wi-Fi">Wi-Fi</option>
              <option value="Broadband">Broadband</option>
            </select>
          </div>
  
          {/* Years of Experience */}
          <div>
            <label className="block mb-2 font-medium">Years of Experience</label>
            <select name="experience" className="w-full bg-gray-800 rounded-md p-2">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2+">2+</option>
            </select>
          </div>
  
          {/* Employment Role */}
          <div>
            <label className="block mb-2 font-medium">Employment Role</label>
            <select name="employmentRole" className="w-full bg-gray-800 rounded-md p-2">
              <option value="None">None</option>
              <option value="Student">Student</option>
              <option value="Freelancer">Freelancer</option>
              <option value="Job Holder">Job Holder</option>
            </select>
          </div>
  
          {/* Area Type */}
          <div>
            <label className="block mb-2 font-medium">Area Type</label>
            <select name="areaType" className="w-full bg-gray-800 rounded-md p-2">
              <option value="Village">Village</option>
              <option value="Town">Town</option>
              <option value="City">City</option>
            </select>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button type="button" className="px-4 py-2 bg-gray-700 text-white rounded-md">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md">
            Save changes
          </button>
        </div>
      </form>
    );
};

export default AdditionalInfoForm;