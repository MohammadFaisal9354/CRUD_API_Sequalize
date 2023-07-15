const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Customer } = require('./index');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/customers', async (req, res) => {
    const customers = await Customer.findAll();
    res.json(customers);
});

app.post('/customers', async (req, res) => {
    const { name, email, phone } = req.body;
    const customer = await Customer.create({ name, email, phone });
    res.json(customer);
});

app.put('/customers/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const customer = await Customer.findByPk(id);
    customer.name = name;
    customer.email = email;
    customer.phone = phone;
    await customer.save();
    res.json(customer);
});

app.delete('/customers/:id', async (req, res) => {
    const { id } = req.params;
    const customer = await Customer.findByPk(id);
    await customer.destroy();
    res.json({ message: 'Customer deleted successfully' });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
