import React, { useState } from 'react';

import useScreenSize from '../hooks/useScreenSize'

import About from './About'
import Contact from './Contact'
import PageTemplate from './PageTemplate'
import Resume from './Resume'
import Portfolio from './Portfolio'
import { Button, Icon, Drawer } from 'antd'

export default (props) => {
  const [screenSize] = useScreenSize();
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [pageOne, setPageOne] = useState({paused: true, reverse: false, open: true})
  const [pageTwo, setPageTwo] = useState({paused: true, reverse: false, open: false})
  const [pageThree, setPageThree] = useState({paused: true, reverse: false, open: false})
  const [pageFour, setPageFour] = useState({paused: true, reverse: false, open: false})

  return(
    <div
      style={{
        position: 'relative'
      }}
    >
      {screenSize.large &&
        <>
          <Button
            style={{
              position: 'absolute',
              zIndex: '999',
              right: '10px',
              top: '7px',
              color: 'white',
              fontSize: '1.5em'
            }}
            type="link"
            onClick={() => {
              setDrawerOpen(!drawerOpen)
            }}
          >
            <Icon type="menu" />
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={() => setDrawerOpen(!drawerOpen)}
            visible={drawerOpen}
            width={'160px'}
          >
            <div
              style={{
                zIndex: '999',
                color: 'white',
                fontSize: '1.5em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Button
                type="link"
                style={{
                  fontSize: '1.5em',
                  padding: 0,
                  margin: '0 0 10px 0'
                }}
                onClick={() => {
                  if(!pageOne.open) {
                    let delay =
                      pageThree.open ?
                      200 :
                      pageFour.open ?
                      300 :
                      0;
                    setTimeout(() => {
                      setPageOne({paused: false, reverse: true, open: true})
                    }, delay)
                    setTimeout(() => {
                      setPageTwo({paused: false, reverse: true, open: false})
                    }, delay-100)
                    setTimeout(() => {
                      setPageThree({paused: false, reverse: true, open: false})
                    }, delay-200)
                    setTimeout(() => {
                      setPageFour({paused: false, reverse: true, open: false})
                    }, delay-300)
                  }
                  setDrawerOpen(false)
                }}
              >
                About
              </Button>

              <Button
                type="link"
                style={{
                  fontSize: '1.5em',
                  padding: 0,
                  margin: '0 0 10px 0'
                }}
                onClick={() => {
                  if(!pageTwo.open) {
                      let delay =
                        pageFour.open ?
                        300 :
                        0;
                      setTimeout(() => {
                        setPageTwo({paused: false, reverse: true, open: true})
                      }, delay)
                      setTimeout(() => {
                        setPageOne({paused: false, reverse: false, open: false})
                      }, delay-100)
                      setTimeout(() => {
                        setPageThree({paused: false, reverse: true, open: false})
                      }, delay-100)
                      setTimeout(() => {
                        setPageFour({paused: false, reverse: true, open: false})
                      }, delay-300)
                  }
                  setDrawerOpen(false)
                }}
              >
                Projects
              </Button>

              <Button
                type="link"
                style={{
                  fontSize: '1.5em',
                  padding: 0,
                  margin: '0 0 10px 0'
                }}
                onClick={() => {
                  if(!pageThree.open){
                    let delay =
                        pageOne.open ?
                        300 :
                        0;
                      setTimeout(() => {
                        setPageThree({paused: false, reverse: true, open: true})
                      }, delay)
                      setTimeout(() => {
                        setPageOne({paused: false, reverse: false, open: false})
                      }, delay-300)
                      setTimeout(() => {
                        setPageTwo({paused: false, reverse: false, open: false})
                      }, delay-100)
                      setTimeout(() => {
                        setPageFour({paused: false, reverse: true, open: false})
                      }, delay-100)
                  }
                  setDrawerOpen(false)
                }}
              >
                Resume
              </Button>

              <Button
                type="link"
                style={{
                  fontSize: '1.5em',
                  padding: 0,
                  margin: '0 0 10px 0'
                }}
                onClick={() => {
                  if(!pageFour.open){
                    let delay =
                        pageOne.open ?
                        450 :
                        pageTwo.open ?
                        300 :
                        0;
                      setTimeout(() => {
                        setPageFour({paused: false, reverse: true, open: true})
                      }, delay)
                      setTimeout(() => {
                        setPageOne({paused: false, reverse: false, open: false})
                      }, delay-450)
                      setTimeout(() => {
                        setPageTwo({paused: false, reverse: false, open: false})
                      }, delay-250)
                      setTimeout(() => {
                        setPageThree({paused: false, reverse: false, open: false})
                      }, delay-100)
                  }
                  setDrawerOpen(false)
                }}
              >
                Contact
              </Button>
            </div>
          </Drawer>
        </>
      }
      <PageTemplate
        left={210}
        top={0}
        zIndex={4}
        animation={pageFour}
        title="CONTACT"
        onMouseEnter={()=>{
          if(!pageFour.open){
            setPageFour({paused: false, reverse: true, open: true})
            setPageOne({paused: false, reverse: false, open: false})
            setPageTwo({paused: false, reverse: false, open: false})
            setPageThree({paused: false, reverse: false, open: false})
          }
        }}
        page={<Contact />}
      />
      <PageTemplate
        left={140}
        top={33}
        zIndex={2}
        animation={pageThree}
        title="RESUME"
        onMouseEnter={()=>{
          if(!pageThree.open){
            setPageThree({paused: false, reverse: true, open: true})
            setPageOne({paused: false, reverse: false, open: false})
            setPageTwo({paused: false, reverse: false, open: false})
            setPageFour({paused: false, reverse: true, open: false})
          }
        }}
        page={<Resume />}
      />
      <PageTemplate
        left={70}
        top={66}
        zIndex={3}
        animation={pageTwo}
        title="PROJECTS"
        onMouseEnter={()=>{
          if(!pageTwo.open) {
            setPageTwo({paused: false, reverse: true, open: true})
            setPageOne({paused: false, reverse: false, open: false})
            setPageThree({paused: false, reverse: true, open: false})
            setPageFour({paused: false, reverse: true, open: false})
          }
        }}
        page={<Portfolio />}
      />
      <PageTemplate
        left={0}
        top={99}
        zIndex={4}
        animation={pageOne}
        title="ABOUT"
        onMouseEnter={()=>{
          if(!pageOne.open) {
            setPageOne({paused: false, reverse: true, open: true})
            setPageTwo({paused: false, reverse: true, open: false})
            setPageThree({paused: false, reverse: true, open: false})
            setPageFour({paused: false, reverse: true, open: false})
          }
        }}
        page={<About />}
      />
    </div>
  )
}