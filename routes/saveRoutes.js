import express from 'express';
import {saveFavoriteBoarding , getFavoriteBoardingAll} from "../controllers/saveController.js";

const router = express.Router();


router.route('/user/:userId/boarding/:boardingId').post(saveFavoriteBoarding);
router.route('/boarding/:boardingId').get(getFavoriteBoardingAll);



export default router;