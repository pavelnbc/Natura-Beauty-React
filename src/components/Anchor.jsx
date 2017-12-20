import React, {Component} from 'react';
import Fontawesome from "react-fontawesome";

class Anchor extends Component {
  constructor(props) {
      super(props);

      this.handleScroll = this.handleScroll.bind(this);
      this.handleVisibility = this.handleVisibility
  }

  handleVisibility(){
    if (this.anchor) {
      this.anchor.style.opacity = document.documentElement.scrollTop / 500 || document.body.scrollTop / 500;
    }
  };

  handleScroll() {
      let scrollID = setInterval(() => {
          document.documentElement.scrollTop -= 15;
          document.body.scrollTop -= 15;

          console.log(document.documentElement.scrollTop);
          console.log(document.body.scrollTop);
          console.log(window.pageYOffset);

          if(!window.pageYOffset) {
              clearInterval(scrollID);
          }
      }, 1)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleVisibility.bind(this))
  }

  render() {
    return (
      <div className="anchor" ref={(div) => { this.anchor = div }} onClick={this.handleScroll}>
        <div className="anchor-link">
          <Fontawesome name="angle-up" size="3x"/>
        </div>
      </div>
    )
  }
}

export default Anchor 
