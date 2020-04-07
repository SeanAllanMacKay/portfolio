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
        description: "A scripting or programming language that allows you to implement complex features on web pages. In the last decade, it has gone from one of the three languages  of the internet (the others being HTML and CSS) to a full blown ecosystem that is the backbone of modern web development",
        icon: <Icon component={JavascriptLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'React',
        description: "A Javascript library (not a framework, but kind of a framework) that allows for dynamic webpages and more natural UI/UX. By far the most popular of the frontend JS libraries/frameworks. Used in most of my personal projects, and extensively in my work experience",
        icon: <Icon component={ReactLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'Ruby / Rails',
        description: "A super quick and easy language for prototyping and CRUD applications. It was created to take a bunch of the setup out of the development of web applications. Not my first choice, but it's hard to beat the speed of programming that this allows. Used in the development of my web development cources in school",
        icon: <Icon component={RubyOnRailsLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'C# / .Net',
        description: 'The tried and true "Microsoft Java". A strongly-typed object-oriented powerhouse that has been around since the year 2000. Most of my experience with C# has been through school assignments using the MVC framework of .NET. I love how secure this language is, but is not as rapid as I would like',
        icon: <Icon component={CSharpLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'NodeJS',
        description: "People love Javascript so much, they put it on the backend. A single-threaded (mostly) server-side language built on C++ and the Chromium engine. I've used this extensively on every personal project I've ever undertaken. It allows for easily implemented real-time socket communication",
        icon: <Icon component={NodeLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>,
    },
    {
        title: 'MongoDB',
        description: 'A NoSQL database that is based on JSON documents. Guess what the "J" in JSON stands for? Yup, Javascript. I like using what is known as the MERN stack. Mongo, Express, React, and Node because it relies on a single underlying language. SQL is great, but I personally prefer NoSQL most of the time',
        icon: <Icon component={MongoLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
    {
        title: 'CSS / SASS / LESS',
        description: "I chose to group these as they all handle styling. CSS is the original styling language, and what SASS and LESS are based off of. SASS and LESS are style pre-processors that allow to do things like add variables to your styles. I personally prefer React's inline styling, but it is also based on CSS",
        icon: <Icon component={CssLogo} style={{fontSize: '2.5em', color: '#A5037A'}}/>
    },
]

const timelineItems = [
    {
        title: 'Work',
        dot: <DesktopWindows style={{ margin: '0 10px 0 0' }}/>,
        content:
            <>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Card
                        title="HippoCMMS"
                        info={["Co-Op Student",  "Software Developer"]}
                        content="I was brought on as a student for my CO-OP term of school and was subsequently hired in a developer position afterward. I mainly work on the frontend team, implementing designs and
                                working with the backend team to develop a RESTful API."
                    />
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <Card
                        title="Clean Code Solutions"
                        info={["React Developer"]}
                        content="I worked in a part-time capacity creating re-usable React components for small data management applications. The work was almost exclusively on the frontend side, but occasionally
                                spilled over into QA testing and bug fixes/"
                    />
                </div>
            </>
    },
    //{
    //    title: 'Freelance',
    //    dot: <Laptop style={{ margin: '0 10px 0 0' }}/>,
    //    content:
    //        <div style={{display: 'flex', flexDirection: 'column'}}>
    //            <Card
    //                title="Advanced Electric Energy"
    //                content="This "
    //            />
    //        </div>
    //},
    {
        title: 'School',
        dot: <School style={{ margin: '0 10px 0 0' }} />,
        content:
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Card
                    title="College Sturgeon Heights Collegiate"
                    info={["Digital Media Certificate", "Advanced Academic Diploma"]}
                    content="I heavily focused on media arts such as graphic design throughout my four years of highschool. I took programming courses as well, but only started taking web development seriously afterward."
                />

                <Card
                    title="Red River College"
                    info={["Business Information Technology (BIT) Program"]}
                    content="I took one semester of Computer Science courses at the University of Winnipeg before making the jump to Red River's BIT program at the recommendation of my brother, a UofW computer science grad.
                            The main draw was Red River's focus on practical experience, but I have found that there is also strong emphasis put on theory and architecture."
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