import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as cors from 'cors';

const corsMiddleware = cors({ origin: true });

admin.initializeApp(functions.config().firebase);
const db = admin.database();
const users = db.ref('users');

export const createContactFormRecord = functions.https.onRequest((req, res) => {
  return corsMiddleware(req, res, async () => {
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
