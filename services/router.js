const tweetClient = require('../clients/tweetClient');

var router = require('express').Router();

router.route('/').get(tweetClient.fetchTweets);

module.exports = router;
