import React, { useState } from "react";

import useScreenSize from "../../hooks/useScreenSize";

import Project from "../../Components/Project";
import Link from "../../Components/Link";
import AdvancedElectricEnergyModal from "../../Components/AdvancedElectricEnergyModal";
import { Menu, Tabs } from "antd";

import portfolioImage from "../../images/Portfolio/portfolio.jpg";
import electricImage from "../../images/Portfolio/electric.jpg";

import { ReactComponent as GithubLogo } from "../../images/logos/github-logo.svg";
import { ReactComponent as wwwLogo } from "../../images/logos/www.svg";

const { Item } = Menu;

export default () => {
  const [screenSize] = useScreenSize();
  const [active, setActive] = useState("0");
  const [
    advancedElectricEnergyModalOpen,
    setAdvancedElectricEnergyModalOpen,
  ] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          flex: 1,
          overflow: "auto",
        }}
      >
        {active === "0" && (
          <Project
            title="Moonvesting"
            image={portfolioImage}
            description={
              <>
                <p>
                  This is a small webapp I created because I hate Yahoo finance.
                  It has user accounts, commenting, following, and all of the
                  other social-y type stuff. It's hosted for free on Heroku, so
                  if it's slow to initially load, that's why.
                </p>

                <p>
                  Built on the MERN stack, it's pretty in line with the other
                  apps on my resume.
                </p>
              </>
            }
            stack={{
              Frontend: (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              ),
              Server: (
                <>
                  <a
                    href="https://nodejs.org/en/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Node
                  </a>
                  /
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Express
                  </a>
                </>
              ),
              Database: (
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB
                </a>
              ),
            }}
            links={[
              <Link
                href="https://moonvesting.herokuapp.com/login"
                icon={wwwLogo}
              />,
            ]}
          />
        )}

        {active === "1" && (
          <Project
            title="Advanced Electric Energy"
            image={electricImage}
            description={
              <>
                <p>
                  This is one of my only side-projects that is currently in
                  production, mostly because I'm not paying for hosting. It's a
                  simple site with a tiny server for emailing. I'm currently in
                  the process of giving the entire site a pretty substantial
                  overhaul.
                </p>
              </>
            }
            stack={{
              Frontend: (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              ),
              Server: (
                <>
                  <a
                    href="https://nodejs.org/en/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Node
                  </a>
                  /
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Express
                  </a>
                </>
              ),
              Database: (
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB
                </a>
              ),
              Hosting: (
                <a
                  href="https://devcenter.heroku.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heroku
                </a>
              ),
            }}
            libraries={[
              <a
                href="https://nodemailer.com/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NodeMailer
              </a>,
              <a
                href="https://github.com/final-form/final-form"
                target="_blank"
                rel="noopener noreferrer"
              >
                Final Form
              </a>,
              <a
                href="https://storybook.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Storybook
              </a>,
            ]}
            links={[
              //!screenSize.large && <Link
              //onClick={() => setAdvancedElectricEnergyModalOpen(true)}
              //icon={phoneIcon}
              ///>,
              <Link
                href="http://www.advancedelectricenergy.ca/"
                icon={wwwLogo}
              />,
            ]}
          />
        )}

        {active === "4" && (
          <Project
            title="This Website"
            image={portfolioImage}
            description={
              <>
                <p>
                  Whoa, pretty meta. This is a site I created to show off the
                  websites I create, so why not show it off too? This was made
                  early in my career, so try not to be too harsh.
                </p>

                <p>
                  It's almost entirely frontend, except for the contact page
                  emailing functionality. You can click around and see all the
                  little stuff throughout.
                </p>
              </>
            }
            stack={{
              Frontend: (
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React
                </a>
              ),
              Server: (
                <>
                  <a
                    href="https://nodejs.org/en/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Node
                  </a>
                  /
                  <a
                    href="https://expressjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Express
                  </a>
                </>
              ),
              Database: (
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MongoDB
                </a>
              ),
            }}
            links={[
              <Link
                href="https://github.com/SeanAllanMacKay/portfolio"
                icon={GithubLogo}
              />,
            ]}
          />
        )}
      </div>

      {!screenSize.large ? (
        <Menu
          defaultSelectedKeys={[active]}
          mode="inline"
          style={{
            width: "250px",
          }}
          onSelect={({ key }) => setActive(key)}
        >
          <Item key="0">
            <span style={{ fontSize: "17px" }}>Moonvesting</span>
          </Item>
          <Item key="1">
            <span style={{ fontSize: "17px" }}>Advanced Electric Energy</span>
          </Item>
          <Item key="4">
            <span style={{ fontSize: "17px" }}>This Website</span>
          </Item>
        </Menu>
      ) : (
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "50px",
            zIndex: "100",
            width: "100vw",
            backgroundColor: "white",
            height: "47px",
            overflow: "hidden",
          }}
        >
          <Tabs
            defaultSelectedKeys={[active]}
            style={{
              width: "100%",
              margin: 0,
            }}
            onChange={(key) => setActive(key)}
          >
            <Tabs.TabPane
              tab={<span style={{ fontSize: "17px" }}>Moonvesting</span>}
              key="0"
            />
            <Tabs.TabPane
              tab={
                <span style={{ fontSize: "17px" }}>
                  Advanced Electric Energy
                </span>
              }
              key="1"
            />
            <Tabs.TabPane
              tab={<span style={{ fontSize: "17px" }}>This Website</span>}
              key="4"
            />
          </Tabs>
        </div>
      )}

      <AdvancedElectricEnergyModal
        open={advancedElectricEnergyModalOpen}
        onCancel={() => setAdvancedElectricEnergyModalOpen(false)}
      />
    </div>
  );
};
