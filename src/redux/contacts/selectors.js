import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectContactsList, selectFilter],
  (contacts, { filter }) => {

    return contacts.toSorted((a, b) => a.name.localeCompare(b.name)).filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
