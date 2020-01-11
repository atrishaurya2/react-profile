import React from 'react'

import RC from '../images/rc_aero.jpg'
import LF from '../images/line-follower.jpg'
import Quad from '../images/quadcopter.jpg'
import roboArm from '../images/roboArm.jpg'

export default class projectList extends React.Component{

    render(){
        return(
            <div id='projects'>
          <h3>My Projects</h3>
          <ul>
            <li className="projectList">
              <h6>Quadcopter</h6>
              <p>A drone with 4 propellors that you can control</p>
              <img src={Quad} className='project_images' alt='quad'></img>
            </li>
            <li className="projectList">
              <h6>RC Aeroplane</h6>
              <p>An Aeroplane that you can fly with your controller </p>
              <img src={RC} className='project_images' alt='aero '></img>
            </li>
            <li className="projectList">
              <h6>line follower robot</h6>
              <p>A simple robot that can follow any line drawn by you</p>
              <img src={LF} className='project_images' alt='line follower '></img> 
            </li>
            <li className="projectList">
              <h6>Robotic Arm</h6>
              <p>A 3d printed arm that can be controlled using potentiometers</p>
              <img src={roboArm} className='project_images' alt='arm '></img> 
            </li>
          </ul>
        </div>
        )
    }
}