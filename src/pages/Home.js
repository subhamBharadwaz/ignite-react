import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { HomeSpinner } from "../components/Spinner";

import { useLocation } from "react-router-dom";

const Home = () => {
  // Get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched, loading } = useSelector(
    (state) => state.games
  );

  return (
    <>
      {loading ? (
        <HomeSpinner />
      ) : (
        <GameList>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            {searched.length ? (
              <div className="searched">
                <h2>Searched Games</h2>

                <Games>
                  {searched.map((game) => (
                    <Game
                      name={game.name}
                      released={game.released}
                      id={game.id}
                      image={game.background_image}
                      key={game.id}
                    />
                  ))}
                </Games>
              </div>
            ) : (
              ""
            )}

            <h2>Upcoming Games</h2>
            <Games>
              {upcoming.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>

            <h2>Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>

            <h2>New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      )}
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem 5rem;
`;

export default Home;
