import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

interface IPayloadLoginCheck {
  username: string,
  password: string,
}

const loginCheck = createAsyncThunk('LOGIN_CHECK', async ({ username, password }: IPayloadLoginCheck) => {
  try {
    const response = await instanceAxios.post(
      'login_check',
      { username, password },
    );

    instanceAxios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

    const arrayOfPayloads = { 
      payload:response.data, 
      username: username ,
      password: password ,
    }
    
    return arrayOfPayloads;
  } catch (err) {
    if (!err?.response) {
      setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
      setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
      setErrMsg('Unauthorized');
    } else {
      setErrMsg('Login Failed');
    }
    errRef.current.focus();
  }
});

export default loginCheck;
