import React, { useState, useRef } from 'react';

import { Icon, Button } from 'antd'

export default ({ title, content, dot, final }) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '7px',
                justifyContent: 'flex-end'
            }}
        >
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                {dot}
                {!final && 
                    <div 
                        style={{
                            border: '1px solid gray', 
                            flex: 1, 
                            width: 0, 
                            minHeight: '20px'
                        }}
                    />
                }
            </div>
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    flex: 1
                }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            margin: '0px 15px',
                            color: '#A5037A'
                        }}
                    >
                        {open ? <Icon type="minus" /> : <Icon type="plus" />}
                    </div>
                    <h3
                        style={{
                            margin: 0,
                            fontSize: '1.5em',
                            flexGrow: open ? 1 : 0,
                            transition: 'flex-grow 0.25s',
                            borderBottom: open && '1px solid darkgrey',
                        }}
                    >
                        {title}
                    </h3>
                </div>  

                <div 
                    ref={contentRef}
                    style={{ 
                        overflow: 'hidden',
                        height: open ? contentRef.current.scrollHeight : 0,
                        transition: 'height 0.25s',
                        margin: '15px 45px'
                    }}
                >
                    {content}
                </div>
            </div>
            
        </div>
    )
}