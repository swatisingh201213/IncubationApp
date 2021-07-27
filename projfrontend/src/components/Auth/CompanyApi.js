import axios from "axios";

const urlcompany = "http://localhost:4000/api";

// create post company

export const createcompany = async (Ccompany) => {
  try {
    return await axios.post(`${urlcompany}/createcompany`, Ccompany);
  } catch (error) {
    console.log("Error while creating company.", error);
  }
};

// get all company form
export const GetallCompany = async () => {
  try {
    const response = await axios.get(`${urlcompany}/getallcompanies`);
    return response.data;
  } catch (error) {
    console.log("error while loadding the company..", error);
  }
};

// get single company by an Id
export const GetsingleCompany = async (id) => {
  try {
    const response = await axios.get(`${urlcompany}/getByIdcompany/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error while loadding the company..", error);
  }
};

// delete the company
export const DeleteCompany = async (id) => {
  try {
    await axios.delete(`${urlcompany}/deletecompany/${id}`);
  } catch (error) {
    console.log("error while loadding the company..", error);
  }
};

/// update company

export const updatecompanyOne = async (id, Ucompany) => {
  try {
    await axios.post(`${urlcompany}/updatecompany/${id}`, Ucompany);
  } catch (error) {
    console.log("error while updating the companies..", error);
  }
};

// upload file

export const uploadFile = async (data) => {
  try {
    return await axios.post(`${urlcompany}/file`, data);
  } catch (error) {
    console.log("error while uploading the file .. ", error);
  }
};
