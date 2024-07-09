import { Button } from "@mui/material"

export default function OwnButton(props) {

  return <Button {...props}>
          {props.children}
        </Button>
};