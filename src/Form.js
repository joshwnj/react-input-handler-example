import React from 'react'
import ReactInputHandler from 'react-input-handler'

export default class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
    
    this.handleChange = ReactInputHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="user.fullname" onChange={this.handleChange} />
        </div>

        <div>
          <label>Biography</label>
          <textarea type="text" name="user.bio" onChange={this.handleChange} />
        </div>
        
        <div>
          <label className="check">
            <input type="checkbox" name="user.developer" value="yes" onChange={this.handleChange} />
            I endorse this hello world
          </label>
        </div>
       
        <button type="submit">Submit</button>
      </form>
    )
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    // Output: { user: { fullanme: "string", bio: "string", developer: true|false } }
  }
}
