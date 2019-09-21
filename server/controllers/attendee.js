import { attendees } from '../database';

/**
     * Add a new attendee
     *
     * @static
     * @param {object} req - The request object
     * @param {object} res - The response object
     * @return {object} JSON object representing success message
*/

export const addAttendee = (req, res) => {
    const newAttendee = {
        id: attendees.length + 1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }

    attendees.push(newAttendee);
    return res.status(201).json({
        status: 201,
        message: `Attendee added successfully`,
        data: newAttendee
    });
} 