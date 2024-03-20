import express from 'express';
import mongoose from 'mongoose';
import { UserController } from './Controllers/index.js';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect('mongodb+srv://ana:K9Wi9CNddY1iAl0x@cluster0.yivkgdq.mongodb.net/Augmented-XR-Tour?retryWrites=true&w=majority')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB ERROR', err));

  app.listen(8080, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('Server ok');
  });

  app.post('/auth/register', UserController.register);
  app.post('/auth/login', UserController.login);

