// import express from "express";

// import {
//   getPublicContact,
//   getAdminContact,
//   createContactController,
//   updateContactController,
//   deleteContactController,
// } from "./contact.controller.js";

// import { protectAdmin } from "../../middleware/authmiddleware.js";

// const router = express.Router();


// // --------------------------------------------------
// // PUBLIC
// // --------------------------------------------------

// // Get active contact information
// router.get("/", getPublicContact);


// // --------------------------------------------------
// // ADMIN
// // --------------------------------------------------

// // Get contact information
// router.get(
//   "/admin",
//   protectAdmin,
//   getAdminContact
// );


// // Create contact information
// router.post(
//   "/",
//   protectAdmin,
//   createContactController
// );


// // Update contact information
// router.put(
//   protectAdmin,
//   updateContactController
// );


// // Delete contact information
// router.delete(
//   "/:id",
//   protectAdmin,
//   deleteContactController
// );


// export default router;







import express from "express";

import {
  getPublicContact,
  getAdminContact,
  createContactController,
  updateContactController,
  deleteContactController,
} from "./contact.controller.js";

import { protectAdmin } from "../../middleware/authMiddleware.js";

const router = express.Router();


// ==================================================
// PUBLIC
// ==================================================

// Get active contact information
router.get(
  "/",
  getPublicContact
);


// ==================================================
// ADMIN
// ==================================================

// Get contact information
router.get(
  "/admin",
  protectAdmin,
  getAdminContact
);


// Create contact information
router.post(
  "/",
  protectAdmin,
  createContactController
);


// Update contact information
router.put(
  "/",
  protectAdmin,
  updateContactController
);


// Delete contact information
router.delete(
  "/:id",
  protectAdmin,
  deleteContactController
);


export default router;