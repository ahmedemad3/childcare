import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import { RegisterService } from './register.service';

export class RegisterController {
  
  static async register(req: Request, res: Response) {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { username, password, email, fullname, mobileNumber, usertypeCode } = req.body;

    try {
      const registerService = new RegisterService();

      // Check if user already exists
      const existingUser = await registerService.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user object
      const user = new User(
        0,
        username,
        hashedPassword,
        email,
        fullname,
        mobileNumber,
        usertypeCode,
        new Date(),
        "",
        new Date(),
        "",
      );

      // Save user to database
      const userId = await registerService.createUser(user);

      // Generate JWT token
      const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY as string, {
        expiresIn: '24h',
      });

      res.status(201).json({ message: 'User created', token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
export default RegisterController;