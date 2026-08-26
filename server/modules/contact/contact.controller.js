import {
  getActiveContact,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} from "./contact.service.js";


// --------------------------------------------------
// GET PUBLIC CONTACT
// --------------------------------------------------

export const getPublicContact = async (req, res) => {
  try {
    const contact = await getActiveContact();

    if (!contact) {
      return res.status(404).json({
        message: "Contact information not found.",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error(
      "Error getting public contact:",
      error
    );

    res.status(500).json({
      message: "Failed to get contact information.",
    });
  }
};


// --------------------------------------------------
// GET CONTACT FOR ADMIN
// --------------------------------------------------

export const getAdminContact = async (req, res) => {
  try {
    const contact = await getContact();

    if (!contact) {
      return res.status(404).json({
        message: "Contact information not found.",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error(
      "Error getting admin contact:",
      error
    );

    res.status(500).json({
      message: "Failed to get contact information.",
    });
  }
};


// --------------------------------------------------
// CREATE CONTACT
// --------------------------------------------------

export const createContactController = async (
  req,
  res
) => {
  try {
    const contact = await createContact(req.body);

    res.status(201).json({
      message: "Contact information created successfully.",
      contact,
    });
  } catch (error) {
    console.error(
      "Error creating contact:",
      error
    );

    if (
      error.message.includes(
        "already exists"
      )
    ) {
      return res.status(409).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Failed to create contact information.",
    });
  }
};


// --------------------------------------------------
// UPDATE CONTACT
// --------------------------------------------------

export const updateContactController = async (
  req,
  res
) => {
  try {
    // const { id } = req.params;

    const contact = await updateContact(
    //   id,
      req.body
    );

    res.status(200).json({
      message: "Contact information updated successfully.",
      contact,
    });
  } catch (error) {
    console.error(
      "Error updating contact:",
      error
    );

    if (
      error.message ===
      "Contact information not found."
    ) {
      return res.status(404).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Failed to update contact information.",
    });
  }
};


// --------------------------------------------------
// DELETE CONTACT
// --------------------------------------------------

export const deleteContactController = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    await deleteContact(id);

    res.status(200).json({
      message: "Contact information deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Error deleting contact:",
      error
    );

    if (
      error.message ===
      "Contact information not found."
    ) {
      return res.status(404).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Failed to delete contact information.",
    });
  }
};