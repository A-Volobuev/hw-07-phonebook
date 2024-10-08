import React, { useEffect } from 'react';

import {Box} from '../contents/Box';
import FormContacts from './FormContacts/FormContacts';
import { ListContacts } from './ListContacts/ListContacts';
import { Filter } from './Filter/Filter';
import {ListTitle} from './App.styled';

import { useSelector, useDispatch} from 'react-redux';
import PacmanLoader from "react-spinners/PacmanLoader";

// import { selectContacts, isLoadingNow } from '../redux/contactsSlice'
// import { fetchContacts } from '../redux/contactsOperation';
import { selectContacts, isLoadingNow, fetchContacts } from '../redux'

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
    justifyContent="space-evenly"
    p="20px 20px 440px 20px"
    >
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
          <Box
          display="grid"
          width="310px"
          gridTemplateColumns = "1fr 1fr"
          p="0px 20px 0px 20px">
            <ListTitle>Contacts</ListTitle>
            {isLoading && (
              <PacmanLoader
              color="#66A5AD"
              size={20}
              />
            )}
          </Box>

          <Filter/>
          <ListContacts contacts={contacts}/>
        </Box>
    </Box>
  );
}




