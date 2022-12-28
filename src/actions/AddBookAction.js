import { ADD_BOOK } from "./types";

const AddBookAction = (data) => {
  return {
    type: ADD_BOOK,
    payload: data,
  };
};

export default AddBookAction;
