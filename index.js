import express from "express";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    const data = {
        status: "success",
        message: "My Rule-Validation API",
        data: {
          name: "Oluwaseun Adesina",
          github: "@Oluwaseun.Adesina",
          email: "oluwaseunadesina8@gmail.com",
          mobile: "08137271798",
          twitter: "@OluwaseunAdesina"
        }
      }
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(data);
});

app.get('/me', async (req, res) => {
    try {
        const response = await axios.get('https://catfact.ninja/fact', {
            // timeout: 5000
        })

        const fact = response.data.fact;

        const data = {
            status: "success",
            user: {
                email: "oluwaseunadesina8@gmail",
                name: "Oluwaseun Adesina",
                stack: "JavaScript, Nodejs, Expressjs",
            },
            timestamp: new Date().toISOString(),
            fact: fact,
        }

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching cat fact:', err.message);
        return res.status(500).json({ status: "error", message: "Failed to fetch cat fact" });
    }
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})