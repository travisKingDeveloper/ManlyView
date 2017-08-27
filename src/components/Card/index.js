import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import rickandmorty from '../../assets/rickandmorty.jpg'
import logo from '../../assets/logo.png'

const ManCard = (props) => {
    return (
        <Card>
            <CardHeader
                title="The Manly View"
                subtitle="The Gents with Two Cents"
                avatar={logo}
            />
            <CardMedia
                overlay={<CardTitle title="Rick and Morty Placeholder" subtitle="I seriously have no idea (I also Do not own this image, kudos to the artist)" />}
            >
                <img src={rickandmorty} alt="Rick and Morty Placeholder"/>
            </CardMedia>
            
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
            <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
            </CardActions>
        </Card>
    )
}

export default ManCard