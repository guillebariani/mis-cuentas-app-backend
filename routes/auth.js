const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

//Register User
router.post("/register", async (req, res) => {
    try {
        //Generate new hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //Create new user
        const newUser = new User({
            user_id: uuidv4(),
            username:req.body.username,
            password:hashedPassword,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            country:req.body.country,
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            secondname:req.body.secondname,
            secondlastname:req.body.secondlastname,
            picture:req.body.picture,
            pin:req.body.pin
        })

        //Save user and response
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//Login User
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("ERROR: User not found");

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Wrong password.");

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;