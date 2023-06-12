import { Typography, MenuItem } from "@mui/material";

interface UserMenuProps {
  name: string;
  status?: string;
  icon: React.ReactNode;
  handleCloseUserMenu: () => void;
}

const UserMenuItem = ({
  name,
  status,
  icon,
  handleCloseUserMenu,
}: UserMenuProps) => {
  return (
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
        {icon}
        {!status && name}
        {status && (
          <>
            Status:
            <Typography
              variant="body1"
              component="span"
              fontWeight="bold"
              sx={{ color: "green" }}
            >
              Online
            </Typography>
          </>
        )}
      </Typography>
    </MenuItem>
  );
};

export default UserMenuItem;
