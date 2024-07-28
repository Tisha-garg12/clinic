//Get The Details Of The Patients Where He Is Consulted With 


const { Doc } =require( '../models/docModel');

const docDataReader = async (req, res) => {
    try {
        const docs = await Doc.findById(req.body.id)
        .populate('patConsult', 'name age gender phno');
        
        
        if (!docs) return res.status(200).json({ data: "No data" });
        return res.status(200).json({ data: docs });
    } catch (error) {
        return res.status(500).json("Retrieve Error " + error);
    }
}
module.exports= { docDataReader };