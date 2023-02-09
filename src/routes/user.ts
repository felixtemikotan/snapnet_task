import express from "express";
const router = express.Router();
import {
  LoginUser,LogoutUser,CreateUser,getSingleUser,CreateState,getSingleState,CreateLga,
  getSingleLga,CreateWard,getSingleWard,CreateCitizen,getSingleCitizen,getAllCitizens,
} from "../controller/userController";



router.post("/login", LoginUser);
router.get("/logout", LogoutUser);
router.post("/create",CreateUser)
router.get("/get-user",getSingleUser)
router.post("/create-state",CreateState)
router.get("/get-state",getSingleState)
router.post("/create-lga",CreateLga)
router.get("/get-lga",getSingleLga)
router.post("/create-ward",CreateWard)
router.get("/get-ward",getSingleWard)
router.post("/create-citizen",CreateCitizen)
router.get("/get-citizen",getSingleCitizen)
router.get("/get-all-citizens",getAllCitizens)



export default router;
