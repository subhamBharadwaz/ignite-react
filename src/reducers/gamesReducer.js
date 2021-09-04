const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],

  loading: true,
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.new,
        upcoming: action.payload.upcoming,
        loading: false,
      };
    case "FETCH_SEARCHED":
      return {
        ...state,
        searched: action.payload.searched,
        loading: false,
      };

    case "CLEAR_SEARCHED":
      return {
        ...state,
        searched: [],
      };
    case "LOADING_GAMES":
      return {
        ...state,
        loading: true,
      };

    default:
      return { ...state };
  }
};

export default gamesReducer;
