import React, { useState } from 'react';

import useScreenSize from '../../hooks/useScreenSize'

import Project from '../../Components/Project'
import Link from '../../Components/Link'
import ReparteaseModal from '../../Components/ReparteaseModal'
import AdvancedElectricEnergyModal from '../../Components/AdvancedElectricEnergyModal'
import { Menu, Tabs } from 'antd'

import portfolioImage from '../../images/Portfolio/portfolio.jpg'
import contractorImage from '../../images/Portfolio/contractor.jpg'
import electricImage from '../../images/Portfolio/electric.jpg'
import reparteaseImage from '../../images/Portfolio/repartease.jpg'

import { ReactComponent as GithubLogo } from '../../images/logos/github-logo.svg';
import { ReactComponent as wwwLogo } from '../../images/logos/www.svg';
import { ReactComponent as phoneIcon } from '../../images/logos/smartphone.svg';

const { Item } = Menu;

export default () => {
  const [screenSize] = useScreenSize();
  const [active, setActive] = useState('0')
  const [reparteasModalOpen, setReparteaseModalOpen] = useState(false)
  const [advancedElectricEnergyModalOpen, setAdvancedElectricEnergyModalOpen] = useState(false)

  return(
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: 'auto'
        }}
      >
        {active === '0' &&
          <Project
            title='React-wireframe'
            image={reparteaseImage}
            description={
              <>
                <p>
                  As awesome as <a href='https://reactjs.org/docs/create-a-new-react-app.html' target="_blank" rel="noopener noreferrer">Create-React-App</a> is, it still requires a bunch of setup. I've found myself using a similar setup enough times that I just decided to make a mini wireframe to let me hit the ground running. I've got different branches for each step of the application, from deleting all the extra CRA junk, to adding hooks to make the website screen size responsive.
                </p>

                <p>
                  It does all the boring stuff that I hate to do and lets me jump right into the more interesting parts of programming.
                </p>
              </>
            }
            stack={{
              Frontend: <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>,
              Server: <><a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer">Node</a>/<a href='https://expressjs.com/'>Express</a></>,
              Database: <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">MongoDB</a>,
            }}
            libraries={[
              <a
                href='https://socket.io/'
                target="_blank"
                rel="noopener noreferrer"
              >
                Socket.io
              </a>,
              <a
                href='https://mongoosejs.com/'
                target="_blank"
                rel="noopener noreferrer"
              >
                Mongoose
              </a>,
            ]}
            links={[
              <Link
                href='https://github.com/SeanAllanMacKay/react-wireframe'
                icon={GithubLogo}
              />,
            ]}
          />
        }
        {active === '1' &&
          <Project
            title="Repartease"
            image={reparteaseImage}
            description={
              <>
                <p>
                  To learn React, I decided to make a real-time mobile game. I would not recommend doing that. The game is based off of Jackbox's <a href='https://jackboxgames.com/quiplash/' target="_blank" rel="noopener noreferrer">Quiplash</a> and <a href='https://jackboxgames.com/quiplash/' target="_blank" rel="noopener noreferrer">Cards Against Humanity</a>. I was tired of having to bring a device/box of cards everywhere I wanted to play a game like this with my friends, so I built one.
                </p>

                <p>
                  It uses sockets in lieu of a REST API to allow for live syncing of everyone in the game. It's quite buggy as it's been put on the back-burner in favor of school and work, but I have every intention of getting this finished. At some point. Hopefully.
                </p>
              </>
            }
            stack={{
              Frontend: <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>,
              Server: <><a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer">Node</a>/<a href='https://expressjs.com/'>Express</a></>,
              Database: <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">MongoDB</a>,
              Hosting: <a href='https://devcenter.heroku.com/' target="_blank" rel="noopener noreferrer">Heroku</a>,
            }}
            libraries={[
              <a href='https://socket.io/' target="_blank" rel="noopener noreferrer">Socket.io</a>,
              <a href='https://mongoosejs.com/' target="_blank" rel="noopener noreferrer">Mongoose</a>,
              <a href='https://www.npmjs.com/package/universal-cookie' target="_blank" rel="noopener noreferrer">universal-cookie</a>
            ]}
            links={[
              !screenSize.large && <Link
                onClick={() => setReparteaseModalOpen(true)}
                icon={phoneIcon}
              />,
              <Link
                href='https://repartease.herokuapp.com'
                icon={wwwLogo}
              />,
              <Link
                onClick='https://github.com/SeanAllanMacKay/repartease_2.0'
                icon={GithubLogo}
              />,
            ]}
          />
        }

        {active === '2' &&
          <Project
            title="Advanced Electric Energy"
            image={electricImage}
            description={
              <>
                <p>
                  This is one of my only side-projects that is currently in production, mostly because I'm not paying for hosting. It's a simple site with a tiny server for emailing. I'm currently in the process of giving the entire site a pretty substantial overhaul.
                </p>
              </>
            }
            stack={{
              Frontend: <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>,
              Server: <><a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer">Node</a>/<a href='https://expressjs.com/'>Express</a></>,
              Database: <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">MongoDB</a>,
              Hosting: <a href='https://devcenter.heroku.com/' target="_blank" rel="noopener noreferrer">Heroku</a>,
            }}
            libraries={[
              <a href='https://nodemailer.com/about/' target="_blank" rel="noopener noreferrer">NodeMailer</a>,
              <a href='https://github.com/final-form/final-form' target="_blank" rel="noopener noreferrer">Final Form</a>,
              <a href='https://storybook.js.org/' target="_blank" rel="noopener noreferrer">Storybook</a>
            ]}
            links={[
              !screenSize.large && <Link
                onClick={() => setAdvancedElectricEnergyModalOpen(true)}
                icon={phoneIcon}
              />,
              <Link
                href='http://www.advancedelectricenergy.ca/'
                icon={wwwLogo}
              />,
            ]}
          />
        }

        {active === '3' &&
          <Project
            title="Contractor Market"
            image={contractorImage}
            description={
              <>
                <p>
                  This is by far my most ambitious project. The concept is creating a project management tool tailored made for contractors with a focus on collaboration. Feel free to make an account and poke around. Be warned though that there are a bunch of dead ends and partially completed sections. This is definitely a work in progress.
                </p>

                <p>
                  It utilizes a REST API with splashes of real-time sockets thrown in for fun. Although it's my biggest project, it's definitely not my most polished. I've been more focused on functionality over refinement so far.
                </p>
              </>
            }
            stack={{
              Frontend: <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>,
              Server: <><a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer">Node</a>/<a href='https://expressjs.com/'>Express</a></>,
              Database: <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">MongoDB</a>,
              Hosting: <a href='https://devcenter.heroku.com/' target="_blank" rel="noopener noreferrer">Heroku</a>,
              CDN: <a href='https://aws.amazon.com/s3/' target="_blank" rel="noopener noreferrer">S3</a>,
            }}
            libraries={[
              <a href='https://github.com/final-form/final-form' target="_blank" rel="noopener noreferrer">Final Form</a>,
              <a href='https://www.npmjs.com/package/bcrypt' target="_blank" rel="noopener noreferrer">BCrypt</a>,
              <a href='https://www.npmjs.com/package/jsonwebtoken' target="_blank" rel="noopener noreferrer">jsonwebtoken</a>,
              <a href='https://storybook.js.org/' target="_blank" rel="noopener noreferrer">Storybook</a>
            ]}
            links={[
              <Link
                href='https://contractor-market.herokuapp.com'
                icon={wwwLogo}
              />,
            ]}
          />
        }

        {active === '4' &&
          <Project
            title="This Website"
            image={portfolioImage}
            description={
              <>
                <p>
                  Whoa, pretty meta. This is a site I created to show off the websites I create, so why not show it off too?
                </p>

                <p>
                  It's almost entirely frontend, save fot the contact page emailing functionality. You can click around and see all the little stuff throughout.
                </p>
              </>
            }
            stack={{
              Frontend: <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">React</a>,
              Server: <><a href='https://nodejs.org/en/about/' target="_blank" rel="noopener noreferrer">Node</a>/<a href='https://expressjs.com/'>Express</a></>,
              Database: <a href='https://www.mongodb.com/' target="_blank" rel="noopener noreferrer">MongoDB</a>,
            }}
            links={[
              <Link
                href='https://github.com/SeanAllanMacKay/portfolio'
                icon={GithubLogo}
              />,
            ]}
          />
        }
      </div>

      {!screenSize.large ?
        <Menu
          defaultSelectedKeys={[active]}
          mode="inline"
          style={{
            width: "250px",
          }}
          onSelect={({ key }) => setActive(key)}
        >
          <Item
            key='0'
          >
            <span style={{ fontSize: '17px' }}>React-Wireframe</span>
          </Item>
          <Item
            key='1'
          >
            <span style={{ fontSize: '17px' }}>Repartease</span>
          </Item>
          <Item
            key='2'
          >
            <span style={{ fontSize: '17px' }}>Advanced Electric Energy</span>
          </Item>
          <Item
            key='3'
          >
            <span style={{ fontSize: '17px' }}>Contractor-Market</span>
          </Item>
          <Item
            key='4'
          >
            <span style={{ fontSize: '17px' }}>This Website</span>
          </Item>
        </Menu>
        :
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '50px',
            zIndex: '100',
            width: '100vw',
            backgroundColor: 'white',
            height: '47px',
            overflow: 'hidden'
          }}
        >
          <Tabs
            defaultSelectedKeys={[active]}
            style={{
              width: '100%',
              margin: 0
            }}
            onChange={(key) => setActive(key)}
          >
            <Tabs.TabPane
              tab={<span style={{ fontSize: '17px' }}>React-Wireframe</span>}
              key="0"
            />
            <Tabs.TabPane
              tab={<span style={{ fontSize: '17px' }}>Repartease</span>}
              key="1"
            />
            <Tabs.TabPane
              tab={<span style={{ fontSize: '17px' }}>Advanced Electric Energy</span>}
              key="2"
            />
            <Tabs.TabPane
              tab={<span style={{ fontSize: '17px' }}>Contractor-Market</span>}
              key="3"
            />
            <Tabs.TabPane
              tab={<span style={{ fontSize: '17px' }}>This Website</span>}
              key="4"
            />
          </Tabs>
        </div>

      }

      <ReparteaseModal
        open={reparteasModalOpen}
        onCancel={() => setReparteaseModalOpen(false)}
      />
      <AdvancedElectricEnergyModal
        open={advancedElectricEnergyModalOpen}
        onCancel={() => setAdvancedElectricEnergyModalOpen(false)}
      />
    </div>
  )
}