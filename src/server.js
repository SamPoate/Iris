import { default as Chatkit } from '@pusher/chatkit-server';

export const chatkit = new Chatkit({
  instanceLocator: 'v1:us1:fd274c34-0b78-4fd9-a1fe-fedca9a94738',
  key:
        'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/fd274c34-0b78-4fd9-a1fe-fedca9a94738/token',
});

// const post = ('/users',
// (req, res) => {
//   const { username } = req.body;
//   chatkit
//     .createUser({
//       id: username,
//       name: username,
//     })
//     .then(() => res.sendStatus(201))
//     .catch((error) => {
//       if (error.error === 'services/chatkit/user_already_exists') {
//         res.sendStatus(200);
//       } else {
//         res.status(error.status).json(error);
//       }
//     });
// });

// app.post('/authenticate', (req, res) => {
//   const authData = chatkit.authenticate({ userId: req.query.user_id });
//   res.status(authData.status).send(authData.body);
// });
