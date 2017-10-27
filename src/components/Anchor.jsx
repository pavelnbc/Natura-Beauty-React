import React, {Component} from 'react';
import Fontawesome from "react-fontawesome";

class Anchor extends Component {
  handleScroll(){
       this.anchor.style.opacity = document.documentElement.scrollTop / 500;
  };

  componentDidMount() {
      window.addEventListener("scroll", this.handleScroll.bind(this))
  }

  render() {
    return (
      <div className="anchor" ref={(div) => { this.anchor = div }}>
        <a href="#top" className="anchor-link">
          <Fontawesome name="angle-up" size="3x"/>
        </a>
      </div>
    )
  }
}

export default Anchor 
