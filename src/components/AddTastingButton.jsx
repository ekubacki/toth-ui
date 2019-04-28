import * as React from "react"
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const ADD_BUTTON_STYLE = {
    position: 'fixed',
    bottom: '7%',
    right: '2%',
    backgroundColor: '#18453B',
    color: '#FFFFFF'
}

export default function AddTastingButton(props) {
    return (
        <Fab style={ADD_BUTTON_STYLE} onClick={props.onClick} >
          <AddIcon />
        </Fab>
    )
}