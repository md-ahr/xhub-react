import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DonutLargeRoundedIcon from "@mui/icons-material/DonutLargeRounded";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import IconEdit from "../assets/images/icon-edit.svg";
import IconCall from "../assets/images/icon-call.svg";
import IconChat from "../assets/images/icon-chat.svg";
import IconNotification from "../assets/images/icon-notification.svg";
import Avatar from "../assets/images/icon-user.svg";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        py: "5px",
        boxShadow: "0px 2px 4px -1px rgba(0,0,0,0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button>
            <MenuRoundedIcon sx={{ display: { xs: "none", md: "flex" } }} />
          </Button>

          <Box sx={{ flexGrow: 1 }}>
            <Button>Workspace - 1</Button>
            <Button>Workspace - 2</Button>
            <Button>Workspace - 3</Button>
            <Button>Workspace - 4</Button>
            <Button>Workspace - 5</Button>
            <Button>Workspace - 6</Button>
            <Button>Workspace - 7</Button>
          </Box>

          <IconButton sx={{ mr: "30px" }}>
            <img src={IconEdit} alt="edit" />
          </IconButton>

          <IconButton sx={{ mr: "30px" }}>
            <img src={IconCall} alt="call" />
          </IconButton>

          <IconButton sx={{ mr: "35px" }}>
            <img src={IconChat} alt="chat" />
          </IconButton>

          <IconButton
            sx={{
              pr: "22px",
              position: "relative",
            }}
          >
            <img src={IconNotification} alt="notification" />
            <Box
              sx={{
                bgcolor: "orange",
                width: "13px",
                height: "13px",
                borderRadius: "100vh",
                position: "absolute",
                top: "0",
                right: "15px",
                border: "2px solid #fff",
              }}
            ></Box>
          </IconButton>

          <Divider orientation="vertical" variant="middle" flexItem />

          <Box sx={{ flexGrow: 0, pl: "22px" }}>
            <Tooltip title="Open settings" arrow>
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, bgcolor: "transparent" }}
              >
                <Typography>
                  John Doe
                  <KeyboardArrowDownRoundedIcon
                    sx={{ verticalAlign: "middle", ml: "16px", mr: "8px" }}
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
              <MenuItem
                sx={{ px: "30px", py: "8px", width: 300 }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center" fontWeight="bold">
                  <DonutLargeRoundedIcon
                    sx={{
                      verticalAlign: "middle",
                      mr: "16px",
                      fontSize: "22px",
                    }}
                  />
                  Status:
                  <Typography
                    variant="body1"
                    component="span"
                    fontWeight="bold"
                    sx={{ color: "green" }}
                  >
                    Online
                  </Typography>
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  px: "30px",
                  py: "8px",
                  width: 300,
                  borderTop: "1px solid #e9e9e9",
                }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">
                  <ManageAccountsOutlinedIcon
                    sx={{
                      verticalAlign: "middle",
                      mr: "16px",
                      fontSize: "22px",
                    }}
                  />
                  Account Settings
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  px: "30px",
                  py: "8px",
                  width: 300,
                  borderTop: "1px solid #e9e9e9",
                }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">
                  <NotificationsNoneOutlinedIcon
                    sx={{
                      verticalAlign: "middle",
                      mr: "16px",
                      fontSize: "22px",
                    }}
                  />
                  Notification
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  px: "30px",
                  py: "8px",
                  width: 300,
                  borderTop: "1px solid #e9e9e9",
                }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">
                  <HelpCenterOutlinedIcon
                    sx={{
                      verticalAlign: "middle",
                      mr: "16px",
                      fontSize: "22px",
                    }}
                  />
                  Help
                </Typography>
              </MenuItem>

              <MenuItem
                sx={{
                  px: "30px",
                  py: "8px",
                  width: 300,
                  borderTop: "1px solid #e9e9e9",
                }}
                onClick={handleCloseUserMenu}
              >
                <Typography textAlign="center">
                  <LogoutOutlinedIcon
                    sx={{
                      verticalAlign: "middle",
                      mr: "16px",
                      fontSize: "22px",
                    }}
                  />
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
