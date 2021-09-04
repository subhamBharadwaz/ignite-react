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

// Icons
import playstation from "../image/playstation.svg";
import steam from "../image/steam.svg";
import xbox from "../image/xbox.svg";
import nintendo from "../image/nintendo.svg";
import apple from "../image/apple.svg";
import gamepad from "../image/gamepad.svg";

// Stars
import starEmpty from "../image/star-empty.png";
import starFull from "../image/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Data
  const { screen, game, loading } = useSelector((state) => state.detail);

  // Exit detail
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  // Get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" src={starFull} key={i} />);
      } else {
        stars.push(<img alt="star" src={starEmpty} key={i} />);
      }
    }
    return stars;
  };
  // Get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "ios":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      <Detail layoutId={pathId}>
        {loading ? (
          <DetailSpinner />
        ) : (
          <>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
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
  z-index: 5;
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
  z-index: 10;
  color: black;

  @media (max-width: 48rem) {
    padding: 2rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    display: inline;
  }
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
