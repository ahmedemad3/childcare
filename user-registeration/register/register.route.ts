import express from 'express';
import { body } from 'express-validator';
import { RegisterController } from './register.controller';

const router = express.Router();

// @route   POST api/register
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    body('username', 'Username is required').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Please enter a password with 8 or more characters').isLength({ min: 8 }),
    body('fullName', 'Full name is required').not().isEmpty(),
    body('mobileNumber', 'Mobile number is required').not().isEmpty(),
    body('userTypeCode', 'User type code is required').not().isEmpty()
  ],
  RegisterController.register
);

export default router;