"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");

var courseSchema = new Schema(
  {
      title: {
        required: true,
        type: String,
        unique: true,
      },
      heroImage:{
        required:true,
        type:String,
        default:"HeroImage.jpg",
        
      },
      description: {
        required: true,
        type: String,
        trim:true,
        default:"Not specified",
        
      },
      cuisine: {
        required: true,
        type: String,
        default:"",
      },
      cost: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages cannot have a negative cost"]
      },
      Travelers: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages cannot have more than 25 travelers"],
        max: [25, "Vacation packages cannot have a negative number of travelers"]
      },
      destination: {
        required: true,
        type: String,
        default: "Not specified",
       
      },
      departureLocation: {
        type: String,
        default: "",
        required: true,
        
      },
      departureDate	: {
        required: true,
        type:Date,
        default:Date.now(),
      },
      returnDate:{
        required: true,
        type:Date,
        default:Date.now(),

      }
    },
    {
      timestamps: true
    }
);

module.exports = mongoose.model("Vacation", courseSchema);
