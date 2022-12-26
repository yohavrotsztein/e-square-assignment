import { Box } from '@mui/material';
import { useSelector } from '../redux/store';
import BookCard from './BookCard';
import EmptySpace from './EmptySpace';


export default function BooksList(props) {

  const books = useSelector((state) => state.books.books)
  const wishlist = useSelector((state) => state.books.wishlist)
  const bookList = (props.list === 'books') ? books : wishlist

  return (
    <>
      {bookList.length === 0 ? <EmptySpace empty={props.list} /> :
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)'
            },
          }}
        >
        {bookList.map((book, index) =>
          <BookCard key={index} book={book} type={props.list} />
          )}

        </Box>
      }
    </>
  );
}
