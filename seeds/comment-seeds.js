const { Comment } = require('../models');
const seedPosts = require('./post-seeds');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 3,
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;