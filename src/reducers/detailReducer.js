const initState = {
  game: {
    platforms: [],
  },
  screen: {
    results: [],
  },
  loading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        loading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
};

export default detailReducer;
