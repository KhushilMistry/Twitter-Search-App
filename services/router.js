var tweetClient = require('../clients/tweetClient');

const router = require('express').Router();

router.route('/').get(tweetClient.fetchHomePageTweets);

router.route('/tweets').post(tweetClient.fetchSearchTweets);

module.exports = router;
