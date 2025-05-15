
import { useEffect, useState } from 'react';

export default function Confessions() {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    const fetchConfessions = async () => {
      const res = await fetch('/api/list');
      const data = await res.json();
      setConfessions(data.records || []);
    };
    fetchConfessions();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-50 p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Confessions Wall</h1>
      <div className="grid gap-4 max-w-3xl mx-auto">
        {confessions.map((entry) => (
          <div key={entry.id} className="bg-white shadow-md rounded-lg p-4 text-left border-l-4 border-pink-300">
            <p>{entry.fields.Confession}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
