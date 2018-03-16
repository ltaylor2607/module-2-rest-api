let storeObject = require('../store');
const posts = storeObject.store.posts;
module.exports = {
    getPosts(req, res) {
        res.status(200).send(posts);
    },

    addPost(req, res) {
        const id = posts.length || 0;
        posts.push(req.body);
        posts[id].comments = [];
        res.status(201).send({id});
    },

    updatePost(req, res) {
        let comments = [];
        if (!req.body.comments) {
            comments = posts[req.params.postId].comments;
        } else {
            comments = req.body.comments;
        }
        posts[req.params.postId] = req.body;
        posts[req.params.postId].comments = comments; 
        res.status(200).send(posts[req.params.postId]);
    },

    removePost(req, res) {
        posts.splice(req.params.postId, 1);
        res.status(204).send();
    }
};