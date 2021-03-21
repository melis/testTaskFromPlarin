let initialState = {
  page: 1,
  per_page: 0,
  total: 0,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export default reducer;
