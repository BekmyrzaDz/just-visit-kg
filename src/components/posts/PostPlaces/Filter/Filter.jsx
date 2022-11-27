// mui
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const Filter = () => {
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          right: "119px",
          top: "210px",
          width: "241px",
          background: "var(--light-brown)",
          padding: "5px 30px",
          borderRadius: "15px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Martel Sans",
            color: "var(--black)",
            fontWeight: 600,
            fontSize: "17px",
          }}
        >
          Места,которые вы хотите видеть
        </Typography>
        <Box>
          <FormGroup>
            <FormControlLabel
              sx={{
                color: "var(--black)",
                "&.MuiFormControlLabel-label": {
                  color: "var(--black)",
                },
              }}
              control={
                <Checkbox
                  sx={{
                    color: "var(--black)",
                    "&.Mui-checked": {
                      color: "var(--black)",
                    },
                  }}
                />
              }
              label="Горнолыжие"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "var(--black)",
                    "&.Mui-checked": {
                      color: "var(--black)",
                    },
                  }}
                />
              }
              label="трекинг"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "var(--black)",
                    "&.Mui-checked": {
                      color: "var(--black)",
                    },
                  }}
                />
              }
              label="водопады"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "var(--black)",
                    "&.Mui-checked": {
                      color: "var(--black)",
                    },
                  }}
                />
              }
              label="каньоны"
            />
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    color: "var(--black)",
                    "&.Mui-checked": {
                      color: "var(--black)",
                    },
                  }}
                />
              }
              label="озера"
            />
          </FormGroup>
        </Box>
      </Box>
    </>
  );
};

export default Filter;
