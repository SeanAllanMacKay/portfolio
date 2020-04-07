import React from 'react';
import useScreenSize from '../../hooks/useScreenSize'

import {
    CheckCircleOutline
} from '@material-ui/icons'

export default ({ name }) => {
    const [screenSize] = useScreenSize();
    return(
        <div
            style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                minWidth: screenSize.large ? 'calc(100vw - 60px)' : '100%'
            }}
        >
                <h3
                    style={{
                        fontFamily: 'Lobster, Cursive',
                        fontSize: screenSize.large ? '3.5em' : '6em',
                        margin: '60px  0 60px 0',
                        display: 'inline-block',
                        textAlign: 'center',
                        wordBreak: 'break-word'
                    }}
                >
                    Thanks {name}!
                </h3>

                <CheckCircleOutline style={{ color: 'green', fontSize: screenSize.large ? '6em' : '9em', }}/>

                <p
                    style={{
                        fontFamily: 'Raleway, Sans-Serif',
                        fontSize: screenSize.large ? '2em' : '3.5em',
                        margin: '20px 0 0 0',
                        display: 'inline-block'
                    }}
                >
                    EMAIL SENT
                </p>
        </div>
    )
}