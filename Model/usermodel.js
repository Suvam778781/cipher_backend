let mongoose = require("mongoose");
let UserSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  profile_url: { type: String },
  password: { type: String, required: true },
  social_media_url: {
    type: Object,
    default: {
      linkedin: { type: String, default: "" } ,
      github: { type: String, default: "" } ,
      facebook: { type: String, default: "" } ,
       twiter: { type: String, default: "" } ,
       instagram: { type: String, default: "" } ,
       website: { type: String, default: "" } ,
    }
  },
  education: { type: String, default: "Graduation" },
  profession: { type: String, default: "College Student" },
  interest: { type: Array, default: [] },
  notification: { type: Array, default: [] },
  cipher_points:{type:Number,default:0},
  followers: {
    type: Array,
    default: [
      {
        name: "Shakti Panda",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: false,
      },
      {
        name: "Raju Panda",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: true,
      },
      {
        name: "Ramiya Ras",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: true,
      },
      {
        name: "Suvam Das",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: false,
      },
      {
        name: "Anand Bihari",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: true,
      },
      {
        name: "Kartik Nanda",
        profile_url: "",
        followers: 0,
        profession: "College Student",
        follow: true,
      },
    ],
  },
  following: { type: Array, default: [] },

});
const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserModel };
