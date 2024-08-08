import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contact/contactsSlice";
import { filterReducer } from "./filter/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
