import { Box, Menu, MenuItem, Typography } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import ViewQuiltOutlinedIcon from "@mui/icons-material/ViewQuiltOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const MenuItems = ({ anchorElUser, handleCloseMenu }: any) => {
  // Icon styles
  const headerIconStyle = {
    verticalAlign: "middle",
    mr: "12px",
    fontSize: "22px",
  };

  const menuItemStyle = {
    px: "24px",
    py: "14px",
    width: 220,
    color: "#fff",
    bgcolor: "#53575A",
    "&:hover": {
      color: "#fff",
      bgcolor: "#333",
    },
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseMenu}
    >
      <Box>
        <Box
          sx={{
            color: "#fff",
            bgcolor: "#454545",
            py: 1,
            px: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Select Elements
          <CloseRoundedIcon sx={{ color: "#FFBF3C" }} />
        </Box>
        <MenuItem sx={menuItemStyle} onClick={handleCloseMenu}>
          <Typography textAlign="center">
            <SettingsOutlinedIcon sx={headerIconStyle} />
            Settings
          </Typography>
          <KeyboardArrowDownRoundedIcon sx={{ ml: "auto" }} />
        </MenuItem>

        <MenuItem sx={menuItemStyle} onClick={handleCloseMenu}>
          <Typography textAlign="center">
            <HistoryOutlinedIcon sx={headerIconStyle} />
            Recent
          </Typography>
          <KeyboardArrowDownRoundedIcon sx={{ ml: "auto" }} />
        </MenuItem>

        <MenuItem sx={menuItemStyle} onClick={handleCloseMenu}>
          <Typography textAlign="center">
            <WidgetsOutlinedIcon sx={headerIconStyle} />
            Facility Props
          </Typography>
          <KeyboardArrowDownRoundedIcon sx={{ ml: "auto" }} />
        </MenuItem>

        <MenuItem sx={menuItemStyle} onClick={handleCloseMenu}>
          <Typography textAlign="center">
            <ViewQuiltOutlinedIcon sx={headerIconStyle} />
            Rooms
          </Typography>
          <KeyboardArrowDownRoundedIcon sx={{ ml: "auto" }} />
        </MenuItem>

        <MenuItem sx={menuItemStyle} onClick={handleCloseMenu}>
          <Typography textAlign="center">
            <ShoppingCartOutlinedIcon sx={headerIconStyle} />
            Carriers
          </Typography>
          <KeyboardArrowDownRoundedIcon sx={{ ml: "auto" }} />
        </MenuItem>
      </Box>
    </Menu>
  );
};

export default MenuItems;
