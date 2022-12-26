import { useEffect, useState } from 'react';
import { Box, Stack, TextField, InputAdornment } from '@mui/material';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from '../redux/store';
import { getBooks, addInput } from '../redux/books.js';
import BooksList from '../Components/BooksList';


export default function Search() {

  const dispatch = useDispatch();

  const input = useSelector((state) => state.books.input)
  const [inputText, setInputText] = useState(input);

  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    dispatch(getBooks(inputText));
    dispatch(addInput(inputText))
  }, [dispatch, inputText]);

  return (
    <Box sx={{ m: 3 }}>
      <Stack
        spacing={2}
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ sm: 'center' }}
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <TextField
          onChange={inputHandler}
          placeholder="Search book ..."
          defaultValue={inputText}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box component={Icon} icon={'eva:search-fill'} sx={{ marginLeft: '8px', width: '20px', height: '20px', color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <BooksList list='books'/>
    </Box>
  )
}