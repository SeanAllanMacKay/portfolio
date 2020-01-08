import React from 'react';
import useScreenSize from '../hooks/useScreenSize'

import TweenOne from 'rc-tween-one';

import laptop from '../images/about/laptop.png'

export default () => {
  const [screenSize] = useScreenSize();

  return(
    <div 
      style={{
        display: 'flex', 
        flexDirection: 'row', 
        height: '100vh'
      }}
    >
      <div 
        style={{
          padding: '30px', 
          flex: 1,
          overflow: 'auto'
        }}
      >
        <TweenOne
            animation={{
              delay: 350,
              y: 0,
              opacity: 1
            }}
            paused={false}
            style={{
              transform: 'translateY(-50px)', 
              opacity: 0
            }}
        >
          <h1 
            style={{
              margin: 0, 
              lineHeight: '80%',
              color: 'black', 
              fontFamily: 'Lobster, Cursive', 
              fontSize: '6em',
            }}
          >
            Sean MacKay
          </h1>
        </TweenOne>

        <TweenOne
            animation={{
              delay: 500,
              x: 0,
              opacity: 1
            }}
            paused={false}
            style={{
              transform: 'translateX(-50px)', 
              opacity: 0
            }}
        >
          <h2 
            style={{
              fontFamily: 'Raleway, Sans-Serif', 
              marginLeft:'60px',
              lineHeight: '110%',
              fontSize: '3em', 
              color: 'black', 
            }}
          >
            WEB DEVELOPER
          </h2>
        </TweenOne>

        <TweenOne
            animation={{
              delay: 1000,
              opacity: 1
            }}
            paused={false}
            style={{
              opacity: 0,
            }}
        >
          <div 
            style={{
              marginTop: '50px',
            }}
          >
            <p 
              style={{
                fontFamily: 'Roboto, Sans-Serif', 
                fontSize: '1.65em', 
                marginBottom: '50px'
              }}
            >
              Lorem ipsum dolor sit amet, no semper complectitur eam. Est ferri dicant salutatus te.
              Possim option eruditi no per, mei homero tractatos ne, sed ipsum delectus accusata an.
              Eu sit illud urbanitas, vix lobortis elaboraret referrentur ei. Ea mel mentitum deleniti,
              an assueverit contentiones est.
            </p>
            <p 
              style={{
                fontFamily: 'Roboto, Sans-Serif', 
                fontSize: '1.65em', 
                marginBottom: '50px'
              }}
            >
              Sea vituperata signiferumque id, et dico cibo sed. Wisi legimus no mel. Veri definitiones
              has in, eros suscipiantur vel no. Ubique civibus periculis te mei, duo an timeam omittantur,
              ea usu habeo necessitatibus. An has diam summo scribentur, at facete bonorum deserunt his,
              dico lobortis corrumpit mel ex.
            </p>
          </div>
        </TweenOne>
      </div>

      {
        !screenSize.large &&

          <TweenOne
            animation={{
              delay: 650,
              x: 0,
              duration: 600,
              opacity: 1
            }}
            paused={false}
            style={{
              transform: 'translateX(50vw)', 
              opacity: 0,
              flex: 1.15,
            }}
          >
            <div 
              style={{
                width: '100%',
                height: '100%',
                background: `url(${laptop})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'none',
                backgroundSize: 'cover',
              }}
            />
          </TweenOne>
      }
    </div>
  )
}