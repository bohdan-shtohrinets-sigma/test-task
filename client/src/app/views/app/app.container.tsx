import React, { useState, useEffect } from 'react';
import { User } from '../../core/users/users.types';
import * as usersApiUtils from '../../utils/users/users-api.utils';
import App from './app';

const AppContainer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [usersList, setUsersList] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const users = await usersApiUtils.getAllUsers();
      setUsersList(users);
    };
    getUsers();
  }, []);

  const onFileChange = (file: File) => {
    setSelectedFile(file);
  };

  const onFileUpload = async () => {
    if (selectedFile !== null) {
      await usersApiUtils.uploadCsv(selectedFile).then(async () => {
        const users = await usersApiUtils.getAllUsers();
        setUsersList(users);
      });
    }
  };

  return (
    <App
      onFileChange={onFileChange}
      onFileUpload={onFileUpload}
      users={usersList}
      file={selectedFile}
    />
  );
};

export default AppContainer;
