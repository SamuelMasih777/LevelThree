import { useState } from 'react';

export const useForm = () => {
    const initialState = {
        fullName: '',
        email: '',
        surveyTopic: '',
        programmingLanguage: '',
        yearsOfExperience: '',
        exerciseFrequency: '',
        dietPreference: '',
        highestQualification: '',
        fieldOfStudy: '',
        feedback: '',
      };
    
      const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleReset = () => {
    setFormData(initialState);
    setErrors({});
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.surveyTopic) {
      newErrors.surveyTopic = 'Survey Topic is required';
      isValid = false;
    }

    if (formData.surveyTopic === 'Technology') {
      if (!formData.programmingLanguage) {
        newErrors.programmingLanguage = 'Programming Language is required';
        isValid = false;
      }
      if (!formData.yearsOfExperience) {
        newErrors.yearsOfExperience = 'Years of Experience is required';
        isValid = false;
      }
    }

    if (formData.surveyTopic === 'Health') {
      if (!formData.exerciseFrequency) {
        newErrors.exerciseFrequency = 'Exercise Frequency is required';
        isValid = false;
      }
      if (!formData.dietPreference) {
        newErrors.dietPreference = 'Diet Preference is required';
        isValid = false;
      }
    }

    if (formData.surveyTopic === 'Education') {
      if (!formData.highestQualification) {
        newErrors.highestQualification = 'Highest Qualification is required';
        isValid = false;
      }
      if (!formData.fieldOfStudy.trim()) {
        newErrors.fieldOfStudy = 'Field of Study is required';
        isValid = false;
      }
    }

    if (!formData.feedback.trim() || formData.feedback.length < 50) {
      newErrors.feedback = 'Feedback is required and must be at least 50 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return { formData, handleChange, errors, validateForm, handleReset };
};