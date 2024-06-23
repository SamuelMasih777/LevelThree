import React from 'react';

const Form = ({ formData, handleChange, handleSubmit, errors, handleReset }) => {
  return (
    <div className='w-full max-w-xl bg-gray-950 p-8 border border-gray-700 rounded-md shadow-lg'>
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Advanced Survey Form</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block mb-1 text-gray-50">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="text-gray-50 w-full px-3 py-2 border border-gray-700 bg-gray-900 rounded"
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block mb-1  text-gray-50">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="text-gray-50 border-gray-700 bg-gray-900 w-full px-3 py-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="surveyTopic" className="block mb-1 text-gray-50">Survey Topic</label>
        <select
          id="surveyTopic"
          name="surveyTopic"
          value={formData.surveyTopic}
          onChange={handleChange}
          className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
        >
          <option value="">Select a topic</option>
          <option value="Technology">Technology</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
        </select>
        {errors.surveyTopic && <p className="text-red-500 text-sm mt-1 ">{errors.surveyTopic}</p>}
      </div>

      {formData.surveyTopic === 'Technology' && (
        <div className="space-y-4">
          <div>
            <label htmlFor="programmingLanguage" className="block mb-1 text-gray-50">Favorite Programming Language</label>
            <select
              id="programmingLanguage"
              name="programmingLanguage"
              value={formData.programmingLanguage}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            >
              <option value="">Select a language</option>
              <option value="JavaScript">JavaScript</option>
              <option value="Python">Python</option>
              <option value="Java">Java</option>
              <option value="C#">C#</option>
            </select>
            {errors.programmingLanguage && <p className="text-red-500 text-sm mt-1 ">{errors.programmingLanguage}</p>}
          </div>

          <div>
            <label htmlFor="yearsOfExperience" className="block mb-1 text-gray-50">Years of Experience</label>
            <input
              type="number"
              id="yearsOfExperience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            />
            {errors.yearsOfExperience && <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperience}</p>}
          </div>
        </div>
      )}

      {formData.surveyTopic === 'Health' && (
        <div className="space-y-4">
          <div>
            <label htmlFor="exerciseFrequency" className="block mb-1 text-gray-50">Exercise Frequency</label>
            <select
              id="exerciseFrequency"
              name="exerciseFrequency"
              value={formData.exerciseFrequency}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Rarely">Rarely</option>
            </select>
            {errors.exerciseFrequency && <p className="text-red-500 text-sm mt-1">{errors.exerciseFrequency}</p>}
          </div>

          <div>
            <label htmlFor="dietPreference" className="block mb-1  text-gray-50">Diet Preference</label>
            <select
              id="dietPreference"
              name="dietPreference"
              value={formData.dietPreference}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            >
              <option value="">Select preference</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            {errors.dietPreference && <p className="text-red-500 text-sm mt-1">{errors.dietPreference}</p>}
          </div>
        </div>
      )}

      {formData.surveyTopic === 'Education' && (
        <div className="space-y-4">
          <div>
            <label htmlFor="highestQualification" className="block mb-1 text-gray-50">Highest Qualification</label>
            <select
              id="highestQualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            >
              <option value="">Select qualification</option>
              <option value="High School">High School</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.highestQualification && <p className="text-red-500 text-sm mt-1">{errors.highestQualification}</p>}
          </div>

          <div>
            <label htmlFor="fieldOfStudy" className="block mb-1 text-gray-50">Field of Study</label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              value={formData.fieldOfStudy}
              onChange={handleChange}
              className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
            />
            {errors.fieldOfStudy && <p className="text-red-500 text-sm mt-1">{errors.fieldOfStudy}</p>}
          </div>
        </div>
      )}

      <div>
        <label htmlFor="feedback" className="block mb-1 text-gray-50">Feedback (Min 50 Char)</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          className="border-gray-700 bg-gray-900 text-gray-50 w-full px-3 py-2 border rounded"
          rows="4"
        ></textarea>
        {errors.feedback && <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>}
      </div>

      <div className="flex justify-between">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
          <button type="button" onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Reset
          </button>
        </div>
    </form>
    </div>
  );
};

export default Form;