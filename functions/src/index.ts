import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import * as rp from 'request-promise';

const corsMiddleware = cors({ origin: true });

admin.initializeApp(functions.config().firebase);
const db = admin.database();
const users = db.ref('users');

export const createContactFormRecord = functions.https.onRequest((req, res) => {
  return corsMiddleware(req, res, async () => {
    await postToSlack(req.body.name);
    await users.push({
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      budget: req.body.budget,
      description: req.body.description,
    }, (error: Error) => {
      if (error) {
        res.sendStatus(400);
        return;
      }
      res.sendStatus(201);
    });
  });
});

// See: https://github.com/firebase/functions-samples/blob/Node-8/github-to-slack/functions/index.js
function postToSlack(name: string) {
  return rp({
    method: 'POST',
    uri: functions.config().slack.webhook_url,
    body: {
      text: `${name} submitted a contact request`,
    },
    json: true,
  });
}