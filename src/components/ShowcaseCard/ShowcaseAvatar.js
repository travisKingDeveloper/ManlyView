import React from 'react'

export default function ShowcaseAvatar(props) {
    return (
        <div className="showcase-avatar">
            <img src={props.logo} />
        </div>
    )
}