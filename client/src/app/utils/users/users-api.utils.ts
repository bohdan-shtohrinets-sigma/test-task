import api from '../../core/api/api';
import { User } from '../../core/users/users.types';

export const uploadCsv = async (selectedFile: File): Promise<void> => {
  const formData = new FormData();
  formData.append('file', selectedFile, selectedFile.name);
  try {
    await api.post('users/upload-csv', formData as Record<string, any>, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    return await api.get('users');
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
