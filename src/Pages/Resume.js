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

import {
    DesktopWindows,
    Laptop,
    School
} from '@material-ui/icons'

const { TabPane } = Tabs;

const Card = ({ title, info, content }) => (
    <div
        style={{
            borderBottom: '1px solid #d9d9d9',
            padding: '20px',
            margin: '0 0 20px 0'
        }}
    >
        <h2 style={{margin: 0, fontSize: '23px'}}>{title}</h2>
        {info ?
            <>
                {info.map(information => (
                    <h3 style={{margin: 0, fontSize: '20px', color: 'grey'}}>{information}</h3>
                ))}
            </>
            :
            null
        }
        <p style={{fontSize: '17px', margin: '10px 0 0 0'}}>
            {content}
        </p>
    </div>
)

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
                <Card
                    title="College Sturgeon Heights Collegiate"
                    info={["Digital Media Certificate", "Advanced Academic Diploma"]}
                    content="kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f"
                />

                <Card
                    title="Red River College"
                    info={["Business Information Technology (BIT) Program"]}
                    content="kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f"
                />
            </div>
    },
    {
        title: 'Work',
        dot: <DesktopWindows style={{ margin: '0 10px 0 0' }}/>,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Card
                    title="HippoCMMS"
                    info={["Co-Op Student",  "Software Developer"]}
                    content="kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f"
                />
            </div>
    },
    {
        title: 'Freelance',
        dot: <Laptop style={{ margin: '0 10px 0 0' }}/>,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Card
                    title="Clean Code Solutions"
                    info={["React Developer"]}
                    content="kladnfijadnfi jk ajufeif ewjfg ue fieq fieq fi eqjlf ewh gioeq fjeq if equf kqe fiueqwbfrjkeq fjeq ifn eqwjfgb eqojg aslkv eqhjfr fkhueq flja gkljae fgu eqfgoui eqqljf aeklu f"
                />
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
                        <div
                            style={{
                                padding: !screenSize.large ? null : '0 30px',
                            }}
                        >
                            {content}
                        </div>
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