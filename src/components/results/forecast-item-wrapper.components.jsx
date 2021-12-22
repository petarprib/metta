import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

const ForecastItemWrapper = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      fullWidth
      sx={{
        border: "solid 1px",
        borderColor: "divider",
        marginBottom: 1,
        padding: `0 ${theme.spacing(2)}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default ForecastItemWrapper;
