import React from 'react';

import { Icon, Tabs } from 'antd'

import useScreenSize from '../hooks/useScreenSize'
import TimelineItem from '../Components/TimelineItem'

import { ReactComponent as ReactLogo } from '../images/logos/react-logo.svg';
import { ReactComponent as JavascriptLogo } from '../images/logos/javascript-logo.svg';
import { ReactComponent as RubyOnRailsLogo } from '../images/logos/ruby-on-rails.svg';
import { ReactComponent as CSharpLogo } from '../images/logos/c-sharp.svg';
import { ReactComponent as NodeLogo } from '../images/logos/nodejs.svg';
import { ReactComponent as MongoLogo } from '../images/logos/mongodb.svg';
import { ReactComponent as CssLogo } from '../images/logos/css.svg';

import { ReactComponent as HippoCMMSLogo } from '../images/logos/HippoCMMSLogo.svg';

import {
    AccountBalance,
    Edit,
    DesktopWindows,
    Laptop,
    School
} from '@material-ui/icons'

const { TabPane } = Tabs;

const skills = [
    {
        title: 'Javascript',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={JavascriptLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'React',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={ReactLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'Ruby / Rails',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={RubyOnRailsLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'C# / .Net',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={CSharpLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'NodeJS',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={NodeLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'MongoDB',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={MongoLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'CSS / Sass / Less',
        description: "Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te. Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an. Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,an assueverit contentiones est.",
        icon: <Icon component={CssLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
]

const timelineItems = [
    {
        title: 'School',
        dot: <School style={{ margin: '0 10px 0 0' }} />,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0, fontSize: '22px'}}>Digital Media Certificate</h3>
                <h3 style={{margin: 0, fontSize: '22px'}}>Advanced Academic Diploma</h3>
                <p style={{fontSize: '17px'}}>kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f</p>
            </div>
    },
    {
        title: 'Work',
        dot: <DesktopWindows style={{ margin: '0 10px 0 0' }}/>,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h3 style={{margin: 0, fontSize: '22px'}}>Freelancer</h3>
                <p style={{fontSize: '17px'}}>kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f</p>
            </div>
    },
    {
        title: 'Freelance',
        dot: <Laptop style={{ margin: '0 10px 0 0' }}/>,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <a href='https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP' target="_blank" rel="noopener noreferrer"><h3 style={{margin: 0, fontSize: '22px'}}>BIT Program</h3></a>
                <p style={{fontSize: '17px'}}>kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f</p>
            </div>
    },
  ]

export default () => {
  const [screenSize] = useScreenSize();

  return(
    <div
        style={{
            display: 'flex',
            flexDirection: screenSize.large ? 'column' : 'row',
            height: screenSize.large  && 'calc(100vh - 80px)',
            width: screenSize.large && '100vw',
            overflow: 'auto',
        }}
    >

        <div
            style={{
                width: !screenSize.large ? 'calc(100% - 400px)' : '100%',
                padding: !screenSize.large ? '30px 60px 30px 30px' : null,
            }}
        >
            <h2
                style={{
                    fontSize: '4em',
                    fontFamily: 'Lobster, Cursive',
                    padding: !screenSize.large ? null : '10px 0 0 30px',
                    margin: 0
                }}
            >
                Experience
            </h2>
            <Tabs
                defaultActiveKey="0"
            >
                {timelineItems.map(({ title, dot, content }, index) => (
                    <TabPane
                        tab={
                            <span
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '20px'
                                }}
                            >
                                {dot}
                                {title}
                            </span>
                        }
                        key={index}
                    >
                        {content}
                    </TabPane>
                ))}
            </Tabs>
        </div>

        <div
            style={{
                minWidth: '400px',
                maxWidth: '400px',
                padding: !screenSize.large ? '30px 60px 30px 30px' : '30px',
            }}
        >
            <h2
                style={{
                    fontSize: '4em',
                    fontFamily: 'Lobster, Cursive',
                    margin: '0 0 10px 0'
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
                {skills.map(({ title, description, icon }, index) => (
                    <TimelineItem
                        title={title}
                        dot={icon}
                        content={description}
                        final={index === skills.length - 1}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}