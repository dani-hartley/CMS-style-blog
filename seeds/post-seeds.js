const { Post } = require('../models');

const postData = [
    {
        title: 'Hello World',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 1
    },
    {
        title: 'Humans Best Friend',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 2
    },
    {
        title: 'Pokemon are making a come back',
        post_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;