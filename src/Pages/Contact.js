import React, { useState } from 'react';

import Input from '../Components/Input'
import SocialLinks from '../Components/SocialLinks'
import { Button } from 'antd'

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  infoContainer: {
    flex: 1
  },
  text: {
    color: 'black'
  },
  title: {
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
  sideBySide: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  button: {
      width: 'calc(100% - 10px)',
  },
}

export default () => {
  return(
    <div style={styles.mainContainer}>
        <div style={styles.infoContainer}>
            <h2 style={{...styles.text, ...styles.title}}>What's on your mind?</h2>
            <p style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Massa tincidunt nunc pulvinar sapien et ligula. Et leo duis ut diam.
            </p>
            <SocialLinks />
        </div>
    </div>
  )
}