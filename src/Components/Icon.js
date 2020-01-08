import React, { useState } from 'react';

import { Icon } from 'antd'

export default ({ type, title }) => {
    const [hovered, setHovered] = useState(true);
    return(
        <div>
            <Icon 
                type={type}
                style={{
                    fontSize: '3.5em',
                    margin: '10px 0',
                    color: hovered ? 'rgba(0,0,0, 0.75)' : 'rgba(0,0,0, 0.5)',
                  }} 
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
            />
            <h3>{title}</h3>
        </div>
    )
}