import axios from 'axios';
import jwt from 'jsonwebtoken';

const baseUrl = process.env.BASE_URL;
const apiKey = process.env.API_KEY_OPENAI
const secretKey = process.env.SECRET_KEY
// crear users.json y llamarlo en vez de la variable users
const USERS = [
    {username: 'admin', password: 'admin'},
    {username: 'user', password: 'user'}
]

export const register = () => {
    // crear un endpoint que cree un usuario y lo guarde en users.json
}

export const login = (req, res) => {
    const { username, password } = req.body
    const user = USERS.find(user => user.username === username && user.password === password)
    if(!user){
        return res.status(401).json({message: 'Invalid credentials'})
    }
    const token = jwt.sign({username} , secretKey, {expiresIn: '20m'})
    return res.json({message: 'Login correcto', token})
}

export const test = (req, res) => {
    res.send('Test')
}

export const sendQuestion = async (req, res) => {
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
    res.json(response.data.choices[0].message);
}