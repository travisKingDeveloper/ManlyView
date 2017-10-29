import React from 'react'

import Facebook from '../SocialMediaUtility/Facebook'

export default function ShowcaseAvatar(props) {
    return (
        <div className="showcase-avatar">
            <img src={props.logo} />
        </div>
    )
}