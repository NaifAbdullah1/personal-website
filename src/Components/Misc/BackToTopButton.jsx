import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { Fab } from "@mui/material"; // Floating Action Buttons
import { styled } from "@mui/system";
import { COLORS } from "../../constants";
import { useEffect, useState } from "react";

const StyledFab = styled(Fab)(({ theme, show }) => ({
  position: "fixed",
  bottom: theme.spacing(0), // -1 look better, but it would make it cutoff in iphones.
  right: theme.spacing(0),
  width: 56,
  height: 56,
  borderRadius: "100% 0% 0 0", // to acheive a circular button
  backgroundColor: COLORS.purple,
  color: "#FFFFFF",
  opacity: show ? 1 : 0,
  visibility: show ? 1 : 0,
  transition: "opacity 0.5s ease, visibility 0.5s ease",
  pointerEvents: show ? "auto" : "none", // Prevent clickable-ness when not visible
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: COLORS.lightBlue,
  },
}));

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      //Showing button when scrolled down from the top
      setShowButton(scrollY > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledFab show={showButton} onClick={handleScrollToTop}>
      <ArrowCircleUpIcon sx={{ fontSize: "2rem", ml: "4px", mt: "3px" }} />
    </StyledFab>
  );
};

export default BackToTopButton;
