import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={2}
      padding={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <div>Rightbar</div>
    </Box>
  );
};

export default Rightbar;
