import React, { useEffect, useState } from 'react';

import useScreenSize from '../hooks/useScreenSize'

export default ({ title, image, description, stack, libraries, links }) => {
    const [open, setOpen] = useState(false)
    const [screenSize] = useScreenSize();

    useEffect(() => {
        setOpen(true)
    }, [])
    return(
        <div>
            <div
                style={{
                    height: '50vh',
                    position: 'relative',
                    backgroundColor: '#A5037A'
                }}
            >
                <div
                    style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    clipPath: open ? `polygon(0 0, 100% 0, 100% 75%, ${Math.floor(Math.random() * (65 - 25) ) + 25}% ${Math.floor(Math.random() * (80 - 70) ) + 70}%, 0% 85%)` : 'polygon(0 0, 100% 0, 100% 100%, 50% 100%, 0% 100%)',
                    transition: 'clip-path 0.5s',
                    overflow: 'hidden',
                    position: 'absolute',
                    zIndex: '5'
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '0',
                        margin: !screenSize.large ? '0 30px 0 0' : '0 15px 0 15px',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '0 30px 0 0',
                            alignItems: 'flex-end'
                        }}
                    >
                        {links &&
                            links.map(link => link)
                        }
                    </div>
                    <h2
                        style={{
                            color: 'white',
                            fontSize: !screenSize.large ? '5em' : '2.5em',
                            margin: !screenSize.large ? '0 0 -10px 0' : '0',
                        }}
                    >
                        {title}
                    </h2>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: !screenSize.large ? 'row' : 'column-reverse',
                    padding: '30px',
                    borderRight: '1px solid lightgrey',
                    minHeight: '50vh',
                    opacity: open ? 1 : 0,
                    transition: 'opacity 0.75s'
                }}
            >
                <div
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div
                        style={{
                            margin: '0 0 20px 0'
                        }}
                    >
                        <h3
                            style={{
                                fontSize: '2em',
                                borderBottom: '1px solid lightgrey'
                            }}
                        >
                            Stack
                        </h3>

                        {Object.entries(stack).map(([key, value]) => (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    fontSize: '1.25em',
                                    margin: '0 0 10px 0'
                                }}
                            >
                                <h4
                                    style={{
                                        margin: 0
                                    }}
                                >
                                    {key}
                                </h4>
                                <div
                                    style={{
                                        flex: 1,
                                        borderBottom: '1.5px dotted lightgrey',
                                        height: '80%',
                                        margin: '0 3px'
                                    }}
                                />
                                <p
                                    style={{
                                        margin: 0
                                    }}
                                >
                                    {value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {
                        libraries &&
                            <div
                                style={{
                                    margin: '0 0 20px 0'
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '2em',
                                        borderBottom: '1px solid lightgrey'
                                    }}
                                >
                                    Notable Libraries
                                </h3>

                                <div
                                    style={{
                                        fontSize: '1.25em'
                                    }}
                                >
                                    {libraries.map((library, index) => (
                                        <div
                                            style={{
                                                margin: '0 10px 0 0',
                                                display: 'inline-block'
                                            }}
                                        >
                                            {library}
                                            {index !== (libraries.length -1) ? ', ' : ''}
                                        </div>
                                    ))}
                                </div>
                            </div>
                    }

                </div>

                <div
                    style={{
                        borderRight: '1px solid lightgrey',
                        margin: '0 30px'
                    }}
                />

                <div
                    style={{
                        flex: 2,
                        backgroundColor: 'white',
                    }}
                >
                    <h3
                        style={{
                            fontSize: '2em',
                            borderBottom: '1px solid lightgrey'
                        }}
                    >
                        Description
                    </h3>

                    <div
                        style={{
                            fontSize: '1.45em',
                        }}
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    )
}