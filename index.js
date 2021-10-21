const express = require('express');
const app = express();
const port = 5000;
const users = [
    { id: '1', name: 'Aamir khan', profession: 'Actor', age: '50' },
    { id: '2', name: 'Salman khan', profession: 'Actor', age: '51' },
    { id: '3', name: 'Shahrukh khan', profession: 'Actor', age: '52' },
    { id: '4', name: 'Shakib khan', profession: 'Actor', age: '53' },
    { id: '5', name: 'Amin khan', profession: 'Actor', age: '54' },
    { id: '6', name: 'Imran khan', profession: 'President', age: '55' },
]

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.parems.id);
    res.send(user);
})

app.listen(port, () => {
    console.log('Listenning to port', port);
})