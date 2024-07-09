import { CircularProgress } from "@mui/material";

export default function Loading(props) {

  return <CircularProgress {...props}>
            {props.children}
        </CircularProgress>

};