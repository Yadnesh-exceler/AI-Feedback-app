# AI Feedback Backend

This is the backend server for the AI Feedback application. It provides APIs for submitting feedback, analyzing it using AI, and retrieving feedback history and statistics.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ai-feedback
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. Make sure MongoDB is running on your system.

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Submit Feedback
- **POST** `/api/feedback`
- Body: `{ "feedback": "Your feedback text here" }`
- Returns: The analyzed feedback with sentiment, keywords, and score

### Get All Feedback
- **GET** `/api/feedback`
- Returns: List of recent feedback entries

### Get Feedback Statistics
- **GET** `/api/feedback/stats`
- Returns: Aggregated statistics about feedback sentiment and scores

## Error Handling

The API includes proper error handling for:
- Invalid input
- Database errors
- AI service errors
- Server errors

All errors return appropriate HTTP status codes and error messages. 