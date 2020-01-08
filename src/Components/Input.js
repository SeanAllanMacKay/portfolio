import React from 'react';

import { Input } from 'antd'

export default ({ style, title, textArea, name }) => {
  return(
        <div
          style={{
            ...{
              display: 'flex',
              flexDirection: 'column',
              margin: '0 10px 7px 0'
            }, 
            ...style
          }}
        >
            {title && 
              <h2 
                style={{
                  color: 'black',
                  margin: 0
                }}
              >
                {title}
              </h2>
            }
            {textArea ? 
                <Input.TextArea 
                  name={name} 
                  autosize={{
                    minRows: 4, 
                    maxRows: 10
                  }}
                />
                :
                <Input 
                  name={name}
                />
            }
        </div>
  )
}