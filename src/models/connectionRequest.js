const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema({

  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //reference to the user collection
    required: true
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["ignore", "interested", "accepted", "rejected"],
      message: `{VALUE} is incorrect status type`
    },
  }
},
  {
    timestamps: true,
  });

// ConnectionRequest.find({fromUserId: 226266668884848}) - this queries will be very fast
// but for ConnectionRequest.find({fromUserId: 226266668884848, toUserId:1161666115151}) this query will be slow we have to keep compund index on both
connectionRequestSchema.index({ fromUserId: 1, toUserId: 1 });


connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;
  // CHECK IF fromUserId is same as toUserId
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot send connection to yourself");
  }
  next();
});


const ConnectionRequestModel = new mongoose.model("ConnectionRequest", connectionRequestSchema);

module.exports = ConnectionRequestModel;  