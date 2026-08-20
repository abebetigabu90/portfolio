import {Router} from "express"
import {getProfile} from "./profile.controller.js"
import {createProfile} from "./profile.controller.js"
import {updateProfile} from "./profile.controller.js"
const router = Router()
router.get("/",getProfile)
router.post("/",createProfile)
router.put("/",updateProfile)
router.get("/:id",(req,res)=>{
    let yourId = req.params.id
    res.json({yourId:yourId})
})
export default router;
