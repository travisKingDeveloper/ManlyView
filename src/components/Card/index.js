import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import manCard_BW from '../../assets/ManCard-BW.jpg'
import logo from '../../assets/logo.png'
import twoGents from '../../assets/TwoGents.jpg'
import allOfThem from '../../assets/allOfThem.jpg'

import './mancard.css';

export default class ManCard extends Component {
    constructor(args) {
        super(args)

        this.state = {
            currentPicture: 'bw',
        }
    }

    static ManCardImages = {
        BlackWhite: 'bw',
        TwoGents:   'tg',
        AllOfThem:  'all',
    }

    renderImage = () => {
        switch(this.state.currentPicture){
            case ManCard.ManCardImages.BlackWhite: 
                return manCard_BW
            case ManCard.ManCardImages.TwoGents:
                return twoGents
            case ManCard.ManCardImages.AllOfThem:
                return allOfThem
            default:
                return manCard_BW
        }
    }

    setImageState(image) {
        this.setState(x => x.currentPicture = image);
    }

    render() {
        return (
            <Card>
                <CardHeader
                    title="The Manly View"
                    subtitle="The Gents with Two Cents"
                    avatar={logo}
                />
                <CardMedia
                    overlay={
                        <CardTitle 
                            title="The Boys from the Manly View" 
                            subtitle="The Gents with Two Cents" 
                        />}
                >
                    <img src={this.renderImage()} alt="Pictures Describing the Gents with Two Cents" className="man-card"/>
                </CardMedia>
                
                <CardActions>
                    <FlatButton label="Some Gents" onClick={() => this.setImageState(ManCard.ManCardImages.BlackWhite)} />
                    <FlatButton label="Recording Session!" onClick={() => this.setImageState(ManCard.ManCardImages.TwoGents)} />
                    <FlatButton label="The Boys Are Back In Town" onClick={() => this.setImageState(ManCard.ManCardImages.AllOfThem)} />
                </CardActions>
            </Card>
        )
    }
}