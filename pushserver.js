let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let webpush = require('web-push');
let app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('This is a push notification server use post');
});

app.post('/subscribe', (req, res) => {
  console.log('checks');
  let sub = req.body;
  res.set('Content-Type', 'application/json');
  webpush.setVapidDetails(
    'mailto:example@yourdomain.org',
    'BJuJKigoLdIfSxV_3bJnZOT0zZU-nTkZgZqFVEATgb4oDTj6Drj9dnvJ3qXCsqxumQVQ4O3jFcIO9_RVIoYEegI',
    'V5HeFrvRsUIbbj5GjU6OaVUFpuXVSFKTkuzsnVSA0oI'
  );

  let payload = JSON.stringify({
    notification: {
      title: 'hello me',
      body: 'Thanks for test',
      icon: 'https://yt3.ggpht.com/a-/AAuE7mCxr-4W53FAxBRcKR0iDk_vPCSAmW-QKFGaFA=s88-mo-c-c0xffffffff-rj-k-no',
    },
  });

  Promise.resolve(webpush.sendNotification(sub, payload))
    .then(() =>
      res.status(200).json({
        message: 'Notification sent',
      })
    )
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
