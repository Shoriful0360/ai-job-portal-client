import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
    experience: [
      { jobTitle: '', company: '', duration: '', jobDescription: '' },
    ],
    education: [
      { degree: '', university: '', graduationDate: '', relevantCourses: '' },
    ],
    certifications: [
      { certificationName: '', issuingOrganization: '', dateEarned: '' },
    ],
    projects: [
      { title: '', technologiesUsed: '', duration: '', description: '' },
    ],
    awards: [
      { awardName: '', issuingOrganization: '', date: '' },
    ],
    languages: [
      { languageName: '', proficiency: '' },
    ],
    volunteerExperience: [
      { position: '', organization: '', duration: '', description: '' },
    ],
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
      skills: {
        ...prev.skills,
        [name]: value,
      },
    }));
  };

  const handleSectionChange = (e, section, index) => {
    const { name, value } = e.target;
    const updatedSection = [...resumeData[section]];
    updatedSection[index][name] = value;
    setResumeData((prev) => ({ ...prev, [section]: updatedSection }));
  };

  const handleAddField = (section, newField) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: [...prev[section], newField],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userEmail) return alert('User not logged in');

    try {
      const res = await axios.post(`http://localhost:5000/resume/${userEmail}`, resumeData);
      const insertedId = res.data.insertedId || res.data.upsertedId || res.data._id || res.data?.result?.upsertedId?._id;
      setResumeId(insertedId);
      alert('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      alert('Failed to save resume');
    }
  };

  const handleDownload = () => {
    if (!resumeId) return alert('Save your resume first');
    window.open(`http://localhost:5000/resume/download/${resumeId}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Build Your Resume</h1>

      {/* Basic Info */}
      <input name="title" placeholder="Resume Title" value={resumeData.title} onChange={handleChange} className="input" required />
      <input name="fullName" placeholder="Full Name" value={resumeData.fullName} onChange={handleChange} className="input" required />
      <input name="phone" placeholder="Phone" value={resumeData.phone} onChange={handleChange} className="input" required />
      <input name="linkedin" placeholder="LinkedIn URL" value={resumeData.linkedin} onChange={handleChange} className="input" />
      <input name="address" placeholder="Address" value={resumeData.address} onChange={handleChange} className="input" />
      <textarea name="objective" placeholder="Career Objective" value={resumeData.objective} onChange={handleChange} className="input" />

      {/* Skills */}
      <h2 className="font-bold mt-6">Skills</h2>
      <input name="technical" placeholder="Technical Skills (comma separated)" value={resumeData.skills.technical} onChange={handleSkillsChange} className="input" />
      <input name="soft" placeholder="Soft Skills (comma separated)" value={resumeData.skills.soft} onChange={handleSkillsChange} className="input" />

      {/* Dynamic Sections */}
      {[
        { key: 'experience', label: 'Experience', fields: ['jobTitle', 'company', 'duration', 'jobDescription'] },
        { key: 'education', label: 'Education', fields: ['degree', 'university', 'graduationDate', 'relevantCourses'] },
        { key: 'certifications', label: 'Certifications', fields: ['certificationName', 'issuingOrganization', 'dateEarned'] },
        { key: 'projects', label: 'Projects', fields: ['title', 'technologiesUsed', 'duration', 'description'] },
        { key: 'awards', label: 'Awards', fields: ['awardName', 'issuingOrganization', 'date'] },
        { key: 'languages', label: 'Languages', fields: ['languageName', 'proficiency'] },
        { key: 'volunteerExperience', label: 'Volunteer Experience', fields: ['position', 'organization', 'duration', 'description'] }
      ].map(({ key, label, fields }) => (
        <div key={key}>
          <h2 className="font-bold mt-6">{label}</h2>
          {resumeData[key].map((entry, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <input
                  key={field}
                  name={field}
                  placeholder={field}
                  value={entry[field]}
                  onChange={(e) => handleSectionChange(e, key, idx)}
                  className="input"
                />
              ))}
            </div>
          ))}
          <button type="button" onClick={() => handleAddField(key, Object.fromEntries(fields.map(f => [f, ''])))} className="mt-2 text-blue-600">
            + Add More {label}
          </button>
        </div>
      ))}

      {/* Interests */}
      <h2 className="font-bold mt-6">Interests</h2>
      <input name="interests" placeholder="Your Interests" value={resumeData.interests} onChange={handleChange} className="input" />

      {/* Actions */}
      <button type="submit" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Save Resume
      </button>

    </form>
  );
};

export default ResumeForm;
