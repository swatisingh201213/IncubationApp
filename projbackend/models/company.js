// const  mongoose = require('mongoose');
const mongoose = require ('mongoose');
const autoIncrement = require("mongoose-auto-increment");


const CompanySchema = new mongoose.Schema({
    companyname :{
        type: String
    },
    companylogo :{
        type: String
    },
    description :{
        type: String
    },
    founder :{
        type: String
    },
    sector:{
        type: String
    },
    startuptype :{
        type: String
    },
    websitelink :{
        type: String
    },
    linkedin: {
        type: String
    },
    startdate:{
        type:String
    }
    
},
{ timestamps: true }

);
autoIncrement.initialize(mongoose.connection);
CompanySchema.plugin(autoIncrement.plugin, "Company");
module.exports = mongoose.model('Company', CompanySchema);