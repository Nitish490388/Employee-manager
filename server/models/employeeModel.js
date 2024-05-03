import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  image: {
    public_id: {
      type: String,
    },
    url: {
      type: String,
    }
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  mobile: {
    type: String,
    required: true,
    trim: true
  },
  degignation: {
    type: String,
    required: true,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // gender can only be one of these values
    required: true,
  },
  course: [
    {
      type: String,
    }
  ]
}, { timestamps: true });

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;