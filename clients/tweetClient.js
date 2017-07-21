var Twit = require('twit');

var twitter = new Twit({
  consumer_key: '15BflnsnkUIA6r2pMDhP0ZsRx',
  consumer_secret: 'EypW1vj99AO6IMtiCnXheaSjtEvTIEthT4PaOPAwdb8089DWPk',
  access_token: '2960425658-xK5erkCTOV2pu2H3XME0XasptksdbgA6sv2y2TG',
  access_token_secret: 'eARyQyZloEjS75fNoIBSpPWhz24WEBbMPMRsAicWNCMAe',
  timeout_ms: 60 * 1000,
});

exports.fetchHomePageTweets = function (req, res) {
  twitter.get('trends/place', { id: '1' }, function (err, data) {
    if (err) {
      console.log("Error : " + err);
    }
    res.json(data);
  });
};

exports.fetchSearchTweets = function (req, res) {
  const query = req.body.search;
  twitter.get('search/tweets', { q: query, count: 100 }, function (err, data) {
    if (err) {
      console.log("Error : " + err);
    }
    res.json(data);
  });
}