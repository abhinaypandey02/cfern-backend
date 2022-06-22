const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({origin:"*"}))
const { createPdf } = require('./components/createPdf');

app.use(express.json());

app.post('/updatePdf', async (req, res) => {
	await createPdf('unlocked-form.pdf', req.body, res);
});

app.listen(4000, () => console.log('Server started on port 4000'));
