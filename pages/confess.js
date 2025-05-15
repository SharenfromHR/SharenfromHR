
import { useState } from 'react';

export default function Confess() {
  const [confession, setConfession] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ confession }),
    });

    if (res.ok) {
      setSubmitted(true);
      setConfession('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Anonymous Confession Booth</h1>
      <p className="mb-6 text-gray-700">Don’t worry. HR’s not watching. Probably.</p>
      {submitted ? (
        <p className="text-green-600 text-lg">Thanks for confessing. You’re still probably in trouble.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <textarea
            value={confession}
            onChange={(e) => setConfession(e.target.value)}
            placeholder="Spill the share plan tea..."
            rows={5}
            className="w-full border rounded p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-black text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Submit Confession
          </button>
        </form>
      )}
    </div>
  );
}
