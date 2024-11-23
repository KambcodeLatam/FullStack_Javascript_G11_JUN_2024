import express from 'express';
import 'dotenv/config';
import axios from 'axios';

const app = express();

app.use(express.json())

const port = process.env.PORT;
const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY_OPENAI



app.post('/send-question', async (req, res) => {
    const { question, role } = req.body;
    const body = {
        "model": "gpt-4o-mini",
        "messages": [
            {
                "role": "system",
                "content": role
            },
            {
                "role": "user",
                "content": question
            }
        ]
    }
    const response = await axios.post(`${baseUrl}chat/completions`, body, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })
    console.log(response.data)
    res.json(response.data.choices[0].message);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})