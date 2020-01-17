import React, { useState } from 'react';

import Project from '../../Components/Project'
import Link from '../../Components/Link'
import ReparteaseModal from '../../Components/ReparteaseModal'
import { Menu } from 'antd'

import portfolioImage from '../../images/Portfolio/portfolio.jpg'
import contractorImage from '../../images/Portfolio/contractor.jpg'
import electricImage from '../../images/Portfolio/electric.jpg'
import reparteaseImage from '../../images/Portfolio/repartease.jpg'

import { ReactComponent as GithubLogo } from '../../images/logos/github-logo.svg';
import { ReactComponent as wwwLogo } from '../../images/logos/www.svg';
import { ReactComponent as phoneIcon } from '../../images/logos/smartphone.svg';

const { Item } = Menu;

export default () => {
  const [active, setActive] = useState('0')
  const [reparteasModalOpen, setReparteaseModalOpen] = useState(false)

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
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
              <Link
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
            description='Etiam sit amet nisl purus in mollis nunc sed. Semper viverra nam libero justo laoreet sit amet. Erat pellentesque adipiscing commodo elit at imperdiet dui. Tincidunt id aliquet risus feugiat. Risus quis varius quam quisque id diam vel. Turpis egestas sed tempus urna et. Sapien et ligula ullamcorper malesuada. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Nibh nisl condimentum id venenatis a condimentum vitae. Eget velit aliquet sagittis id consectetur purus ut faucibus. Eget sit amet tellus cras adipiscing enim eu.'
            stack={{
              Frontend: 'React',
              Server: 'Node/Express',
              Hosting: 'Heroku',
            }}
            libraries={[
              <a href='https://nodemailer.com/about/' target="_blank" rel="noopener noreferrer">NodeMailer</a>,
              <a href='https://github.com/final-form/final-form' target="_blank" rel="noopener noreferrer">Final Form</a>,
              <a href='https://storybook.js.org/' target="_blank" rel="noopener noreferrer">Storybook</a>
            ]}
            links={[
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
            description='Non consectetur a erat nam at lectus urna duis. Et tortor consequat id porta nibh venenatis cras sed felis. Mauris vitae ultricies leo integer malesuada nunc. Interdum velit laoreet id donec ultrices tincidunt arcu. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eu turpis egestas pretium aenean pharetra magna ac. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Pellentesque nec nam aliquam sem et tortor. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Velit euismod in pellentesque massa placerat duis ultricies.'
            stack={{
              Frontend: 'React',
              Server: 'Node/Express',
              Database: 'MongoDB',
              Hosting: 'Heroku',
              CDN: 'S3'
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
            description='Nisi lacus sed viverra tellus in hac. Magna sit amet purus gravida quis blandit turpis. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Egestas sed sed risus pretium quam. Lorem mollis aliquam ut porttitor leo a. Ipsum suspendisse ultrices gravida dictum fusce. Pulvinar mattis nunc sed blandit libero volutpat. Mus mauris vitae ultricies leo integer. Lorem mollis aliquam ut porttitor leo. Scelerisque viverra mauris in aliquam sem fringilla. Tellus mauris a diam maecenas sed enim ut. Morbi leo urna molestie at elementum eu facilisis. Amet purus gravida quis blandit turpis cursus in hac habitasse. Urna id volutpat lacus laoreet non curabitur.'
            stack={{
              Frontend: 'React',
              Server: 'Node/Express',
              Hosting: 'Heroku',
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

      <Menu
        defaultSelectedKeys={[active]}
        mode="inline"
        style={{
          width: '250px',
        }}
        onSelect={({ key }) => setActive(key)}
      >
        <Item
          key='0'
        >
          <span>React-Wireframe</span>
        </Item>
        <Item
          key='1'
        >
          <span>Repartease</span>
        </Item>
        <Item
          key='2'
        >
          <span>Advanced Electric Energy</span>
        </Item>
        <Item
          key='3'
        >
          <span>Contractor-Market</span>
        </Item>
        <Item
          key='4'
        >
          <span>This Website</span>
        </Item>
      </Menu>
      <ReparteaseModal
        open={reparteasModalOpen}
        onCancel={() => setReparteaseModalOpen(false)}
      />
    </div>
  )
}