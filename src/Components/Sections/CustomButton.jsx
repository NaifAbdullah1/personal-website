import { styled, alpha } from "@mui/material/styles";
import { Button } from "@mui/material";
import { COLORS } from "../../constants";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent", // TODO: Why do we need this?
  color: COLORS.lightGray, // TODO: Maybe change it to light blue
  borderColor: COLORS.lightGray,
  "&:hover": {
    backgroundColor: alpha(COLORS.lightGray, 0.1),
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 0.2rem ${alpha(theme.palette.primary.main, 0.25)}`,
  },
  "&:focus": {
    boxShadow: `0 0 0 0.2rem ${alpha(theme.palette.primary.main, 0.25)}`,
  },
  "&:active": {
    backgroundColor: alpha(COLORS.lightGray, 0.2),
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  transition: theme.transitions.create(
    ["background-color", "box-shadow", "border-color", "color"],
    {
      duration: theme.transitions.duration.short,
    }
  ),
}));

export default CustomButton;
