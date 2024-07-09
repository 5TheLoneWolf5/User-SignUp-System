import { Grid } from "@mui/material"

export default function OwnGrid(props) {

  return <Grid container {...props}>
          {props.children}
        </Grid>
};