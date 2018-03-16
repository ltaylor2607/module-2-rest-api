let storeObject = require('../store');
const posts = storeObject.store.posts;

module.exports = {
    getComments(req, res) {
        const postId = req.params.postId;
        res.status(200).send(posts[postId].comments || []);
    },

    addComment(req, res) {
        const postId = req.params.postId;
        const comments = posts[postId].comments;
        const id = comments.length || 0;
        comments.push(req.body);
        res.status(201).send({id});
    },

    updateComment(req, res) {
        const postId = req.params.postId;
        const comments = posts[postId].comments;
        const commentId = req.params.commentId;
        comments[commentId] = req.body;
        res.status(200).send(comments[commentId]);
    },

    removeComment(req, res) {
        const postId = req.params.postId;
        const commentId = req.params.commentId;
        const comments = posts[postId].comments;
        comments.splice(commentId, 1);
        res.status(204).send();
    }
};