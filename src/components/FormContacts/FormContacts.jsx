import React  from 'react';
import {Box} from '../../contents/Box'
import {FormField, FormItem, FormBtn, FormTitle, FormInput} from '../FormContacts/FormContacts.styled'

import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

// import { addContacts } from '../../redux/contactsOperation';
// import { selectContacts } from '../../redux/contactsSlice';
import { selectContacts, addContacts } from '../../redux';


export default function FormContacts() {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();

	const contactsSubmit = (e) => {
		e.preventDefault();
		
    const form = e.target;
		// Данные с инпутов
    const name = form.elements.name.value;
    const number = form.elements.number.value;

		// создаем новый конткт
    const contact = {
      id: nanoid(),
      name,
      number,
    };

		if(contacts.some(
			contact =>
				contact.number === number
		)) {
			alert("Контакт с таким номером уже добавлен")
			form.elements.number.value = '';  
		} else {
			// Используем функцию с редюсера для добавления контакта в изначальный массив
			dispatch(addContacts(contact));

			form.reset();
		}

	}
	

	return (
		<Box
		border="2px solid #003B46"
		borderRadius="5px"
		width="350px"
		display="flex"
		flexDirection="column"
		alignItems="center"
		bg="#C4DFE6"
		p="40px 0px"
		height="170px"
		>
			<FormTitle>Phonebook</FormTitle>

			<FormField onSubmit={contactsSubmit}>

				<FormItem>
					Name
					<FormInput
					type="text"
					name="name"
					placeholder="Name"
					pattern="[a-zA-Zа-яА-Я]{5,20}"
					title="Содержит только буквы, минимум 5"
					maxLength="30"
					required
					/>
				</FormItem>

				<FormItem>
					Phone number
					<FormInput
					type="tel"
					placeholder="Phone number"
					name="number"
					pattern="\d{7,7}"
					title="Номер телефона состоит из 7 цифр"
					maxLength="7"
					required
					/>
				</FormItem>

								<FormBtn type="submit">Add contacts</FormBtn>
			</FormField>
		</Box>
	);
}

