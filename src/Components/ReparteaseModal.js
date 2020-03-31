import React from 'react';

import { Button, Modal, Icon } from 'antd'

export default ({ open, onCancel }) => {
    return(
        <Modal
            visible={open}
            onCancel={onCancel}
            title="Repartease Demo"
            footer={
                <Button
                    type="primary"
                    onClick={onCancel}
                >
                    Close
                </Button>
            }
            width={1300}
            style={{
                top: '20px',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '75vh',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '0 20px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                    }}
                >
                    <iframe
                        title='player-one'
                        src='https://repartease.herokuapp.com'
                        style={{
                            borderRadius: '20px',
                            flex: 1,
                            border: '3px solid darkgrey'
                        }}
                        frameBorder='0'
                    />
                    <h2
                        style={{
                            fontSize: '2em',
                            textAlign: 'center',
                            margin: '20px 0 0 0'
                        }}
                    >
                        Player 1
                    </h2>
                </div>

                <div
                    style={{
                        textAlign: 'center',
                        padding: '20px',
                        flex: 0.9,
                        justifyContent: 'space-around',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <div />
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 0 20px 0'
                            }}
                        >
                            <Icon
                                type="warning"
                                theme="twoTone"
                                twoToneColor="#ffd500"
                                style={{
                                    fontSize: '35px',
                                }}
                            />
                            <h2
                                style={{
                                    margin: '0 20px',
                                    fontSize: '1.75em'
                                }}
                            >
                                Disclaimer
                            </h2>
                            <Icon
                                type="warning"
                                theme="twoTone"
                                twoToneColor="#ffd500"
                                style={{
                                    fontSize: '35px',
                                }}
                            />
                        </div>

                        <p
                            style={{
                                fontSize: '1.25em'
                            }}
                        >
                            This project wasn't designed to be played with 2 instances in the same browser. This is just for demonstration purposes.
                        </p>

                        <p
                            style={{
                                fontSize: '1.25em'
                            }}
                        >
                            It uses cookies to keep track of players, so it'll sometimes glitch. Make sure to leave the games and reload the page if it does.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                    }}
                >
                    <iframe
                        title='player-two'
                        src='https://repartease.herokuapp.com'
                        style={{
                            borderRadius: '20px',
                            flex: 1,
                            border: '3px solid darkgrey'
                        }}
                        frameBorder='0'
                    />

                    <h2
                        style={{
                            fontSize: '2em',
                            textAlign: 'center',
                            margin: '20px 0 0 0'
                        }}
                    >
                        Player 2
                    </h2>
                </div>

            </div>
        </Modal>
    )
}