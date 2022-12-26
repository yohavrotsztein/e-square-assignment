import { Box, Typography } from '@mui/material';
import { ReactComponent as Search } from '../assets/search_empty.svg';
import { ReactComponent as Wishlist } from '../assets/wishlist_empty.svg';
import { styled } from '@mui/material/styles';




export default function EmptySpace(props) {
  const BoxStyle = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.4',
    textAlign: 'center'
  }));

  return (
    <>
      <BoxStyle>
        {props.empty === 'books' ?
          <Box>
            <Search />
            <Typography>Start typing in the input to make a search</Typography>
          </Box>
          :
          <Box>
            <Wishlist />
            <Typography>Add books to your wishlist in the search page</Typography>
          </Box>
        }
      </BoxStyle>
    </>
  );
}
