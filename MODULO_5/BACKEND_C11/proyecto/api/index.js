import express from 'express';
import 'dotenv/config';

import { authenticateToken } from '../middlewares.js';
import { login, sendQuestion, test } from '../endpoints.js';

const app = express();

app.use(express.json())

const port = process.env.PORT;

app.post('/login', login )

app.get('/test', authenticateToken, test )

app.post('/send-question', authenticateToken, sendQuestion)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})