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
    <div className="max-w-full mx-auto mt-10 p-6 bg-white rounded shadow">
      <form className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-4">Job Application Form</h1>
        <Input
          label="Full Name"
          id="name"
          value={name}
          type="text"
          value={name}
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

        <div className="flex flex-col gap-2 border-2 border-green-500 p-4">
          <h1>Employment Type</h1>
          {Timings.map((item) => {
            return (
              <label
                key={item}
                htmlFor={item}
                className="flex items-center gap-2 mb-2"
              >
                {item}
                <input
                  className="form-radio h-5 w-5 text-blue-500"
                  type="radio"
                  id={item}
                  name="timing"
                  value={timing}
                  checked={timing === item}
                  onChange={() => setTiming(item)}
                />
              </label>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 border-2 border-blue-500 p-4 mt-4">
          <h1 className="text-xl font-bold mb-2">Skills</h1>

          {Skills.map((skill) => {
            return (
              <label
                key={skill}
                htmlFor={skill}
                className="flex items-center gap-2 mb-2"
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
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
              </label>
            );
          })}
        </div>

        <div>
          <h1>Experience Level</h1>
          {ExperienceLevels.map((level) => (
            <label
              key={level}
              htmlFor={level}
              className="flex items-center gap-2 mb-2"
            >
              {level}
              <input
                className="form-radio h-5 w-5 text-blue-500"
                type="radio"
                id={level}
                name="experience"
                value={experience}
                checked={experience === level}
                onChange={() => setExperience(level)}
              />
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-2 border-2 border-yellow-500 p-4 mt-4">
          <h1>Why should we hire you?</h1>
          <textarea
            onChange={(e) => setReason(e.target.value)}
            className="form-textarea border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            value={reason}
            placeholder="Tell us about your experience and why you're a good fit for this position..."
          />
        </div>

        <button
          disabled={!name || !email}
          onClick={(e) => {
            e.preventDefault();
            setShowInfo(true);
            // reset Form
            setName("");
            setEmail("");
            setPhone("");
            setTiming(Timings[0]);
            setSkills([]);
            setExperience("");
            setReason("");
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit Application
        </button>
      </form>

      {showInfo && (
        <div className="mt-6 p-4 border-2 border-gray-300 rounded">
          <h2 className="text-xl font-bold mb-2">Application Summary</h2>
          <p>
            <strong>Employment Type:</strong> {timing}
          </p>
          <p>
            <strong>Skills:</strong> {skills.join(", ")}
          </p>
          <p>
            <strong>Experience Level:</strong> {experience}
          </p>
          <p>
            <strong>Reason for Hiring:</strong> {reason}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
