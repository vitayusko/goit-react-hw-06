import { configureStore } from "@reduxjs/toolkit";
import { contactsReducers } from "./contact/contactsSlice";

export const store = configureStore({
  reducer: {
    contact: contactsReducers,
    // filters: filtersReducer,
  },
});
