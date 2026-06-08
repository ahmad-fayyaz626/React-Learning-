import React from "react";
import { useState } from "react";
import Input from "./Components/Input";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const Timings = ["Full-time", "Part-time", "Internship", "Freelance"];
  const [timing, setTiming] = useState();
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState("");
  const [reason, setReason] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    phone: "",
    timing: "",
    skills: [],
    experience: "",
    reason: "",
  });

  const Skills = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "React",
    "Node.js",
    "SQL",
    "HTML/CSS",
    "Git",
    "Docker",
  ];

  const ExperienceLevels = [
    "Entry-level",
    "Mid-level",
    "Senior-level",
    "Managerial",
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 border-b border-slate-200 pb-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-1">
            Careers
          </p>
          <h1 className="text-3xl font-bold text-slate-800">Job Application</h1>
          <p className="text-slate-500 text-sm mt-1">
            Fill out the form below and we'll get back to you within 3 business
            days.
          </p>
        </div>

        <form className="flex flex-col gap-8">
          {/* Personal Info Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col gap-5">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase">
              Personal Information
            </h2>
            <Input
              label="Full Name"
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Phone Number"
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {/* Employment Type */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4">
              Employment Type
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {Timings.map((item) => (
                <label
                  key={item}
                  htmlFor={item}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                    timing === item
                      ? "border-slate-700 bg-slate-800 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <span className="text-sm font-medium">{item}</span>
                  <input
                    className="hidden"
                    type="radio"
                    id={item}
                    name="timing"
                    value={timing}
                    checked={timing === item}
                    onChange={() => setTiming(item)}
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      timing === item ? "border-white" : "border-slate-400"
                    }`}
                  >
                    {timing === item && (
                      <span className="w-2 h-2 rounded-full bg-white block" />
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-1">
              Skills
            </h2>
            <p className="text-slate-400 text-xs mb-4">Select all that apply</p>
            <div className="flex flex-wrap gap-2">
              {Skills.map((skill) => (
                <label
                  key={skill}
                  htmlFor={skill}
                  className={`px-3 py-1.5 rounded-full border text-sm cursor-pointer transition-all ${
                    skills.includes(skill)
                      ? "bg-slate-800 border-slate-800 text-white"
                      : "bg-white border-slate-200 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  {skill}
                  <input
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSkills([...skills, skill]);
                      } else {
                        setSkills(skills.filter((s) => s !== skill));
                      }
                    }}
                    type="checkbox"
                    id={skill}
                    checked={skills.includes(skill)}
                    name="skills"
                    value={skills}
                    className="hidden"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-4">
              Experience Level
            </h2>
            <div className="flex flex-col gap-2">
              {ExperienceLevels.map((level) => (
                <label
                  key={level}
                  htmlFor={level}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg border cursor-pointer transition-all ${
                    experience === level
                      ? "border-slate-700 bg-slate-800 text-white"
                      : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400"
                  }`}
                >
                  <span className="text-sm font-medium">{level}</span>
                  <input
                    className="hidden"
                    type="radio"
                    id={level}
                    name="experience"
                    value={experience}
                    checked={experience === level}
                    onChange={() => setExperience(level)}
                  />
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      experience === level ? "border-white" : "border-slate-400"
                    }`}
                  >
                    {experience === level && (
                      <span className="w-2 h-2 rounded-full bg-white block" />
                    )}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Why hire you */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-1">
              Cover Note
            </h2>
            <p className="text-slate-400 text-xs mb-4">
              Why should we hire you?
            </p>
            <textarea
              onChange={(e) => setReason(e.target.value)}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400 resize-none bg-slate-50"
              rows="4"
              value={reason}
              placeholder="Tell us about your experience and why you're a good fit for this position..."
            />
          </div>

          {/* Submit */}
          <button
            disabled={!name || !email}
            onClick={(e) => {
              setSubmittedData({
                name,
                email,
                phone,
                timing,
                skills,
                experience,
                reason,
              });
              e.preventDefault();
              setShowInfo(true);
              setName("");
              setEmail("");
              setPhone("");
              setTiming();
              setSkills([]);
              setExperience("");
              setReason("");
            }}
            className="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Submit Application
          </button>
        </form>

        {/* Summary Card */}
        {showInfo && (
          <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="border-b border-slate-100 pb-4 mb-4">
              <p className="text-xs font-semibold tracking-[0.15em] text-slate-400 uppercase mb-1">
                Submitted
              </p>
              <h2 className="text-xl font-bold text-slate-800">
                Application Summary
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">
                  Employment Type
                </span>
                <span className="text-slate-700 font-semibold">
                  {submittedData.timing}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400 font-medium">Experience</span>
                <span className="text-slate-700 font-semibold">
                  {submittedData.experience}
                </span>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-slate-400 font-medium">Skills</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {submittedData.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-slate-400 font-medium">Cover Note</span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {submittedData.reason}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
