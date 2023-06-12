import { Button } from "@mui/material";

interface ButtonProps {
  title: string;
  styles: object;
}

const ButtonElement = ({ title, styles }: ButtonProps) => {
  return (
    <Button type="button" sx={styles}>
      {title}
    </Button>
  );
};

export default ButtonElement;
