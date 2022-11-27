import "../index.css";
// MUI components
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
// Components
import PostPlaces from "../components/posts/PostPlaces/PostPlaces";

const Places = () => {
  return (
    <>
      <Box sx={{ marginTop: "105px" }}>
        <PostPlaces />
      </Box>
    </>
  );
};

export default Places;
