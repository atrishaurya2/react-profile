//navbar styling was taken from bootstrap
import React from 'react'

class navbar extends React.Component{
  scrollToProjects = () => {
    window.scrollTo({
      top:1260,
      left:0,
      behavior: "smooth"
    })
  }


  scrollToAbout = () => {
    window.scrollTo({
      top:650,
      left:0,
      behavior: "smooth"
    })
  }

  scrollToContact = () => {
    window.scrollTo({
      top:1780,
      left:0,
      behavior: "smooth"
    })
  }

  scrollToHome = () => {
    window.scrollTo({
      top:30,
      left:0,
      behavior: "smooth"
    })
  }

    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <button className="nav-button"  onClick={this.scrollToHome} >Home <span className="sr-only">(current)</span></button>
      </li>
      <li className="nav-item">
        <button className="nav-button"  onClick={this.scrollToAbout}>About Me</button>
      </li>
      <li className="nav-item">
        <button className="nav-button"   onClick={this.scrollToProjects} >Projects</button>
      </li>
      <li className="nav-item">
        <button className="nav-button"  onClick={this.scrollToContact}>Contact</button>
      </li>
    </ul>
  </div>
</nav>
      </div>  
      )
    }
}

export default navbar