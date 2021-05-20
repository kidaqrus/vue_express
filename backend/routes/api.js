const Lesson = require('../models/lesson');
const express = require('express');
const router = express.Router();
const User = require('../models/user');



router.get('/lessons', (req, res) => {
    const lessons = Lesson.find({}, (err, lessons) => {
        if (err) {
            console.log('RETRIEVE error: ' + err);
            res.status(500).send('Error');
        } else if (lessons) {
            res.status(200).json(lessons);
        }
    })
})


router.get('/users', (req, res) => {
    const users = User.find({}, (err, users) =>{
        if(err){
            console.log('RETRIEVE error:' + err);
            res.status(500).send('Error');
        } else if(users){
            res.status(200).json(users);
        }
    })
})

module.exports = router;