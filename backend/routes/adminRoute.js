import express from 'express';
import { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, allDoctors, adminDashboard } from '../controllers/adminController.js';
import { changeAvailablity } from '../controllers/doctorController.js';
import authAdmin from '../middleware/authAdmin.js';
import upload from '../middleware/multer.js';

const adminRouter = express.Router();

// Error handling wrapper
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        console.error('Route Error:', error);
        res.status(500).json({
            success: false,
            message: 'An unexpected error occurred',
            error: {
                name: error.name,
                message: error.message,
                stack: error.stack
            }
        });
    });
};

adminRouter.post("/login", asyncHandler(loginAdmin));
adminRouter.post("/add-doctor", 
    authAdmin, 
    (req, res, next) => {
        console.log('Request Headers:', req.headers);
        console.log('Request Body:', req.body);
        next();
    },
    upload.single('image'), 
    asyncHandler(addDoctor)
);
adminRouter.get("/appointments", authAdmin, asyncHandler(appointmentsAdmin));
adminRouter.post("/cancel-appointment", authAdmin, asyncHandler(appointmentCancel));
adminRouter.get("/all-doctors", authAdmin, asyncHandler(allDoctors));
adminRouter.post("/change-availability", authAdmin, asyncHandler(changeAvailablity));
adminRouter.get("/dashboard", authAdmin, asyncHandler(adminDashboard));

// Add a global error handler
adminRouter.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        error: {
            name: err.name,
            message: err.message,
            stack: err.stack
        }
    });
});

export default adminRouter;