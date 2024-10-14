import asyncHandler from "express-async-handler";
import saveBoarding from "../modals/saveModal.js";
import Boarding from "../modals/boardingModal.js";


const saveFavoriteBoarding = asyncHandler(async (req, res) => {
    const {
        boardingId, 
        userId
    } = req.params || {};

    
    const boardingExist = await Boarding.findById(boardingId); 
    

    if (boardingExist) {
        
        
        const favoriteBoarding = await saveBoarding.create({ 
            
            boardingId,
            userId
        });

        if (favoriteBoarding) {
            res.status(201).json(favoriteBoarding);
        } else {
            res.status(400).json({ status: "FAILED", message: "Invalid Data" });
        }
    } else {
        res.status(404).json({ status: "FAILED", message: "Boarding not found" }); 
    }
});

const getFavoriteBoardingAll = asyncHandler(async (req, res) => {
    const saveBoarding = await saveBoarding.find({boardingId: req.params.boardingId});
    if (saveBoarding) {
        res.json(saveBoarding);
    } else {
        res.status(404);
        throw new Error('saveBoarding not found')
    }
}
)

export { saveFavoriteBoarding , getFavoriteBoardingAll };