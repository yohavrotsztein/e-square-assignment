import { Card, CardHeader, Avatar, CardActions, IconButton, Box, Tooltip, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { removeWishlist } from '../redux/books.js';
import { useDispatch } from '../redux/store';
import DialogDetails from './DialogDetails';
import '../index.css';


export default function BookCard(props) {

  const dispatch = useDispatch();
  const { title, imageLinks } = props.book.volumeInfo;


  return (
    <Card >
      <CardHeader
        avatar={<Avatar sx={{ width: 72, height: 72, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} aria-label="recipe" src={imageLinks?.smallThumbnail || ''} />}
        title={<Tooltip title={title}><Typography noWrap >{title}</Typography></Tooltip>}
      />
      <CardActions disableSpacing sx={{ display: "flex", justifyContent: "flex-end" }}>
        {props.type === 'wishlist' ?
          <Tooltip title="Remove from wishlist">
            <IconButton aria-label="add to favorites" onClick={() => { dispatch(removeWishlist(title)) }}>
              <Box component={Icon} icon={'akar-icons:trash-can'} sx={{ width: '20px', height: '20px' }} />
            </IconButton>
          </Tooltip>
          : <DialogDetails details={props} />}
      </CardActions>
    </Card>
  )
}

