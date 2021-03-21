import api from "../api/api";

export const getUsersThunk = (arg) => {
  return (dispath) => {
    api.getUsers(arg).then((data) => {
      dispath({ type: "SET_USERS", data });
    });
  };
};
