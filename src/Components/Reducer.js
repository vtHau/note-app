import { DataNotes as DataBase } from "./DataBase";
import { toastSuccess } from "./Toast";

var initialState = {
  showForm: false,
  showToast: false,
  showLoading: false,
  editItem: {},
  toastContent: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_FORM": {
      return {
        ...state,
        showForm: !state.showForm,
      };
    }

    case "ADD": {
      DataBase.push(action.note);
      toastSuccess("Add Note Success !!!");

      return state;
    }

    case "DELETE": {
      const { deleteID } = action;
      DataBase.child(deleteID).remove();
      toastSuccess("Delete Note Success !!!");
      return state;
    }

    case "SEND_EDIT": {
      const { noteEdit } = action;
      return {
        ...state,
        editItem: noteEdit,
      };
    }

    case "EDIT": {
      const { id, noteTitle, noteContent } = action.note;
      DataBase.child(id).update({
        noteTitle,
        noteContent,
      });
      return {
        ...state,
        editItem: {},
      };
    }

    case "SHOW_LOADING": {
      return {
        ...state,
        showLoading: true,
      };
    }
    case "HIDE_LOADING": {
      return {
        ...state,
        showLoading: false,
      };
    }

    default:
      return state;
  }
};

export default myReducer;
