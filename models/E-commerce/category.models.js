import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timeStamp: true }
);

export const category = mongoose.model('Category', categorySchema);
