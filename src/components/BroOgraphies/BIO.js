import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

export default function BIO(props) {
    return (
        <Paper elevation={4}>
            <Typography type="headline">
                {props.headline}
            </Typography>
            <Typography type="body1">
                {props.children}
            </Typography>
        </Paper>
    )
}