import { Checkbox } from "@mui/material"

export default function OwnCheckbox(props) {

  return <Checkbox {...props}>
          {props.children}
        </Checkbox>
  
};