import { useState, MouseEvent } from "react";
import { Box, IconButton, Typography, Menu, Tooltip } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Avatar from "../../assets/images/icon-user.svg";

import UserMenuItem from "./UserMenuItem";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // Click event handle for open user menu
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // Click event handle for close user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // Icon styles
  const headerIconStyle = {
    verticalAlign: "middle",
    mr: "16px",
    fontSize: "22px",
  };

  return (
    <Box sx={{ flexGrow: 0, pl: "22px" }}>
      <Tooltip title="Open settings" arrow>
        <IconButton
          onClick={handleOpenUserMenu}
          sx={{ p: 0, bgcolor: "transparent" }}
        >
          <Typography>
            John Doe
            <KeyboardArrowDownRoundedIcon
              sx={{
                verticalAlign: "middle",
                ml: "16px",
                mr: "8px",
              }}
            />
          </Typography>
          <img src={Avatar} alt="avatar" />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <UserMenuItem
          name="Status"
          status="Online"
          icon={<DonutLargeRoundedIcon sx={headerIconStyle} />}
          handleCloseUserMenu={handleCloseUserMenu}
        />

        <UserMenuItem
          name="Account Settings"
          icon={<ManageAccountsOutlinedIcon sx={headerIconStyle} />}
          handleCloseUserMenu={handleCloseUserMenu}
        />

        <UserMenuItem
          name="Notification"
          icon={<NotificationsNoneOutlinedIcon sx={headerIconStyle} />}
          handleCloseUserMenu={handleCloseUserMenu}
        />

        <UserMenuItem
          name="Help"
          icon={<HelpCenterOutlinedIcon sx={headerIconStyle} />}
          handleCloseUserMenu={handleCloseUserMenu}
        />

        <UserMenuItem
          name="Logout"
          icon={<LogoutOutlinedIcon sx={headerIconStyle} />}
          handleCloseUserMenu={handleCloseUserMenu}
        />
      </Menu>
    </Box>
  );
};

export default UserMenu;
