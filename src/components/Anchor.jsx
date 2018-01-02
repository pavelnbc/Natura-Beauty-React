import React, {Component} from 'react';
import Fontawesome from "react-fontawesome";

class Anchor extends Component {
  constructor(props) {
      super(props);

      this.handleScroll = this.handleScroll.bind(this);
      this.handleVisibility = this.handleVisibility.bind(this)
  }

  handleVisibility(){
      this.anchor.style.opacity = document.documentElement.scrollTop / 500 || document.body.scrollTop / 500;
  };

  handleScroll() {
      let scrollID = setInterval(() => {
          document.documentElement.scrollTop -= 15;
          document.body.scrollTop -= 15;

          if(!window.pageYOffset) clearInterval(scrollID);
      })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleVisibility);
  }

  render() {
    return (
      <div className="anchor" ref={(div) => { this.anchor = div }} onClick={this.handleScroll}>
        <Fontawesome name="angle-up" size="3x"/>
      </div>
    )
  }
}

export default Anchor 
