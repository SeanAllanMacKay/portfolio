import React, { useState } from 'react';
import { Form, Field as FormField } from 'react-final-form'

import { Input, Select, Button } from 'antd'

import SocialLinks from '../Components/SocialLinks'

const { TextArea } = Input
const { Option } = Select

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

const onSubmit = (values) => console.log(values)

export default () => {
  const [name, setName] = useState('')
  return(
    <div
      style={{
        padding: '30px',
        height: '100vh',
        overflow: 'auto'
      }}
    >
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <>
          <h3
            style={{
              fontFamily: 'Lobster, Cursive',
              fontSize: '4em',
              margin: 0
            }}
          >
            Hey, {name}
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
                  />
                }
                error={touched && error}
                helper="What's on your mind?"
              />
            )}
          />
        </>
      )}
    />
    </div>
  )
}