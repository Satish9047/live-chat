const User =  require("../model/userModel");

const friendListsController = async (req, res)=>{
    console.log(req.body);
    const friendlistData =  await User.find({}, "email");
    console.log(friendlistData);
    res.status(200).json({success: "found friendlist", friendlist: friendlistData});
}

module.exports = {
    friendListsController
}