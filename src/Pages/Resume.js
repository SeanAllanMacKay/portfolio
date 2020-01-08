import React from 'react';

import { Icon } from 'antd'

import useScreenSize from '../hooks/useScreenSize'
import TimelineItem from '../Components/TimelineItem'

import { ReactComponent as ReactLogo } from '../images/logos/react-logo.svg';
import { ReactComponent as JavascriptLogo } from '../images/logos/javascript-logo.svg';
import { ReactComponent as HippoCMMSLogo } from '../images/logos/HippoCMMSLogo.svg';
import {
    AccountBalance,
    Business,
    HourglassEmpty,
    Cloud,
    School
} from '@material-ui/icons'

const Skill = ({ title, icon, description }) => (
    <div 
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '20px'
        }}
    >
        <div 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flex: 1, 
                margin: '0 20px 0 0',
            }}
        >
            {icon}
        </div>
        <div 
            style={{ 
                flex: 3 
            }}
        >
            <h4 
                style={{
                    margin: 0, 
                    fontSize: '1.75em', 
                }}
            >
                {title}
            </h4>
            <p 
                style={{
                    margin: 0
                }}
            >
                {description}
            </p>
        </div>
    </div>
)

const skills = [
    {
        title: 'React',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={ReactLogo} style={{fontSize: '6em', fill: 'green'}}/>,
    },
    {
        title: 'Javascript',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={JavascriptLogo} style={{fontSize: '6em'}} fill='#ffffff'/>
    },
]

const timelineItems = [
    {
        title: 'Graduated Highschool',
        dot: <Business />,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>
    },
    {
        title: 'Started College',
        dot: <AccountBalance />,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>
    },
    {
        title: 'Clean Code Solutions',
        dot: <Cloud />,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>
    },
    {
        title: 'HippoCMMS',
        dot: <Icon component={HippoCMMSLogo} style={{fontSize: '1.75em'}}/>,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>
    },
    {
        title: 'Graduated From College',
        dot: <School />,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>
    },
    {
        title: 'The Future',
        dot: <HourglassEmpty />,
        content: 
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0}}>College Sturgeon Heights Collegiate</h3>
                <h4 style={{margin: 0}}>Digital Media Certificate</h4>
                <h4 style={{margin: 0}}>Advanced Academic Diploma</h4>
            </div>,
        final: true
    },
  ]

export default () => {
  const [screenSize] = useScreenSize();

  return(
    <div 
        style={{
            padding: '30px',
            display: 'flex',
            flexDirection: screenSize.large ? 'column' : 'row',
            height: screenSize.large  && 'calc(100vh - 80px)',
            width: screenSize.large && '100vw',
            overflow: 'auto',
        }}
    >
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                flex: screenSize.large ? 3 : 1,
                maxHeight: screenSize.large && '60vh',
            }}
        >
            <h2 
                style={{
                    fontSize: '3em',
                    fontFamily: 'Lobster, Cursive',
                }}
            >
                Skills
            </h2>
            <div 
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'auto',
                    maxHeight: !screenSize.large && '83vh'
                }}
            >
                {skills.map(({ title, description, icon }) => (
                    <Skill
                        title={title}
                        description={description}
                        icon={icon}
                    />
                ))}
            </div>
        </div>
        <div 
            style={{
                flex: 1,
                marginTop: '30px',
            }}
        >
            <h2 
                style={{
                    fontSize: '3em',
                    fontFamily: 'Lobster, Cursive',
                }}
            >
                Timeline
            </h2>
            <div>
                {
                    timelineItems.map(({ title, dot, content, final }) => (
                        <TimelineItem
                            title={title}
                            dot={dot}
                            content={content}
                            final={final}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}