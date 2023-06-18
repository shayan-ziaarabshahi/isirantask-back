import expressAsyncHandler from "express-async-handler";
import User from "#root/mongodb/schemas/User.js";


export const getUsers = expressAsyncHandler(async (req, res) => {
    const users = await User.find({})
    res.status(200).json(users)
});

export const getUser = expressAsyncHandler(async (req, res) => {

});

export const addUser = expressAsyncHandler(async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        role: 1,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthday: req.body.birthday
    })
    await newUser.save()
    res.status(200).json({newUser})
});


export const updateUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.body.userId)
    user.username = req.body.username
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.birthday = req.body.birthday
    await user.save()
    res.status(200).json(user)
});


export const deleteUser = expressAsyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.query.id)
    res.status(200).json({message:"با موفقیت حذف شد."})
});