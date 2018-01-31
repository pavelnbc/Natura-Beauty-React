import React, {Component} from 'react';

import classNames from 'classnames';

class LeftBarContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBarVisible: true
    };

    this.handleBarVisibility = this.handleBarVisibility.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(!nextState.isBarVisible) {
        nextState.isBarVisible = true;
        return false;
    }

    return true;
  }

  handleBarVisibility() {
    this.setState({
        isBarVisible: false
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

// function LeftBarContent({ children, isContentVisible }) {
//   let leftBarContentClass = classNames({
//     "content-is-hidden": true,
//     "content-is-visible": isContentVisible
//   });
//
//   return (
//     <aside className={leftBarContentClass}>
//         {children}
//     </aside>
//   )
// }

export default LeftBarContent
