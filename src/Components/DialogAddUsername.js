import * as Yup from 'yup';
import { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useDispatch } from '../redux/store';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addUsername } from '../redux/books.js';


export default function DialogAddUsername() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick")
      return;
    setOpen(false);
  };

  const UpdateUserSchema = Yup.object().shape({
    username: Yup.string().min(3, "Minimum 3 characters").required("Required").trim(),
  });


  const { register, control, handleSubmit } = useForm({
    resolver: yupResolver(UpdateUserSchema),
  });

  const onSubmit = data => {
    dispatch(addUsername(data.username))
    navigate('/search')
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Welcome to the assignment</DialogTitle>
      <DialogTitle sx={{ fontSize: '1rem', paddingTop: 0 }}>Choose a username to start</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Controller
            name="username"
            control={control}
            render={({ fieldState: { error } }) => <TextField fullWidth type="text" label="Username" error={!!error} helperText={error?.message} {...register("username")} />}
          />
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </form>

    </Dialog>
  );
}
