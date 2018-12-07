const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

let store = {
    posts: []
}

app.use((req, res, next) => {
    req.store = store;
    next();
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(201).send('App root');
});

app.get('/posts', routes.posts.getPosts);
app.post('/post', routes.posts.addPost);
app.put('/post/:id', routes.posts.updatePost);
app.delete('/post/:id', routes.posts.removePost);

app.get('/posts/:postId/comments', routes.comments.getComments)
app.post('/posts/:postId/comment', routes.comments.addComment)
app.put('/posts/:postId/comments/:commentId', routes.comments.updateComment)
app.delete('/posts/:postId/comments/:commentId', routes.comments.removeComment)

app.listen(3000);