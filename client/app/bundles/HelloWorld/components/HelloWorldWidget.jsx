//HelloWorldWidget is an arbitrary name for any "dumb" component
import React, { PropTypes } from 'react';


export default class HelloWorld extends React.Component {
  static propTypes = {
    updateName: PropTypes.fun.isRequired
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

    render() {
      const { name } = this.props;
      return (
        <div className="container">
          <h3>
            Hello, {name}!
          </h3>
          <hr />
          <form className="form-horizontal">
            <label>
              Say hello to:
            </label>
            <input
              type="text"
              value={name}
              onChange={e => this.handleChange(e)}
            />
          </form>
        </div>
      );
    }
  }
