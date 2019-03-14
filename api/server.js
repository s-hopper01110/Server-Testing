//server-side testing 

const express = require('express');

const doggos = require('../dogs/dogsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'working' });
});

// server.get('/api/dogs', async (req, res) => {
//   const rows = await dogs.getAll();

//   res.status(200).json(rows);
// });

server.post('/api/dogs', (req,res) => {
    const name = req.body.name
    
    if(name) {
        doggos.insert(name)
        res.status(201).json({ message: ' The dog has been created.' })
    } else {
        res.status(400).json({ message: ' Error adding dog to database' })
    }
})

// // server.delete('/:id', ( req, res ) => {
//     const { id } =req.params;
//     db
//     .remove(id)
//     .then(posts => {
//         if( posts ){
//             res.status(204).end();
//         }else{
//             res.status(404).json({ success: false,  message:'The dog with the specified ID does not exist.' })
//         }
//     })
//     .catch(err => {
//         res.status(500).json({ error: 'The dog could not be removed' })
//     })
// })

module.exports = server;