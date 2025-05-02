import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const ResumeForm = () => {
  const user = useSelector((state) => state.auth.user);
  const userEmail = user?.email;

  const [resumeId, setResumeId] = useState(null);
  const [resumeData, setResumeData] = useState({
    title: '',
    fullName: '',
    email: userEmail || '',
    phone: '',
    linkedin: '',
    address: '',
    objective: '',
    skills: {
      technical: '',
      soft: '',
    },
    experience: [{ jobTitle: '', company: '', duration: '', jobDescription: '' }],
    education: [{ degree: '', university: '', graduationDate: '', relevantCourses: '' }],
    certifications: [{ certificationName: '', issuingOrganization: '', dateEarned: '' }],
    projects: [{ title: '', technologiesUsed: '', duration: '', description: '' }],
    awards: [{ awardName: '', issuingOrganization: '', date: '' }],
    languages: [{ languageName: '', proficiency: '' }],
    volunteerExperience: [{ position: '', organization: '', duration: '', description: '' }],
    interests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prev) => ({
      ...prev,
      skills: { ...prev.skills, [name]: value },
    }));
  };

  const handleSectionChange = (e, section, index) => {
    const { name, value } = e.target;
    const updated = [...resumeData[section]];
    updated[index][name] = value;
    setResumeData((prev) => ({ ...prev, [section]: updated }));
  };

  const handleAddField = (section, fields) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], Object.fromEntries(fields.map((f) => [f, '']))],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) {
      return Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please log in first.',
        confirmButtonColor: '#a59387',
      });
    }

    try {
      const res = await axios.post(`http://localhost:5000/resume/${userEmail}`, resumeData);
      const insertedId =
        res.data.insertedId || res.data.upsertedId || res.data._id || res.data?.result?.upsertedId?._id;
      setResumeId(insertedId);

      Swal.fire({
        icon: 'success',
        title: 'Resume Saved',
        text: 'Your resume has been saved successfully!',
        confirmButtonColor: '#a59387',
      });
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error Saving Resume',
        text: 'Something went wrong while saving your resume.',
        confirmButtonColor: '#a59387',
      });
    }
  };

  const handleDownload = () => {
    if (!resumeId) {
      return Swal.fire({
        icon: 'info',
        title: 'Save First',
        text: 'Please save your resume before downloading.',
        confirmButtonColor: '#a59387',
      });
    }

    
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: '#faf9f5' }}>
      <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto text-[#3a3b40]">
        <h1 className="text-3xl font-bold mb-6 text-[#3a3b40]">Build Your Resume</h1>

        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {['title', 'fullName', 'phone', 'linkedin', 'address'].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              value={resumeData[field]}
              onChange={handleChange}
              className="input border-[#a59387] focus:ring-[#a59387]"
              required={field !== 'linkedin' && field !== 'address'}
            />
          ))}
          <textarea
            name="objective"
            placeholder="Career Objective"
            value={resumeData.objective}
            onChange={handleChange}
            className="input border-[#a59387] focus:ring-[#a59387] md:col-span-2"
          />
        </div>

        {/* Skills */}
        <h2 className="font-bold text-xl mt-6 mb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            name="technical"
            placeholder="Technical Skills"
            value={resumeData.skills.technical}
            onChange={handleSkillsChange}
            className="input border-[#a59387] focus:ring-[#a59387]"
          />
          <input
            name="soft"
            placeholder="Soft Skills"
            value={resumeData.skills.soft}
            onChange={handleSkillsChange}
            className="input border-[#a59387] focus:ring-[#a59387]"
          />
        </div>

        {/* Repeating Sections */}
        {[
          { key: 'experience', label: 'Experience', fields: ['jobTitle', 'company', 'duration', 'jobDescription'] },
          { key: 'education', label: 'Education', fields: ['degree', 'university', 'graduationDate', 'relevantCourses'] },
          { key: 'certifications', label: 'Certifications', fields: ['certificationName', 'issuingOrganization', 'dateEarned'] },
          { key: 'projects', label: 'Projects', fields: ['title', 'technologiesUsed', 'duration', 'description'] },
          { key: 'awards', label: 'Awards', fields: ['awardName', 'issuingOrganization', 'date'] },
          { key: 'languages', label: 'Languages', fields: ['languageName', 'proficiency'] },
          {
            key: 'volunteerExperience',
            label: 'Volunteer Experience',
            fields: ['position', 'organization', 'duration', 'description'],
          },
        ].map(({ key, label, fields }) => (
          <div key={key}>
            <h2 className="font-bold text-lg mt-6 mb-2">{label}</h2>
            {resumeData[key].map((entry, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {fields.map((field) => (
                  <input
                    key={field}
                    name={field}
                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                    value={entry[field]}
                    onChange={(e) => handleSectionChange(e, key, idx)}
                    className="input border-[#a59387] focus:ring-[#a59387]"
                  />
                ))}
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddField(key, fields)}
              className="text-[#a59387] mt-2 mb-4"
            >
              + Add More {label}
            </button>
          </div>
        ))}

        {/* Interests */}
        <h2 className="font-bold text-lg mt-6 mb-2">Interests</h2>
        <input
          name="interests"
          placeholder="Your Interests"
          value={resumeData.interests}
          onChange={handleChange}
          className="input border-[#a59387] focus:ring-[#a59387] mb-6 w-full"
        />

        {/* Buttons */}
        <div>
          <button
            type="submit"
            className="mt-6 bg-[#a59387] text-white px-6 py-3 rounded-lg hover:bg-[#898278]"
          >
            Save Resume
          </button>
          {resumeId && (
            <button
              type="button"
              onClick={handleDownload}
              className="ml-4 mt-6 bg-[#ddd3c2] text-[#3a3b40] px-6 py-3 rounded-lg hover:bg-[#a59387]"
            >
              Download PDF
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
