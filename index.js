require('dotenv').config();
const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const ttsKey = process.env.TTS_API_KEY; // Load from .env file
const gptApiKey = process.env.OPENAI_API_KEY; // Load from .env file

app.post('/makeApiCall', async (req, res) => {
    try {
        const { requestData } = req.body;
        const url = "https://api.openai.com/v1/chat/completions";

        // Use axios for the API call
        const response = await axios.post(
            url,
            requestData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${gptApiKey}`,
                },
            }
        );

        // Send the API response data back to the client
        res.json(response.data);
    } catch (error) {
        console.error("Error in makeApiCall endpoint:", error.message);

        // Handle axios errors (e.g., network issues, non-2xx responses)
        if (error.response) {
            return res.status(error.response.status).json({
                error: `API call failed with status: ${error.response.status}`,
                details: error.response.data,
            });
        }

        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post('/makeTextToSpeechCall', async (req, res) => {
    try {
        const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${ttsKey}`;

        // Forward the payload from the client to the TTS endpoint
        const response = await axios.post(endpoint, req.body, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Send the response from TTS API back to the client
        res.status(response.status).send(response.data);
    } catch (error) {
        console.error('Error in Text-to-Speech call:', error.message);

        // Send an error response back to the client
        res.status(error.response?.status || 500).send({
            error: error.message,
            details: error.response?.data,
        });
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
