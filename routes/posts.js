
module.exports = {

    getPosts(req, res) {
        res.send(req.store.posts);
    },

    addPost(req, res) {
        let newPost = req.body;
        newPost.comments = [];
        req.store.posts.push(newPost);

        res.status(201).send(newPost);
    },

    updatePost(req, res) {
        let postToUpdate = req.store.posts[req.params.id];

        if (post) {
            postToUpdate.name = req.body.name;
            postToUpdate.url = req.body.url;
            postToUpdate.text = req.body.text;

            res.send(postToUpdate);
        }
        else {
            res.status(404).send('Post not found');
        }
    },

    removePost(req, res) {
        req.store.posts.splice(req.params.id, 1);
        res.status(202).send();
    }

};