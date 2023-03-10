const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')

app.get("/api/fortune", getFortune);

const { getQuote } = require('./controller')

app.get("/api/quote", getQuote);

app.post('/submit-goal', (req, res) => {
    const { goal, deadline } = req.body;

    if (!goal || !deadline) {
        return res.status(400).send({ error: 'Missing goal or deadline' });
    }
    res.status(200).send({ message: 'Goal submitted successfully' });
});

app.put('/update-goal/:id', (req, res) => {
    const { id } = req.params;
    const { goal, deadline } = req.body;

    if (!goal || !deadline) {
        return res.status(400).send({ error: 'Missing goal or deadline' });
    }
     res.status(200).send({ message: 'Goal updated successfully' });
});

app.delete('/delete-goal/:id', (req, res) => {
    const { id } = req.params;
    
    res.status(200).send({ message: 'Goal deleted successfully' });
});

app.post('/submit-buddy', (req, res) => {
    const { buddy, deadline } = req.body;

    if (!buddy || !deadline) {
        return res.status(400).send({ error: 'Missing buddy' });
    }
    res.status(200).send({ message: 'Buddy submitted successfully' });
});


app.listen(4000, () => console.log("Server running on 4000"));
