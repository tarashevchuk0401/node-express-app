const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.json());


router.get('/text', (req, res, next) => {
    res.send(`
    <h2>POSTS</h2>
    <form action="" method="POST">
    <div>
    <input type="text" name="username" >
    </div>
    <div>
    <button>SEND</button>
    </div>
    </form>
    `)
})

router.post('/text', (req, res, next) => {
    
    console.log('post')
    console.log(req.body)
    console.log(res.body)
})

module.exports = router;