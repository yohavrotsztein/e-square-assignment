import { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogTitle,
  DialogContentText, CardMedia, Typography, IconButton, Tooltip, Box
} from '@mui/material';
import { Icon } from '@iconify/react';
import { useDispatch } from '../redux/store';
import { addWhishlist } from '../redux/books.js';
import parse from 'html-react-parser';




export default function DialogDetails(props) {
  const { title, imageLinks, authors } = props.details.book.volumeInfo;
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="submit" onClick={handleClickOpen}>Details</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ paddingBottom: 0 }}>{title}</DialogTitle>
        {authors ? <DialogTitle sx={{ fontSize: '0.75rem', paddingTop: 0 }}>by {authors.join(', ')}</DialogTitle> : null}
        <DialogContent sx={{ display: "flex", gap: "10px", paddingTop: '24px !important' }}>
          <CardMedia
            component="img"
            image={imageLinks?.thumbnail || ''}
            alt={title}
          />
          {props.details.book.searchInfo ? <DialogContentText>{parse(props.details.book.searchInfo.textSnippet)}</DialogContentText> : <Typography>No informations provided</Typography>}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose} variant="contained">Close</Button>
          <Tooltip title="Add to wishlist">
            <IconButton aria-label="add to favorites" onClick={() => { dispatch(addWhishlist(props.details.book)) }}>
              <Box component={Icon} icon={'material-symbols:favorite-outline-rounded'} sx={{ width: '20px', height: '20px' }} />
            </IconButton>
          </Tooltip>
        </DialogActions>
      </Dialog>
    </>
  );
}
