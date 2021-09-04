import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  dispatch({
    type: "LOADING_GAMES",
  });

  const popularData = await axios.get(popularGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      new: newGamesData.data.results,
      upcoming: upcomingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
