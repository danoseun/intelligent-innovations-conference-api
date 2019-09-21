import express from 'express';
import { addTalk, addAttendee, addAttendeeToTalk, removeTalk, getAllTalks } from '../controllers'
import { addTalkValidation, addAttendeeValidation } from '../validations';


export const router = express.Router();

router.get('/', (req, res) => res.status(200).json({data: `Welcome to the conference API`}));
router.post('/talks', addTalkValidation, addTalk);
router.post('/attendees', addAttendeeValidation, addAttendee);
router.post('/talks/:id/attendee', addAttendeeToTalk);
router.delete('/talks/:id', removeTalk);
router.get('/talks', getAllTalks);
router.all('*', (req, res) => res.status(404).json({error: `Page not found`}));
