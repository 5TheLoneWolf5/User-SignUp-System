import { Avatar } from "@mui/material"

export default function OwnAvatar(props) {

  return <Avatar {...props}>
          {props.children}
        </Avatar>

};