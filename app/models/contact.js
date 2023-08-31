import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is a required filed"],
    trim: true,
    minLength: [2, "Name must be more than 2 characters"],
    maxLength: [20, "Name must not be more than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is a required field"],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Email is not valid"],
  },
  message: {
    type: String,
    required: [true, "Message is a required filed"],
    minLength: [5, "Message must be more than 5 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;
