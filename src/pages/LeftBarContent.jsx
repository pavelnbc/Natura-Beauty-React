import React, {Component} from 'react';

import classNames from 'classnames';

class LeftBarContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldBarUpdate: true
    };

    this.handleBarVisibility = this.handleBarVisibility.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!nextState.shouldBarUpdate) {
        nextState.shouldBarUpdate = true;
        return false;
    }

    return true;
  }

  handleBarVisibility() {
    this.setState({
        shouldBarUpdate: false
    });
  }

  render() {
      let leftBarContentClass = classNames({
          "content-is-hidden": true,
          "content-is-visible": this.props.isContentVisible
      });

      return (
        <aside className={leftBarContentClass} onClick={this.handleBarVisibility}>
              {this.props.children}
          </aside>
      )
  }
}

export default LeftBarContent
