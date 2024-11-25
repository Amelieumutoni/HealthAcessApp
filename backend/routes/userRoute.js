import express from 'express';
import { 
    loginUser, 
    registerUser, 
    getProfile, 
    updateProfile, 
    bookAppointment, 
    listAppointment, 
    cancelAppointment 
} from '../controllers/userController.js';
import upload from '../middleware/multer.js';
import authUser from '../middleware/authUser.js';

const userRouter = express.Router();

// User routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

userRouter.get("/get-profile", authUser, getProfile);
userRouter.post("/update-profile", upload.single('image'), authUser, updateProfile);
userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancel-appointment", authUser, cancelAppointment);

// Remove the Razorpay and Stripe routes
// userRouter.post("/payment-stripe", authUser, paymentStripe);
// userRouter.post("/verifyStripe", authUser, verifyStripe);
// userRouter.post('/razorpay-payment', paymentRazorpay);
// userRouter.post('/razorpay-verify', verifyRazorpay);

export default userRouter;
