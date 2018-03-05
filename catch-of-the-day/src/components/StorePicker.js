import React, { Fragment } from "react"
import { getFunName } from "../helpers"

class StorePicker extends React.Component {
    myInput = React.createRef()

    goToStore = (event) => {
        // stop form from submitting
        event.preventDefault()
        // get the text from that input
        const storeName = this.myInput.value.value
        // change the page to store
        this.props.history.push(`/store/${storeName}`)
    }
    componentDidMount() {

    }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please enter a store</h2>

        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker
