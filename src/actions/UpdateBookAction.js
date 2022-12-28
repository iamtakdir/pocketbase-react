import { UPDATE_BOOK } from "./types";

const UpdateBookAction = (data) => {
  return {
    type: UPDATE_BOOK,
    payload: data,
  };
};

export default UpdateBookAction;
