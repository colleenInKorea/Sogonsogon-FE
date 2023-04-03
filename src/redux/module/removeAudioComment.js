import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "../../util/api/axios";

const axios = new Axios(process.env.REACT_APP_BASE_URL);

export const __removeAudioComment = createAsyncThunk(
  "removeAudioComment",
  async (commentId, thunkAPI) => {
    return await axios
      .delete(`api/audioclip/comment/${commentId}`)
      .then((response) => alert(response && "오디오가 삭제되었습니다."))
      .catch((error) =>
        alert(error && "없는 오디오 이거나, 오디오 생성자가 아닙니다.")
      );
  }
);

const initialState = {
  audio: null,
  isLoading: false,
  error: null,
};

const removeAudioComment = createSlice({
  name: "removeAudioComment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__removeAudioComment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(__removeAudioComment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.audio = action.payload;
      state.error = null;
    });
    builder.addCase(__removeAudioComment.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default removeAudioComment;
