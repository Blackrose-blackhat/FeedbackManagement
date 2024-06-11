import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-900 flex flex-col items-center justify-start'>
        <Routes>
          <Route path="/" element={<FeedbackForm />} />
          <Route path='/feedback' element={<FeedbackList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;