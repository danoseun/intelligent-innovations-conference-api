import validator from 'validatorjs';
import  { talks }  from '../database';

 /**
      * @param {object} req - The request object
      * @param {object} res - The response oject
      * @param {function} next
      * @returns {object} JSON representing the failure message
  */

export const addTalkValidation = (req, res, next) => {
    let { title, abstract, speaker_firstname, speaker_lastname, speaker_email, speaker_company, speaker_bio } = req.body;

    const rules = {
        title: 'required|string',
        abstract: 'required|string',
        speaker_firstname: 'required|min:2|alpha',
        speaker_lastname: 'required|min:2|alpha',
        speaker_email: 'required|email',
        speaker_company: 'alpha',
        speaker_bio: 'required|string'
    };

    const validation = new validator(req.body, rules);
    if (validation.fails()) {
        return res.status(400).json({
            status: 400,
            error: validation.errors.errors
        });
    }
    speaker_email = speaker_email.toLowerCase().trim();
    const foundSpeakerEmail = talks.find(talk => talk.speaker_email === speaker_email);

    if (foundSpeakerEmail) {
        return res.status(409).json({
            status: 409,
            error: `This email already exists`
        });
    }
    req.body.title = title;
    req.body.abstract = abstract;
    req.body.speaker_firstname = speaker_firstname;
    req.body.speaker_lastname = speaker_lastname;
    req.body.speaker_email = speaker_email;
    req.body.speaker_company = speaker_company;
    req.body.speaker_bio = speaker_bio;
    return next();
}