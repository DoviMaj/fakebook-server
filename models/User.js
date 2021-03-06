const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String },
  username: { required: true, type: String },
  picture_url: { type: String },
  facebookId: { type: String },
  googleId: { type: String },
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friendsRequestsSent: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friendsRequestsRecieved: [{ type: Schema.Types.ObjectId, ref: "User" }],
  chats: [
    {
      chat: {
        type: Schema.Types.ObjectId,
        ref: "Chat",
      },
      to: {
        type: String,
      },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
