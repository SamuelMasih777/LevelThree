import { useState } from 'react';

export const useAPI = () => {
  const [additionalQuestions, setAdditionalQuestions] = useState([]);

  const fetchAdditionalQuestions = async (topic) => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const mockQuestions = {
      Technology: [
        { id: 1, question: 'What is your favorite tech stack?' },
        { id: 2, question: 'How often do you attend tech conferences?' },
      ],
      Health: [
        { id: 1, question: 'How many hours of sleep do you get per night?' },
        { id: 2, question: 'Do you have any chronic health conditions?' },
      ],
      Education: [
        { id: 1, question: 'What was your favorite subject in school?' },
        { id: 2, question: 'Have you ever considered pursuing further education?' },
      ],
    };

    setAdditionalQuestions(mockQuestions[topic] || []);
  };

  return { fetchAdditionalQuestions, additionalQuestions };
};