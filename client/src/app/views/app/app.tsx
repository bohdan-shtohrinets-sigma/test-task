import React, { ChangeEvent, FC } from 'react';
import { Button, Typography } from '@material-ui/core';
import { User } from '../../core/users/users.types';
import './app.css';

const App: FC<Props> = ({ users, file, onFileChange, onFileUpload }) => {
  const uploadDisabled = !file;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      onFileChange(event.target.files[0]);
    }
  };

  const getUsersList = () =>
    users.length ? (
      <div className="users-data">
        <Typography className="title">Users data:</Typography>
        <div>
          {users.map((user) => (
            <div>{JSON.stringify(user)}</div>
          ))}
        </div>
      </div>
    ) : null;

  return (
    <div className="app">
      <Typography variant="h3" className="title">
        Test task
      </Typography>

      <input type="file" onChange={onInputChange} />
      <Button disabled={uploadDisabled} variant="contained" color="primary" onClick={onFileUpload}>
        Upload file
      </Button>
      {getUsersList()}
    </div>
  );
};

type Props = {
  onFileChange: (file: File) => void;
  onFileUpload: () => void;
  users: User[];
  file: File | null;
};

export default App;
