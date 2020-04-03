import React from 'react';

import useScreenSize from '../hooks/useScreenSize'
import TweenOne from 'rc-tween-one';
import { color } from '../styles/styles'

export default (props) => {
    const [screenSize] = useScreenSize();

    const styles = {
        animationContainer:
            screenSize.large ? {
                position: 'absolute',
                top: `0px`,
                left: '0px',
                zIndex: props.index,
            } : {
                position: 'absolute',
                top: '0px',
                left: `${props.left}px`,
                zIndex: props.index,
            },
        mainContainer:
            screenSize.large ? {
                display: 'flex',
                flexDirection: 'column-reverse',
                height: '100vh',
            } : {
                display: 'flex',
                flexDirection: 'row',
                width: 'calc(100vw - 210px)',
                height: '100vh'
            },
        bodyContainer: {
            flex: 1,
            backgroundColor: 'white',
            overflow: 'hidden'
        },
        titleContainer:
            screenSize.large ? {
                height: '50px',
                backgroundColor: '#222222',
            } : {
                width: '70px',
                backgroundColor: '#222222',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
            },
        hover: {
            backgroundColor: color.primary
        },
        title:
            screenSize.large ? {
                marginLeft: '20px',
                fontSize: '2.15em',
                color: 'white'
            } : {
                transform: 'rotate(90deg)',
                margin: '20px 0 0 0',
                fontSize: '4em',
                color: 'white'
            },
    }

    return(
        <>
            <TweenOne
                animation={
                    screenSize.large ? {
                        y: (window.innerHeight),
                        duration: 500,
                    } : {
                        x: -(window.innerWidth - 280),
                        duration: 500,
                    }
                }
                paused={props.animation.paused}
                reverse={props.animation.reverse}
                style={styles.animationContainer}
            >
                <div style={styles.mainContainer}>
                    <div style={styles.bodyContainer}>
                        {props.page}
                    </div>
                    <div
                        style={props.animation.open ? {...styles.titleContainer, ...styles.hover} : styles.titleContainer}
                        onMouseEnter={() => {
                            if(!screenSize.large) props.onMouseEnter()
                        }}
                    >
                        <h2 style={styles.title}>{props.title}</h2>
                    </div>
                </div>
            </TweenOne>
        </>
    )
}