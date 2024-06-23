import React, { Fragment, useState } from "react";
import { useForm } from "./component/useForm";
import { useAPI } from "./component/useAPI";
import Form from "./component/Form";
import Summary from "./component/Summary";
import Navbar from "./component/Navbar";

function App() {
  const [showSummary, setShowSummary] = useState(false);
  const { formData, handleChange, errors, validateForm, handleReset } = useForm();
  const { fetchAdditionalQuestions, additionalQuestions } = useAPI();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await fetchAdditionalQuestions(formData.surveyTopic);
      setShowSummary(true);
    }
  };

  const handleBack = () => {
    setShowSummary(false);
    handleReset();
  };
  return (
    <Fragment>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        {!showSummary ? (
          <Form
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
          />
        ) : (
          <Summary
            formData={formData}
            additionalQuestions={additionalQuestions}
            onBack={handleBack}
          />
        )}
      </div>
    </Fragment>
  );
}
export default App;
