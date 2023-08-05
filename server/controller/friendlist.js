const User =  require("../model/userModel");

const friendListsController = async (req, res)=>{
    try {
        const friendlistData = await User.find({}, "_id email isGroup isOnline");
        const friendlist = friendlistData.map(({ _id, email, isGroup, isOnline }) => ({
          _id,
          email,
          isGroup,
          isOnline,
        }));
    
        console.log(friendlist);
        res.status(200).json({ success: "found friendlist", friendlist });
      } catch (error) {
        console.error("Error finding friend list:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

const friendController = async (req, res)=>{
    const {id}=req.params
    const friendData = await User.findOne({_id: id});
    const {_id, email, contact}=friendData
    res.status(200).json({success: "found friend", friend: {_id, email, contact}});
}

module.exports = {
    friendListsController,
    friendController
}