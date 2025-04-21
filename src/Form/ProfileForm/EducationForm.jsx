import React, { useState } from 'react';

const EducationForm = ({ setVisible }) => {
  const [education, setEducation] = useState({
    level: 'Higher Secondary',
    degreeTitle: 'HSC',
    institution: 'Bonarpara Government College',
    isStudying: true,
    passingYear: '',
    currentYear: '4th Year',
    isCSE: 'no', // 'yes' or 'no'
  });

  const handleChange = (field, value) => {
    setEducation({ ...education, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Education Data:', education);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#1e1b2e] p-6 rounded-xl shadow-xl max-w-4xl mx-auto text-white"
    >
      <div className="text-lg font-semibold mb-4">Education</div>

      {/* Education Level */}
      <div>
        <label className="block mb-1">📚 Select your Education level</label>
        <select
          className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
          value={education.level}
          onChange={(e) => handleChange('level', e.target.value)}
        >
            <option >SSC</option>
          <option>Higher Secondary</option>
          <option>Bachelor's</option>
          <option>Master's</option>
        </select>
      </div>

      {/* Degree Title */}
      <div>
        <label className="block mb-1">🎓 Exam/Degree Title</label>
        <input
          className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
          type="text"
          value={education.degreeTitle}
          onChange={(e) => handleChange('degreeTitle', e.target.value)}
        />
      </div>

      {/* Institution Name */}
      <div>
        <label className="block mb-1">🏫 Institution Name</label>
        <input
          className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
          type="text"
          value={education.institution}
          onChange={(e) => handleChange('institution', e.target.value)}
        />
      </div>

      {/* Currently Studying */}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={education.isStudying}
          onChange={() => handleChange('isStudying', !education.isStudying)}
          className="form-checkbox h-5 w-5 text-green-500 bg-[#2c293f] border-gray-600"
        />
        <label className="text-sm font-medium">✅ I'm Currently Studying</label>
      </div>

      {/* Year Fields */}
      <div className="grid grid-cols-2 gap-6">
        {!education.isStudying ? (
          <div>
            <label className="block mb-1">📅 Approximate Passing Year</label>
            <input
              type="text"
              className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
              value={education.passingYear}
              onChange={(e) => handleChange('passingYear', e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label className="block mb-1">📅 Current Year</label>
            <select
              className="w-full bg-[#2c293f] p-3 rounded-md focus:outline-none"
              value={education.currentYear}
              onChange={(e) => handleChange('currentYear', e.target.value)}
            >
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>
        )}
      </div>

      {/* CSE/CS Student */}
      <div>
        <label className="block mb-1">💻 Are you a CSE/CS student?</label>
        <div className="flex items-center gap-6 mt-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="cse"
              value="yes"
              checked={education.isCSE === 'yes'}
              onChange={() => handleChange('isCSE', 'yes')}
              className="form-radio h-4 w-4 text-green-500 bg-[#2c293f] border-gray-600"
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="cse"
              value="no"
              checked={education.isCSE === 'no'}
              onChange={() => handleChange('isCSE', 'no')}
              className="form-radio h-4 w-4 text-green-500 bg-[#2c293f] border-gray-600"
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={() => setVisible(false)}
          className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-blue-500 text-white"
        >
          Save changes
        </button>
      </div>
    </form>
  );
};

export default EducationForm;