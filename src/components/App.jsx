import React, { useEffect } from 'react';

import {Box} from '../contents/Box';
import FormContacts from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {ListTitle} from './App.styled';

import { useSelector, useDispatch} from 'react-redux';
import { selectContacts, isLoadingNow } from '../redux/contactsSlice'
import { fetchContacts } from '../redux/contactsOperation';
import PacmanLoader from "react-spinners/PacmanLoader";

export default function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(isLoadingNow);
  const dispatch = useDispatch();

  // загружаем контент при первой загрузке
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Box
    bg="#66A5AD"
    display="flex"
    flexDirection="column"
    alignItems="center"
    p="10px 0px 0px 0px"
    >
      {isLoading && (
        <PacmanLoader
        color="#C4DFE6"
        margin={10}
        size={25}
      />
      )}

      <Box     
      width="90%"
      p="20px 20px 430px 20px"
      display="flex"
      justifyContent="space-evenly">
        <FormContacts />
        <Box
        border="2px solid #003B46"
        borderRadius="5px"
        width="350px"
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
        bg="#C4DFE6"
        >
          <ListTitle>Contacts</ListTitle>
          <Filter/>
          <ListContacts contacts={contacts}/>
        </Box>
      </Box>
    </Box>
  );
}




