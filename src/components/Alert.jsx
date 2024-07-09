import { Alert } from "@mui/material"

export default function OwnAlert(props) {

  return <Alert {...props}>
          {props.children}
        </Alert>
  
};