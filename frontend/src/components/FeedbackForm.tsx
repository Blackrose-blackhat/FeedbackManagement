// src/components/FeedbackForm.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackForm: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/feedback', { name, feedback });
    setName('');
    setFeedback('');
    setShowPopup(true);
  };

  return (
    <div className="w-full  flex flex-col justify-center align-middle items-center">
      <div className="text-6xl text-neutral-100 font-semibold p-24">
        Feedback Form
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 flex flex-col justify-center items-center w-1/4 text-white p-6 rounded-md shadow-lg   shadow-neutral-900"
      >
        <div className="mb-4 w-full">
          <label className="block mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 w-full">
          <label className="block mb-2">Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-200 rounded shadow appearance-none h-20 focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 w-1/4"
        >
          Submit
        </button>
        <p className="text-neutral-400 font-semibold pt-5">
          Need a look at previous feedbacks?{' '}
          <button className="text-blue-300" onClick={()=> navigate("/feedback")}>
            Click here
          </button>
        </p>
      </form>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Thank you for your feedback!
            </h2>
            <div className='flex flex-row justify-between px-10'>
            <button
              onClick={() => {
                setShowPopup(false);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => {
                navigate('/feedback');
              }}
            >
              View Feedback?
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
