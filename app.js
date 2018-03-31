const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const friends = ['Brian', 'Tyler', 'Sergio', 'Zephyr'];

app.get('/', function(req, res) {
    res.render('home');
});

app.post('/addfriend', function(req, res) {
    let newFriend = req.body.newfriend; // the data is retrieved from input through the Request's body
    friends.push(newFriend);
    res.redirect('/friends');
});

app.get('/friends', function(req, res) {
    res.render('friends', {friends: friends});
});


app.listen(3000, () =>
    console.log("Server started!!")
);
