import Admin from "../models/adminModel.js";

const getAdmin = async (req, res) => {
  try {
    const _id = req._id;
    const user = await Admin.findById(_id);
    const data = user.name;
    res.send({ data });
  } catch (error) {
    console.log(error);
  }
}

export {
  getAdmin
}