const Company = require("../models/company");
// import { Companys } from "../models/companys";

// create companys list
exports.createcompany= async(req,res)=>{
  
  try{

    const comp1 = await new Company(req.body);
    console.log(comp1);
    comp1.save();
    res.status(200).json("Company is created....");
  }catch(error)
  {
    res.status(500).json({message: error});
  }
 

}

// get all companys
exports.getAllCompany = async (req, res) => {
  try {
    let company1 = await Company.find({}).sort("-createdAt");

    res.status(200).json(company1);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get company by and id

exports.getCompany = async (req, res) => {
  try {
    // sort("-createdAt");
    const company1 = await Company.findById(req.params.id).sort("-createdAt");

    res.status(200).json(company1);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update company by and id

exports.updateCompany = async (req, res) => {
  try {
    await Company.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).json("company updated successfully");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// delete company

exports.deleteCompany = async (req, res) => {
  try {
    const company1 = await Company.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).json({
        message: error,
      });
    }
    res.send(company1);
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};
