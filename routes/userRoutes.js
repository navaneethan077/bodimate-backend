import express from 'express';
import {
    forgotPassword, getAllUsers,
    loginUser,
    logoutUser,
    registerUser,
    resetPassword, updateUser,
    verifyOTP,
    getAllUsers,
    getUserProfile,
    updateUserProfile
} from '../controllers/userController.js';
import {protect} from "../middleware/authMiddleware.js";

const router = express.Router();



router.route('/register').post(registerUser);
router.route('/verifyOTP').post(verifyOTP);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/getAllUsers').get(getAllUsers);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword').post(resetPassword);
router.put('/update/:id', protect, updateUser);
router.route('/allprofile').get(getAllUsers);
router.route('/:id/profile').get(getUserProfile).put(updateUserProfile);


export default router;