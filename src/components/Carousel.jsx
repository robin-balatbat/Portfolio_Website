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
        height: "auto",
        padding: 4
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
          height: 1000,
          padding: 4
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{ display: currentPage === index ? "block" : "none" }}
          >
            <Slide direction={slideDirection} in={currentPage === index}>
              <div>
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
        <NavigateNext />
      </IconButton>
    </Box>
  );
};

export default Carousel;
