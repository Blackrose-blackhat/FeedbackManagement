import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';

interface Feedback {
  id: number;
  name: string;
  feedback: string;
}

const Row = ({ index, style, data }: any) => {
  const fb = data[index];
  return (
    <div
      style={style}
      className="flex flex-wrap border-t border-gray-500 text-white"
    >
      <div className="w-1/2 px-4 py-2 text-lg">{fb.name}</div>
      <div className="w-1/2 px-4 py-2 text-sm whitespace-pre-line overflow-hidden ">
        {fb.feedback}
      </div>
    </div>
  );
};
const FeedbackList: React.FC = () => {
  let navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/feedback')
      .then((response) => {
        setFeedbacks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-6 rounded-md shadow-lg w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl text-neutral-200 font-bold mb-4">
        Feedback List
      </h2>
      <div className="rounded-md shadow-lg shadow-black bg-gray-800 w-1/2 px-24 py-10 text-white">
        <div className="flex border-b border-gray-500 ">
          <div className="w-1/2 px-4 py-2 font-bold">Name</div>
          <div className="w-1/2 px-4 py-2 font-bold whitespace-pre-wrap">
            Message
          </div>
        </div>
        <List
          height={500}
          itemCount={feedbacks.length}
          itemSize={35}
          width="100%"
          itemData={feedbacks}
        >
          {Row}
        </List>
      </div>
      <div className="py-10 font-semibold">
        <p className="text-white">
          {' '}
          Want to add a new Feedback?{' '}
          <button className="text-blue-400" onClick={() => navigate('/')}>
            Add here!
          </button>
        </p>
      </div>
    </div>
  );
};

export default FeedbackList;
