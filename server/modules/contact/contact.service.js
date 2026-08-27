import Contact from "./contact.model.js";

// --------------------------------------------------
// Get active contact information
// --------------------------------------------------

export const getActiveContact = async () => {
  const contact = await Contact.findOne({
    isActive: true,
  });

  return contact;
};


// --------------------------------------------------
// Get contact information for admin
// --------------------------------------------------

export const getContact = async () => {
  const contact = await Contact.findOne();

  return contact;
};


// --------------------------------------------------
// Create contact information
// --------------------------------------------------

export const createContact = async (contactData) => {
  // Prevent multiple contact documents
  const existingContact = await Contact.findOne();

  if (existingContact) {
    throw new Error(
      "Contact information already exists. Please update it instead."
    );
  }

  const contact = await Contact.create(contactData);

  return contact;
};


// --------------------------------------------------
// Update contact information
// --------------------------------------------------

// export const updateContact = async (contactData) => {
//   const contact = await Contact.findOneAndUpdate(
//     {},
//     contactData,
//     {
//       new: true,
//       runValidators: true,
//     }
//   );

//   if (!contact) {
//     throw new Error("Contact information not found.");
//   }

//   return contact;
// };

// --------------------------------------------------
// Update contact information
// --------------------------------------------------

export const updateContact = async (contactData) => {
  const contact = await Contact.findOneAndUpdate(
    {},
    contactData,
    {
      returnDocument: "after",
      runValidators: true,
      upsert: true,
      setDefaultsOnInsert: true,
    }
  );

  return contact;
};


// --------------------------------------------------
// Delete contact information
// --------------------------------------------------

export const deleteContact = async (contactId) => {
  const contact = await Contact.findByIdAndDelete(
    contactId
  );

  if (!contact) {
    throw new Error("Contact information not found.");
  }

  return contact;
};