import { useEffect } from 'react';
import { Box, Stack } from '@mui/material';
import { useDispatch } from '../redux/store';
import { getBooks } from '../redux/books.js';
import BooksList from '../Components/BooksList';




export default function Wishlist() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Box sx={{ m: 3 }}>
    <Stack
      spacing={2}
      direction={{ xs: 'column', sm: 'row' }}
      alignItems={{ sm: 'center' }}
      justifyContent="space-between"
      sx={{ mb: 1 }}
    >
    </Stack>
    <BooksList list='wishlist'/>
  </Box>
  )
}