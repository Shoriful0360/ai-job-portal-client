import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

const Card = ({ children }) => (
  <div className="bg-white dark:bg-zinc-900 shadow-md rounded-2xl">{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444", "#3B82F6"];

const StatisticsPage = () => {
  const [users, setUsers] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [jobLocations, setJobLocations] = useState([]);

  useEffect(() => {
    fetch("https://ai-job-portal-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    fetch("https://ai-job-portal-server.vercel.app/verifyJob")
      .then((res) => res.json())
      .then((data) => setJobs(data));

    fetch("https://ai-job-portal-server.vercel.app/jobApplications")
      .then((res) => res.json())
      .then((data) => setApplications(data));

    fetch("https://ai-job-portal-server.vercel.app/jobLocations")
      .then((res) => res.json())
      .then((data) => setJobLocations(data));
  }, []);

  const totalUsers = users.length;
  const totalJobs = jobs.length;
  const totalApplications = applications.length;
  const totalJobsApplied = applications.length;
  const totalJobsGot = applications.filter(app => app.status === "Hired").length;
  const totalCompanies = [...new Set(jobs.map(job => job.company))].length;

  const userRoleData = [
    { name: "Employer", value: users.filter((u) => u.role === "Employer").length },
    { name: "Job Seeker", value: users.filter((u) => u.role === "Job Seeker").length },
  ];

  const jobCategoryData = Object.entries(
    jobs.reduce((acc, job) => {
      acc[job.category] = (acc[job.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const monthlyUserSignupData = Object.entries(
    users.reduce((acc, user) => {
      const date = new Date(user.signupDate);
      const formattedDate = date.toLocaleDateString("default", { day: "2-digit", month: "short" });
      acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const jobPostGrowthData = Object.entries(
    jobs.reduce((acc, job) => {
      const date = new Date(job.postedAt);
      const formattedMonth = date.toLocaleDateString("default", {
        month: "short",
        year: "numeric",
      });
      acc[formattedMonth] = (acc[formattedMonth] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => {
      const [monthA, yearA] = a.name.split(" ");
      const [monthB, yearB] = b.name.split(" ");
      const dateA = new Date(`${monthA} 1, ${yearA}`);
      const dateB = new Date(`${monthB} 1, ${yearB}`);
      return dateA - dateB;
    });

  const jobLocationData = Object.entries(
    jobLocations.reduce((acc, job) => {
      acc[job.location] = (acc[job.location] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const networkSummary = [
    { name: "Following", value: 320 },
    { name: "Followers", value: 540 },
  ];

  const vacancyStatusData = [
    { name: "Mon", sent: 200, rejected: 50 },
    { name: "Tue", sent: 180, rejected: 30 },
    { name: "Wed", sent: 220, rejected: 80 },
    { name: "Thu", sent: 250, rejected: 60 },
    { name: "Fri", sent: 300, rejected: 70 },
  ];

  const jobTrends = [
    { role: "Programmer", count: 28 },
    { role: "Designer", count: 20 },
    { role: "Web Dev", count: 35 },
    { role: "Analyst", count: 15 },
  ];

  return (
    <div className="p-6 space-y-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">👀 Profile Viewed</h4><p className="text-2xl font-bold">125+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">📤 Applications Sent</h4><p className="text-2xl font-bold">500+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">📬 Applications Answered</h4><p className="text-2xl font-bold">234+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">🤝 Interviewed</h4><p className="text-2xl font-bold">329+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">✅ Hired</h4><p className="text-2xl font-bold">200+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">📋 Total Jobs</h4><p className="text-2xl font-bold">2500+</p></CardContent></Card>
        <Card><CardContent  className='bg-white'><h4 className="font-bold text-gray-600">🏢 Total Companies</h4><p className="text-2xl font-bold">1500+</p></CardContent></Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent  className='bg-white'>
            <h4  className="font-bold text-gray-600 text-center text-lg mb-4">Users</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie dataKey="value" data={userRoleData} cx="50%" cy="50%" outerRadius={80} label>
                  {userRoleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent  className='bg-white'>
            <h4  className="font-bold text-gray-600 text-center text-lg mb-4">Job Categories</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie dataKey="value" data={jobCategoryData} cx="50%" cy="50%" outerRadius={80} label>
                  {jobCategoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardContent  className='bg-white'>
            <h4  className="font-bold text-gray-600 text-center text-lg mb-4">Network Summary</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={networkSummary}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent  className='bg-white'>
            <h4  className="font-bold text-gray-600 text-center text-lg mb-4">Vacancy Status</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={vacancyStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sent" stroke="#3B82F6" />
                <Line type="monotone" dataKey="rejected" stroke="#EF4444" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent  className='bg-white'>
          <h4  className="font-bold text-gray-600 text-center text-lg mb-4">User Signups Over Time</h4>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyUserSignupData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#4F46E5" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent  className='bg-white'>
          <h4  className="font-bold text-gray-600 text-center text-lg mb-4">Job Post Growth</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobPostGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {jobTrends.map((trend, index) => (
          <Card key={index}>
            <CardContent  className='bg-white text-center' >
              <h5 className="font-semibold mb-2">{trend.role}</h5>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={[{ name: trend.role, value: trend.count }]}
                    innerRadius={40}
                    outerRadius={60}
                    fill={COLORS[index % COLORS.length]}
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
              <p className="mt-2 text-lg font-bold">{trend.count}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;
