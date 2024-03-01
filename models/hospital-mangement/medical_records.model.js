import mongoose from 'mongoose';
const medicalRecordSchema = new mongoose.Schema({},{ timeStamp: true })

export const MedicalRecord = mongoose.model("medicalRecord", medicalRecordSchema );