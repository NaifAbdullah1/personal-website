import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { COLORS } from "../../constants";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: alpha(COLORS.lightGray, 0.1),
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "& fieldset": {
      borderColor: COLORS.lightGray,
    },
    "&:hover": {
      backgroundColor: "transparent",
      "& fieldset": {
        borderColor: "transparent",
      },
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      "& fieldset": {
        borderColor: COLORS.lightBlue,
      },
    },
  },
  "& .MuiInputLabel-root": {
    color: COLORS.lightGray,
    "&.Mui-focused": {
      color: COLORS.lightBlue,
    },
  },
  "& .MuiInputBase-input": {
    color: COLORS.lightGray,
  },
}));

export default CustomTextField;
