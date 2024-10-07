import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6703e73dab8a8f8927321cf7.mockapi.io'

export const fetchContacts = createAsyncThunk(
	'contacts/fetchContacts',
	async (_, { rejectWithValue}) => {
		try {
			const contacts = await axios.get('/contacts');
			return contacts.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addContacts = createAsyncThunk(
	'contacts/addContact',
	async (contact, { rejectWithValue}) => {
		try {
			const {data} = await axios.post('/contacts', contact);
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const removeContacts = createAsyncThunk(
	'contacts/removeContact',
	async (id, { rejectWithValue}) => {
		try {
			await axios.delete(`/contacts/${id}`);
			return id;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);