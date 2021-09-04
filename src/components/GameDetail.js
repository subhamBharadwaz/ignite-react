import React from "react";

// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { DetailSpinner } from "../components/Spinner";

// util
import { smallImage } from "../util";

const GameDetail = () => {
  const history = useHistory();

  // Exit detail
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  // Data
  const { screen, game, loading } = useSelector((state) => state.detail);
  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Detail>
        {loading ? (
          <DetailSpinner />
        ) : (
          <>
            <Stats>
              <div className="rating">
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img
                src={smallImage(game.background_image, 1280)}
                alt={game.name_original}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screen.results.map((screen) => (
                <img
                  src={smallImage(screen.image, 1280)}
                  key={screen.id}
                  alt="game"
                />
              ))}
            </div>
          </>
        )}
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5em;
  background: white;
  position: absolute;
  left: 10%;
  color: black;

  @media (max-width: 48rem) {
    padding: 2rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;
export default GameDetail;
