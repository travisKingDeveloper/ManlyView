import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'

const style = {
    bigAvatar: {
        width: 80,
        height: 80,
    },
    selectedAvatar: {
        width: 100,
        height: 100,
    }
}

const ProfileAvatar = (props) => {
    const {
        classes,
        profile: {
            url,
            name,
        }
    } = props;

    return(
        <div onClick={() => props.onClick(props.profile)}>
            <Avatar 
                src={url} 
                className={props.selected(name) ? classes.selectedAvatar : classes.bigAvatar } 
            />
        </div>
    )
}

export default withStyles(style)(ProfileAvatar)