import React from 'react';
import {Box} from '../../contents/Box';
import { List, ListItem, DeleteBtn} from './ListContacts.styled';

import {useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import { removeContacts } from '../../redux/contactsOperation';

export const ListContacts = ({contacts}) => {
	const dispatch = useDispatch();
	// Получаем текущее значение с фильтра
  const filter = useSelector(selectFilter);
	// Фильтруем все контакты по имени
	const visibleContacts = contacts.filter(({ name }) =>
	name.toLowerCase().includes(filter)
	);

	return(
		<Box>
			<List>
          {visibleContacts.map(({id, name, number}) => (
						<ListItem key={id}>
							<span>{name} : {number}</span>
						<DeleteBtn onClick={() => dispatch(removeContacts(id))}>Delete</DeleteBtn>
						</ListItem>
					))}
					{visibleContacts.length === 0 && <span> Not Find, try another name</span>}
      </List>
		</Box>
	)
}
