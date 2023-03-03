import React from 'react'
import { Button } from '@mui/material'
const Buttons = (props) => {

    return (
        <>
        
<Button onClick={props.click} className={props.classes} color={props.color} variant='contained' > {props.label}
</Button>

        </>
    )
}

export default Buttons
