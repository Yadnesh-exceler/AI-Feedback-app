import { useState } from "react";
import axios from "axios";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/feedback", { feedback });
    setResult(res.data);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border p-2"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2">Analyze</button>
      </form>
      {result && (
        <div className="mt-4">
          <p><strong>Sentiment:</strong> {result.sentiment}</p>
          <p><strong>Category:</strong> {result.category}</p>
        </div>
      )}
    </div>
  );
}
