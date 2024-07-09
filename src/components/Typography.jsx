import { Typography } from "@mui/material"

export default function OwnTypography(props) {

  return <Typography {...props}>
          {props.children}
        </Typography>

};