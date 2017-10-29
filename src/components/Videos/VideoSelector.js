import React from 'react'
import cn from 'classnames'

import Paper from 'material-ui/Paper'


export default function VideoSelector(props) {
    const title_cn = cn('video-selector__title', {
        'video-selector__title--selected' : props.selected,
    })

    return (
        <Paper 
            elevation={props.selected ? 8 : 2} 
            onClick={props.onClick}
            className={"video-selector"}
        >
            <div className={title_cn}>
                {props.title}
            </div>
            <div className={"video-selector__image"}>
                {props.children}
            </div>
        </Paper>
    )
}
