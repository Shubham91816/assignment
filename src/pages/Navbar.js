import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <img
          src="./Sidebar Icon.png"
          alt=""
          width="40px"
          height="40px"
          style={{ position: 'absolute', right: '10px', top: '20px' }}
        />
        <div className="navbarlogo">
          <img src="./Box 3.png" alt="" width="42.67px" height="42.67px" />
          <span>Catalix</span>
        </div>
        <div className="navbarcontent"  style={{  backgroundColor:'#539BBB' }}>
        

          <img
            src="./Home.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px'  }}
          />
          <span>Home</span>
        </div>
        <div className="navbarcontent">
          <img
            src="./Timer.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Activities</span>
        </div>
        <div className="navbarcontent">
          <img
            src="./analytics.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Analytics</span>
        </div>
        <div className="navbarcontent">
          <img
            src="./Rocket.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Transformation</span>
        </div>
        <div className="navbarcontent">
          <img
            src="./Layers.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Library</span>
        </div>
        <div className="border"></div>
        <div className="navbarcontent">
          <img
            src="./Settings.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Settings</span>
        </div>
        <div className="navbarcontent">
          <img
            src="./Logout.png"
            alt=""
            width="21.57px"
            height="20.67px"
            style={{ marginLeft: '10px' }}
          />
          <span>Logout</span>
        </div>
      </div>
      <div className="frame1">
        <div className="searchbar">
          <img src="./search.png" alt="" width="29.71px" height="29.71px" />
          <input
            type="text"
            id="name"
            name="name"
            style={{ border: 'none', outline: 'none' }}
            placeholder="Search for profile, setting, artifact etc.."
          />
          <img src="./trailing-icon.png" alt="" width="29.71px" height="29.71px" />
        </div>
        <p className="heading">Catalix Transformation Guide</p>
        <p className="subheading">
          Get Catalix up to date or start your transformation by following the guide below.
        </p>
        <div className="content">
          <div className="button">2/6</div>
          <div className="contenttext">
            <p>Build your development value</p>
            <p style={{ textAlign: 'center', marginTop: '-16px' }}>stream map</p>
          </div>
          <div className="button2">Start Building</div>
          <div className="dot">......</div>
        </div>
      </div>
      <div className="frame2">
        <div className="icon">
          <div className="iconbell">
            <img src="./Bell.png" alt="" width="21.29px" height="21.29px" />
          </div>
          <div className="iconellipse">
            <img src="./chat.png" alt="" width="21.29px" height="21.29px" />
          </div>
        </div>
        <div className="frame2content">
          <div className="frame2contenttext">
            <p className="heading">Get ready to transform</p>
            <p className="subheading">
              Here’s a video to get started. As your transformation progresses,
              you’ll get fresh tips and insights here.
            </p>
          </div>
          <div className="background">
            <img
              src="./Play button.png"
              alt=""
              width="82.82px"
              height="36.18px"
              style={{ position: 'absolute', bottom: '20px', left: '20px' }}
            />
            <img
              src="./Progress indicator (1).png"
              alt=""
              width="356.4px"
              height="7.64px"
              style={{ position: 'absolute', bottom: '0px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
