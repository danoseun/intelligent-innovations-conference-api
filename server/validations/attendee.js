import validator from 'validatorjs';
import { attendees } from '../database';

 /**
      * @param {object} req - The request object
      * @param {object} res - The response oject
      * @param {function} next
      * @returns {object} JSON representing the failure message
  */

export const addAttendeeValidation = (req, res, next) => {
    let { firstname, lastname, email } = req.body;

    const rules = {
        firstname: 'required|min:2|alpha',
        lastname: 'required|min:2|alpha',
        email: 'required|email'
    };

    const validation = new validator(req.body, rules);
    if (validation.fails()) {
        return res.status(400).json({
            status: 400,
            error: validation.errors.errors
        });
    }
    email = email.toLowerCase().trim();
    const foundEmail = attendees.find(attendee => attendee.email === email);

    if (foundEmail) {
        return res.status(409).json({
            status: 409,
            error: `This email already exists`
        });
    }
    req.body.firstname = firstname;
    req.body.lastname = lastname;
    req.body.email = email;
    return next();
}