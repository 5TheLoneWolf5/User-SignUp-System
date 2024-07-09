import { IconButton } from "@mui/material";

export default function OwnIconButton(props) {

  return <IconButton {...props}>
            {props.children}
        </IconButton>

};