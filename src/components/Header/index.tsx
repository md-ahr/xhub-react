import { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import IconEdit from "../../assets/images/icon-edit.svg";
import IconCall from "../../assets/images/icon-call.svg";
import IconChat from "../../assets/images/icon-chat.svg";
import IconNotification from "../../assets/images/icon-notification.svg";
import IconChevronLeft from "../../assets/images/icon-chevron-left.svg";
import IconChevronRight from "../../assets/images/icon-chevron-right.svg";

import ButtonElement from "../ButtonElement";
import UserMenu from "./UserMenu";
import { TOP_HEADER_BUTTONS } from "../../utils/contants";
import MenuItems from "./MenuItems";

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // Click event handle for open user menu
  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // Click event handle for close user menu
  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  const buttonStyle = {
    color: "#fff",
    bgcolor: "#53575A",
    width: "147px",
    height: "50px",
    marginLeft: "12px",
    border: "2px solid #53575A",
    "&:hover": {
      color: "#fff",
      bgcolor: "#53575A",
      borderColor: "#FFBF3C",
    },
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
      <Box sx={{ width: "1820px", margin: "0 auto" }}>
        <Toolbar disableGutters>
          <Button
            sx={{
              minWidth: "27px",
              height: "27px",
              color: "#fff",
              bgcolor: "#53575A",
              "&:hover": {
                color: "#fff",
                bgcolor: "#53575A",
              },
            }}
            onClick={handleOpenMenu}
          >
            <MenuRoundedIcon />
          </Button>
          <MenuItems
            anchorElUser={anchorElUser}
            handleCloseMenu={handleCloseMenu}
          />

          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ paddingLeft: "160px", marginRight: "70px" }}
          />

          <Box sx={{ flexGrow: 1, textAlign: "center" }}>
            <Button
              sx={{
                minWidth: "35px",
                height: "35px",
                bgcolor: "#F1F1F9",
                border: "1px solid #E8E9EC",
              }}
            >
              <img src={IconChevronLeft} alt="icon left" />
            </Button>
            {TOP_HEADER_BUTTONS?.map((title) => (
              <ButtonElement key={title} title={title} styles={buttonStyle} />
            ))}
            <Button
              sx={{
                minWidth: "35px",
                height: "35px",
                bgcolor: "#F1F1F9",
                border: "1px solid #E8E9EC",
                ml: "12px",
              }}
            >
              <img src={IconChevronRight} alt="icon right" />
            </Button>
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

          <UserMenu />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
