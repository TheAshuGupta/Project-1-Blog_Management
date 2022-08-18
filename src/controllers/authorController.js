const authorModel = require('../models/authorModel');

const createAuthor = async function (req, res){
  try{
    let details = req.body;
    
    if(!Object.keys(details).length){ return res.status(400).send({ स्थिति : "विफल", सन्देश: 'कोई विवरण नहीं प्राप्त हुआ। कृपया विवरण प्रविष्ट करे।'})};

    let {title, fname, lname, email, password} = details;

    if(title || title == ''){
      if(!['Mr', 'Mrs', 'Miss'].includes(title)) return res.status(400).send({स्थिति : "विफल", सन्देश: 'सम्बोधन अमान्य। कृपया सही सम्बोधन अंकित करें।'})
    }

    if(!fname || fname == '') return res.status(400).send({स्थिति : "विफल", सन्देश: 'मूल नाम अमान्य! कृपया सही मूल नाम अंकित करें।'})

    let createdDoc = await authorModel.create(details);
    return res.status(201).send({status: true, message: 'Author Created Successfully', data: createdDoc});
  }
  catch(err){return res.status(500).send({status: false, message: err.message})};
}

module.exports = {createAuthor};