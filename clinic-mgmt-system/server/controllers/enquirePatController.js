//The Doctor Will Just Display The Details Of The Patient
//And Retrieve The Disease And Gives The Prescription

const { Doc } = require('../models/docModel');
const { Pats } = require('../models/patModel');
const { Types } = require('mongoose');

const enquirePatController = async (req, res) => {
    try {
        // Fetch the doctor by ID
        const doc = await Doc.findById(req.body.id);
        if (!doc) {
            return res.status(404).json({ data: "Doctor Not Found" });
        }

        // Validate prescription type
        let prescription = req.body.pres;
        if (typeof prescription !== 'string') {
            return res.status(400).json({ error: 'Prescription must be a string' });
        }

        const docObjectId = new Types.ObjectId(doc._id);

        // Fetch patient details
        const patDetail = await Pats.findById(req.body.patid);
        if (patDetail) {
            // Ensure docConsult is initialized
            if (!patDetail.docConsult) {
                patDetail.docConsult = [];
            }
            // Update existing patient
            patDetail.docConsult.push({ doctor: docObjectId, prescription });
            await patDetail.save();

            // Ensure doc.patConsult is initialized
            if (!doc.patConsult) {
                doc.patConsult = [];
            }
            doc.patConsult.push(patDetail.id);
        } else {
            // Validate required patient details for new patient
            const { name, patAge, patGender, patPh } = req.body;
            if (!name || !patAge || !patGender || !patPh) {
                return res.status(400).json({ error: 'Missing required patient details' });
            }

            // Create new patient
            const newPatient = new Pats({
                name: name,
                age: patAge,
                gender: patGender,
                phno: patPh,
                docConsult: [{ doctor: docObjectId, prescription }],
            });
            await newPatient.save();

            // Ensure doc.patConsult is initialized
            if (!doc.patConsult) {
                doc.patConsult = [];
            }
            doc.patConsult.push(newPatient._id);
        }

        // Save doctor details
        await doc.save();

        res.status(200).json({ message: 'Patient details added successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error", message: err.message });
    }
};

module.exports = { enquirePatController };
