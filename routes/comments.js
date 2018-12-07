module.exports = {

    getComments(req, res) {
        let post = req.store.posts[req.params.postId];
        if (post) {
            res.send(post.comments);
        }
        else {
            res.status(404).send('Post not found');
        }
    },

    addComment(req, res) {
        let post = req.store.posts[req.params.postId];
        if (post) {
            let comment = { text: req.body.comment };
            post.comments.push(comment);
            res.status(201).send(post);
        }
        else {
            res.status(404).send('Post not found');
        }
    },

    updateComment(req, res) {
        let post = req.store.posts[req.params.postId];
        if (post) {
            let comment = post.comments[req.params.commentId];
            if (comment) {
                comment.text = req.body.text;
                res.status(201).send(post);
            }
            else {
                res.status(404).send('Comment not found');
            }
        }
        else {
            res.status(404).send('Post not found');
        }
    },

    removeComment(req, res) {
        let post = req.store.posts[req.params.postId];
        if (post) {
            let comment = post.comments[req.params.commentId];
            if (comment) {
                post.comments.splice(req.params.commentId, 1);
                res.status(202).send();
            }
            else {
                res.status(404).send('Comment not found');
            }
        }
        else {
            res.status(404).send('Post not found');
        }
    }

};