import { Fab } from "@mui/material"

export default function OwnFab(props) {

  return <Fab {...props}>
          {props.children}
        </Fab>
};