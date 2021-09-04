// Base URL
const base_url = "https://api.rawg.io/api/";
const apiKey = process.env.REACT_APP_API_KEY;

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) return `0${month}`;
  return month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) return `0${day}`;
  return day;
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popularGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming Games
const upcomingGames = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const newGames = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game Details
export const gamesDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;

// Game Screenshots
export const gamesScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
