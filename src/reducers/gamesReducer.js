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

    default:
      return { ...state };
  }
};

export default gamesReducer;
