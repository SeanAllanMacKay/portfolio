import React from 'react';

import { Button, Modal, Icon } from 'antd'

import phoneImage from '../images/Portfolio/phone.png'

export default ({ open, onCancel }) => {
    return(
        <Modal
            visible={open}
            onCancel={onCancel}
            title="Advanced Electric Energy Demo"
            footer={
                <Button
                    type="primary"
                    onClick={onCancel}
                >
                    Close
                </Button>
            }
            width={500}
            style={{
                top: '20px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <iframe
                    title='advance-mobile'
                    src='http://www.advancedelectricenergy.ca/'
                    style={{
                        width: '400px',
                        height: '650px',
                        border: '2px solid lightgrey',
                        borderRadius: '20px'
                    }}
                    frameBorder='0'
                />
            </div>
        </Modal>
    )
}