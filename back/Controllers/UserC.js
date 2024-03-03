import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../Models/User.js';
import {validationResult} from 'express-validator';

export const register = async(req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json(errors.array());
        }
        const email = req.body.email;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'This email is already in use.' });
        }

        const password = req.body.password;
        const fullName = req.body.fullName;
        console.log({email,password,fullName});

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const doc = new UserModel({
            email,
            fullName: req.body?.fullName,
            passwordHash,
            avatarUrl: req.body?.avatarUrl,
        });

        const user = await doc.save();

        const token = jwt.sign(
            {
                _id: user._id,
            },
            'secret',
            {
                expiresIn: '30d',
            },
        );

        res.json({
            user,
            token,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'register error'
        });
    }
};


export const login = async (req, res) => {
    try {
      const user = await UserModel.findOne({ email: req.body.email });
  
      if (!user) {
        return res.status(404).json({
          message: 'Utilizator inexistent',
        });
      }
  
      const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
  
      if (!isValidPass) {
        return res.status(400).json({
          message: 'Email sau parola gresita',
        });
      }
  
      const token = jwt.sign(
        {
          _id: user._id,
        },
        'secret123',
        {
          expiresIn: '30d',
        },
      );
  
      const { passwordHash, ...userData } = user._doc;
  
      res.json({
        ...userData,
        token,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Conectare esuata',
      });
    }
  };