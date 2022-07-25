import React, {Component} from 'react'
import logo from './tmdb.png'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
        
         <div className="line"></div>
         
         <div className='footDesc'>
            <img src={logo} />
            <p>The "Night Watchers" app is my ReactJS projects inspired by some similar projects. The movie data come from TheMovieDB API. I hope you all enjoy it.</p>
         </div>
         <div className='footcopy'>
            <p>My Email: singhvaibhav924@gmail.com</p>
         </div>
      </div>
    )
  }
}
export default Footer