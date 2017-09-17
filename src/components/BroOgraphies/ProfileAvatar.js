import React from 'react'
import ListItem from 'material-ui/List/ListItem'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

// const ProfileAvatar = (props) => {
//     return(
//         <div className="avatar">
//             <Paper circle={true} zDepth={5}>
//                 <img src={props.url} />
//             </Paper>
//         </div>
//     );
// }

// const ProfileAvatar = (props) => {
//     return(
//         <Paper>
//             <img src={props.url} />
//         </Paper>    
//     )
// }

const style = {
    bigAvatar: {
        width: 80,
        height: 80
    }
}

const ProfileAvatar = (props) => {
    const classes = props.classes;
    return(
        <div>
            <Avatar src={props.url} className={classes.bigAvatar}/>
        </div>
    )
}

export default withStyles(style)(ProfileAvatar)