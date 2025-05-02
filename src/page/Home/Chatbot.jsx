import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setError('');
    setAnswer('');

    try {
      const response = await axios.post('http://localhost:5000/ask-gemini', {
        question,
      });

      setAnswer(response.data.answer);
    } catch (err) {
      console.error('Frontend error:', err);
      setError('Failed to get a response from the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4 text-blue-700">Ask Gemini</h2>

      <textarea
        className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-blue-500"
        rows="4"
        placeholder="Type your question here..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        onClick={handleAsk}
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Ask'}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {answer && (
        <div className="mt-6 p-4 bg-gray-100 rounded shadow">
          <h4 className="font-semibold text-gray-700 mb-2">Gemini says:</h4>
          <p className="text-gray-800 whitespace-pre-wrap">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
