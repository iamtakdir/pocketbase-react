import { DELETE_BOOK } from "./types";

const DeleteBookAction = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

export default DeleteBookAction;
