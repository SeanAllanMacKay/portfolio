import React, { useState } from 'react';
import { Form, Field as FormField } from 'react-final-form'

import { Input, Button, notification } from 'antd'

import Submitted from './Submitted'

const { TextArea } = Input

const Field = ({ title, error, helper, input }) => {
  return (
      <div
          style={{
              width: '100%',
              margin: '0 0 30px 0',
              display: 'flex',
              flexDirection: 'column',
          }}
      >
          {title &&
              <p
                  style={{
                      fontSize: '1.5em',
                      margin: '0 0 5px 0',
                      fontWeight: 'bold',
                  }}
              >
                  {title}
              </p>
          }
          {input}
          <p
              style={{
                  color: error ? 'darkred' : 'grey',
                  margin: 0,
                  fontSize: '1.5em',
              }}
          >
              {error ? error : helper && helper}
          </p>
      </div>
  )
}

const required = (value) => value ? undefined : 'Required'

export default () => {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async ({
    name,
    email,
    subject,
    body
  }) => {
    const response = await fetch('send-email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        name,
        email,
        subject,
        body
      })
    })

    if(response.status === 200){
      const { success, message } = await response.json()

      if(success){
        setSubmitted(true)
      } else {
        notification['error']({
          message: 'Error',
          description: message,
        });
      }


    } else {
      notification['error']({
        message: 'Error',
        description: 'There was an error sending this email.',
      });
    }
  }

  return(
    <div
      style={{
        padding: '30px',
        height: '100vh',
        overflow: 'auto',
        width: '100%'
      }}
    >
      {!submitted ?
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <>
              <h3
                style={{
                  fontFamily: 'Lobster, Cursive',
                  fontSize: '4em',
                  margin: 0,
                  wordBreak: 'break-word'
                }}
              >
                Hey{name ? ` ${name}` : ''},
              </h3>
              <p
                style={{
                  fontSize: '1.75em'
                }}
              >
                If you want to get in touch with me for any reason feel free to drop a line or two in the form below.
              </p>
              <FormField
                name="name"
                validate={required}
                render={({ input: { value, onChange, onBlur }, meta: { error, touched } }) => (
                  <Field
                    title="Name"
                    input={
                      <Input
                          value={value}
                          onChange={({ target: { value } }) => {
                            setName(value)
                            onChange(value)
                          }}
                          onBlur={onBlur}
                          style={{
                            fontSize: '1.5em'
                          }}
                          disabled={submitting}
                      />
                    }
                    style={{
                      marginRight: '20px'
                    }}
                    error={touched && error}
                    helper="Who are you?"
                  />
                )}
              />

              <FormField
                name="email"
                validate={required}
                render={({ input: { value, onChange, onBlur }, meta: { error, touched } }) => (
                  <Field
                    title="Email"
                    input={
                      <Input
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          style={{
                            fontSize: '1.5em'
                          }}
                          disabled={submitting}
                      />
                    }
                    style={{
                      marginRight: '20px'
                    }}
                    error={touched && error}
                    helper="How can I contact you?"
                  />
                )}
              />

              <FormField
                name="subject"
                validate={required}
                render={({ input: { value, onChange, onBlur }, meta: { error, touched } }) => (
                  <Field
                    title="Subject"
                    input={
                      <Input
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          style={{
                            fontSize: '1.5em'
                          }}
                          disabled={submitting}
                      />
                    }
                    style={{
                      marginRight: '20px'
                    }}
                    error={touched && error}
                    helper="What's this about"
                  />
                )}
              />

              <FormField
                name="body"
                validate={required}
                render={({ input: { value, onChange, onBlur }, meta: { error, touched } }) => (
                  <Field
                    title="Content"
                    input={
                      <TextArea
                          value={value}
                          onChange={onChange}
                          onBlur={onBlur}
                          rows={7}
                          style={{
                            fontSize: '1.5em'
                          }}
                          disabled={submitting}
                      />
                    }
                    error={touched && error}
                    helper="What's on your mind?"
                  />
                )}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  minHeight: '100px'
                }}
              >
                <Button
                  type="primary"
                  onClick={() => handleSubmit()}
                  style={{
                    fontSize: '1.5em',
                    height: '40px',
                    padding: '5px 30px'
                  }}
                  loading={submitting}
                >
                  Send
                </Button>
              </div>
            </>
          )}
        />
        :
        <Submitted name={name}/>
      }

    </div>
  )
}