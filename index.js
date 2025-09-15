import express from 'express'

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'You are using Express API'
    })
})

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
})