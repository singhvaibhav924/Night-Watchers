import React, {Component} from 'react'

class Input extends Component{
  render(){
    return (
      <div className='inputbtn'>
        <div className="input-group mb-3">
          <input className="input_type form-control"
            type="text" 
            placeholder="Enter Movie Title"
            onChange={(e)=>this.props.change(e)}/>
        </div>
      </div>
    )
  }
}
export default Input