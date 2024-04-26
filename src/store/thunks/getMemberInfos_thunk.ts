import { createAsyncThunk } from '@reduxjs/toolkit';
import instanceAxios from '../../utils/axios';

const getMemberInfos = createAsyncThunk('GET_MEMBER_INFOS', async (id) => {
    const response = await instanceAxios.get(
      `member/${id}`,
    );
    return response.data.member;  
});

export default getMemberInfos;