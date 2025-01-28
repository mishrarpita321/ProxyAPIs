# AI Proxy API

This repository contains the backend service for the **AI Proxy API**, designed to facilitate communication between a frontend application and various APIs, including OpenAI's GPT API and Google Text-to-Speech (TTS) API. The backend provides endpoints for handling requests and responses, acting as an intermediary layer.

## Features

- **Proxy API for GPT**: A secure proxy for making requests to OpenAI's GPT API.
- **Text-to-Speech Integration**: Supports Google Text-to-Speech API calls.
- **CORS Support**: Enables communication with your frontend application.
- **Error Handling**: Robust handling of errors for reliable API interactions.

## Project Structure

```
└── mishrarpita321-proxyapis/
    ├── index.js        # Main backend logic
    ├── package.json    # Project metadata and dependencies
    └── vercel.json     # Configuration for deployment on Vercel
```

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed on your system.
2. **API Keys**:
   - OpenAI GPT API Key (`OPENAI_API_KEY`)
   - Google TTS API Key (`TTS_API_KEY`)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd mishrarpita321-proxyapis
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   TTS_API_KEY=your_google_tts_api_key
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

   The server will run on `http://localhost:3000` by default.

## API Endpoints

### 1. **/makeApiCall**
   Proxy endpoint for GPT API requests.

   - **Method**: `POST`
   - **Body**:
     ```json
     {
       "requestData": { ... } // Payload for GPT API
     }
     ```
   - **Response**:
     Returns GPT API's response.

### 2. **/makeTextToSpeechCall**
   Proxy endpoint for Google Text-to-Speech API.

   - **Method**: `POST`
   - **Body**:
     ```json
     {
       ... // Payload for Google TTS API
     }
     ```
   - **Response**:
     Returns Google TTS API's response.

## Deployment

This project is configured for deployment on Vercel.

1. Ensure the `vercel.json` file is included in the root directory.
2. Deploy the project using the Vercel CLI or web interface.

   ```bash
   vercel
   ```

## Dependencies

- [Express](https://www.npmjs.com/package/express)
- [Axios](https://www.npmjs.com/package/axios)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

## License

This project is licensed under the ISC License.

## Author

- [Arpita Mishra](https://mishrarpita321.github.io)

---

Feel free to contribute to this repository or raise issues if you encounter any problems!