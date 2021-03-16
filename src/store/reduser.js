let initialState = {
  page: 1,
  per_page: 0,
  total: 0,
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USERS':
      // console.log(action);
      return { ...state, ...action.data };

    default:
      return state;
  }
};

export default reducer;

// {
// "id": 1,
// "email": "george.bluth@reqres.in",
// "first_name": "George",
// "last_name": "Bluth",
// "avatar": "https://reqres.in/img/faces/1-image.jpg"
// },
