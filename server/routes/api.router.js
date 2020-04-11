const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/');
    pool.query('SELECT * FROM "feedback" ORDER BY "id";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('POST /api/');
    let data = req.body
    let queryText = 'INSERT INTO "feedback" (feeling, understanding, support, comments, flagged) VALUES($1, $2, $3, $4, $5);';
    pool.query(queryText, [data.feeling, data.content, data.support, data.comments, data.flagged]).then(result => {
        
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error posting into "feedback"', error);
        res.sendStatus(500);
    });
})

router.delete('/:ID', (req, res) => {
    let data = req.params
    
    console.log('DELETE /api/');
    let queryText = 'DELETE FROM "feedback" WHERE id = $1';
    pool.query(queryText,[data.ID]).then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error deleting from "feedback"', error);
        res.sendStatus(500);
    });
})

router.put('/', (req, res) => {
    console.log('PUT /api/');
    let queryText = 'UPDATE "feedback" SET flagged = $1 WHERE id = $2';
    pool.query(queryText, [req.body.flag, req.body.ID]).then(result => {
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error updating "feedback"', error);
        res.sendStatus(500);
    });
})

module.exports = router;