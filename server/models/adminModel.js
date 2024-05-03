// loginSchema.js
import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  serialnumber: {
    type: Number,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

adminSchema.pre('save', async function (next) {
  const doc = this;
  if (doc.isNew) {
    try {
      const count = await Admin.countDocuments();
      doc.serialnumber = count + 1;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const Admin = mongoose.model("admin", adminSchema);
export default Admin;

