const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const quiz = require('./quiz.json');
const port = 5050;
const app = express();

app.use(express.json());
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/quiz', (req, res) => {
    res.json({ ok: true, quiz})
});

app.post('/api/quiz', (req, res) => {
    
    const answers = req.body;

    const results = quiz.reduce((results,question,index) => {
        const answer = answers[index];

        if (question.answer === answer) {
            results.correct += 1;
        } else {
            results.incorrect +=1;
        }

        return results;
    }, {correct: 0, incorrect: 0, total: quiz.length});

    res.json({ok: true, results});

});

app.listen(port);




//const port = process.env.PORT || 8080;
//const app = express();

// the __dirname is the current directory from where the script is running

