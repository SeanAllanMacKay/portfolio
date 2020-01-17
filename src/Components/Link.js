import React, { useState } from 'react';

import { Icon } from 'antd'

export default ({ icon, href, onClick }) => {
    const [hovered, setHovered] = useState(false);
    return(
        <>
            {href &&
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        margin: '0 10px 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onMouseEnter={() => {setHovered(true)}}
                    onMouseLeave={() => {setHovered(false)}}
                >
                    <div
                        style={{
                            borderRadius: '50% 50% 0 0',
                            backgroundColor: 'white',
                            padding: '10px',
                        }}
                    >
                        <Icon
                            style={{
                                fontSize: '2em',
                                margin: '0',
                                color: '#A5037A',
                                backgroundColor: 'white',
                                borderRadius: '50% 50% 0 0',
                            }}
                            component={icon}
                        />
                    </div>
                    <div
                        style={{
                            height: hovered ? '20px' : '0',
                            transition: 'height 0.25s',
                            backgroundColor: 'white'
                        }}
                    />
                </a>
            }

            {onClick &&
                <div
                    style={{
                        margin: '0 10px 0 0',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onMouseEnter={() => {setHovered(true)}}
                    onMouseLeave={() => {setHovered(false)}}
                    onClick={onClick}
                >
                    <div
                        style={{
                            borderRadius: '50% 50% 0 0',
                            backgroundColor: 'white',
                            padding: '10px',
                        }}
                    >
                        <Icon
                            style={{
                                fontSize: '2em',
                                margin: '0',
                                color: '#A5037A',
                                backgroundColor: 'white',
                                borderRadius: '50% 50% 0 0',
                            }}
                            component={icon}
                        />
                    </div>
                    <div
                        style={{
                            height: hovered ? '20px' : '0',
                            transition: 'height 0.25s',
                            backgroundColor: 'white'
                        }}
                    />
                </div>
            }
        </>
    )
}