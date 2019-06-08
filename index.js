const express = require('express');
const app = express();
const port = 3001;
const request = require('request');

const GITHUB_ACCESS_TOKEN_ENDPOINT =
  'https://github.com/login/oauth/access_token';
// Should be in environment variable, included here for simplicity
const GITHUB_CLIENT_ID = '3522d8fcbcffe633b2ef';
const GITHUB_CLIENT_SECRET = '34746a03985a8b8cc8ee30cdf6adf3ac0a2d46be';

app.get('/getAccessToken/:code', (req, res) => {
  const code = req.params.code;
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  request.post(
    {
      url: GITHUB_ACCESS_TOKEN_ENDPOINT,
      form: {
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    },
    (err, httpResponse, body) => {
      console.log(err, httpResponse, body);
      if (
        !err &&
        httpResponse.statusCode >= 200 &&
        httpResponse.statusCode < 400
      ) {
        res.set('Content-Type', 'application/json');
        res.send(body);
      } else {
        res.status(500);
        res.send();
      }
    }
  );
});

app.listen(port, () => console.log(`Back-end listening on port ${port}`));
