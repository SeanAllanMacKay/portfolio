import React from 'react';

import Icon from './Icon'

export default () => {
  return(
    <div 
      style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
      }}
    >
      <Icon type="github" title="GitHub"/>
      <Icon type="linkedin" />
      <Icon type="dribbble" />
    </div>
  )
}