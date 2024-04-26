import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const createMember = createAsyncThunk(
  'CREATE_MEMBER', async ({email, pseudo, password, role, newsletter,}) => {

    const token = localStorage.getItem('token');

    try {
      const response = await instanceAxios.post(
        `member/add`,
        {
          email: email,
          pseudo: pseudo,
          password: password,
          role: "[ROLE_USER]",
          newsletter: true,
        }
      );
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  
    return;
  }
);

export default createMember;
