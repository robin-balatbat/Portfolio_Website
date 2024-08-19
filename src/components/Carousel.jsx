import { useState, useEffect } from "react";
import { Box, IconButton, Slide, Stack } from "@mui/material";

import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";

const Carousel = ({ cardItems }) => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const cardsPerPage = 1;

  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(cardItems);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "max-content",
        padding: 3
      }}
    >
      <IconButton onClick={handlePrevPage} disabled={currentPage === 0}>
        <NavigateBefore />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "max-content",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={`card-${Math.random() + index}`}
            sx={{ display: currentPage === index ? "block" : "none" }}
          >
            <Slide direction={slideDirection} in={currentPage === index} key={`slide-${Math.random() + index}`}>
              <div key={`div-${Math.random() + index}`}>
                {cards.slice(
                  index * cardsPerPage,
                  index * cardsPerPage + cardsPerPage
                )}
              </div>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        disabled={
          currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNext fontSize="60px"/>
      </IconButton>
    </Box>
  );
};

export default Carousel;
