import { talks, attendees } from '../database';

/**
     * Add a new talk
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
*/

export const addTalk = (req, res) => {
    const newTalk = {
        id: talks.length + 1,
        title: req.body.title,
        abstract: req.body.abstract,
        room: req.body.room,
        speaker_firstname: req.body.speaker_firstname,
        speaker_lastname: req.body.speaker_lastname,
        speaker_email: req.body.speaker_email,
        speaker_company: req.body.speaker_company,
        speaker_bio: req.body.speaker_bio,
        talkAttendees: []
    }

    talks.push(newTalk);
    return res.status(201).json({
        status: 201,
        message: `Talk added successfully`,
        data: newTalk
    });
}


/**
     * Add attendee to a talk
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
*/

export const addAttendeeToTalk = (req, res) => {
    let findTalk = talks.find(talk => talk.id === Number(req.params.id));
    if (!findTalk) {
        return res.status(404).json({
            status: 404,
            error: `Talk not found`
        });
    }
    let findAttendee = attendees.find(attendee => attendee.email === req.body.email);
    if (!findAttendee) {
        return res.status(404).json({
            status: 404,
            error: `Attendee not found`
        });
    }
    const addedAttendee = findTalk.talkAttendees.push(findAttendee.email);
    return res.status(201).json({
        status: 201,
        data: `Attendee added successfully`
    });
}

/**
     * Remove a talk
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
*/

export const removeTalk = (req, res) => {
    let foundTalk = talks.find(talk => talk.id === Number(req.params.id));
    if (!foundTalk) {
        return res.status(404).json({
            status: 404,
            error: `Talk not found`
        });
    }
    talks.splice(foundTalk, 1);
    return res.status(200).json({
      status: 200,
      data: 'Talk successfully deleted'
    });
}

/**
     * Get all talks
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
*/
export const getAllTalks = (req, res) => {
    return res.status(200).json({
        status: 200,
        data: talks
      });
}