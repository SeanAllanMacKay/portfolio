import React, { useState } from 'react';

import { Icon, Button } from 'antd'

export default ({ title, content, dot, final }) => {
    const [open, setOpen] = useState(false)

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '7px',
                justifyContent: 'space-between'
            }}
        >
            <div 
                style={{
                    flex: 1, 
                    margin: '0 10px 0 0',
                }}
            >
                <div 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-end' 
                    }}
                >
                    <div>
                        <div 
                            style={{
                                fontSize: '1.5em',
                                display: 'flex',
                                float: 'right',
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }}
                        >
                            {title}
                            {
                                content &&
                                <Button
                                    type="link"
                                    onClick={() => {
                                        setOpen(!open)
                                    }}
                                >
                                    {open ? <Icon type="minus" /> : <Icon type="plus" />}
                                </Button>
                            }
                        </div>
                    </div>
                    <div 
                        style={{ 
                            display: open ? 'flex' : 'none' 
                        }}
                    >
                        {content}
                    </div>
                </div>
            </div>
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
        </div>
    )
}