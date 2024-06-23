import React from 'react';

const Summary = ({ formData, additionalQuestions, onBack }) => {
  return (
    <div className="w-full max-w-xl bg-gray-950 p-8 border border-gray-700 rounded-md shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center">Survey Summary</h2>
      <div className='text-gray-50 mt-5'>
        <h3 className="text-xl font-semibold">Submitted Information</h3>
        <ul className="list-disc list-inside">
          <li>Full Name: {formData.fullName}</li>
          <li>Email: {formData.email}</li>
          <li>Survey Topic: {formData.surveyTopic}</li>
          {formData.surveyTopic === 'Technology' && (
            <>
              <li>Favorite Programming Language: {formData.programmingLanguage}</li>
              <li>Years of Experience: {formData.yearsOfExperience}</li>
            </>
          )}
          {formData.surveyTopic === 'Health' && (
            <>
              <li>Exercise Frequency: {formData.exerciseFrequency}</li>
              <li>Diet Preference: {formData.dietPreference}</li>
            </>
          )}
          {formData.surveyTopic === 'Education' && (
            <>
              <li>Highest Qualification: {formData.highestQualification}</li>
              <li>Field of Study: {formData.fieldOfStudy}</li>
            </>
          )}
          <li>Feedback: {formData.feedback}</li>
        </ul>
      </div>
      <div className='text-gray-50'>
        <h3 className="text-xl font-semibold">Additional Questions</h3>
        <ul className="list-disc list-inside">
          {additionalQuestions.map((q) => (
            <li key={q.id}>{q.question}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button onClick={onBack} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Fill Form-Again
        </button>
      </div>
    </div>
  );
};

export default Summary;