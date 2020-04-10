const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /api/');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/', error)
        res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
    console.log('POST /api/');
    let data = req.body
    let queryText = 'INSERT INTO "feedback" (feeling, understanding, support, comments, flagged), VALUES($1, $2, $3, $4, $5);';
    pool.query(queryText, [data.feeling, data.content, data.support, data.comments, data.flagged]).then(result => {
        
        res.sendStatus(200);
    })
    .catch(error => {
        console.log('error posting into "feedback"', error);
        res.sendStatus(500);
    });
})

module.exports = router;