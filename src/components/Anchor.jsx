import React, {Component} from 'react';
import Fontawesome from "react-fontawesome";

class Anchor extends Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {
      this.handleScroll =() => {
          this.anchor.style.opacity = document.documentElement.scrollTop / 500;
      };

      window.addEventListener("scroll", this.handleScroll)
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


// Переписать весь механизм с использованием setState!!!!!!!!!!!!


// constructor(props) {
//   super(props)

//   window.onscroll = () => {
//         this.anchor.style.opacity = document.body.scrollTop / 500;
//   }
// }
    

//   render() {
//     return (
//       <div className="anchor" ref={(div) => this.anchor = div}>
//         <a href="#top" className="anchor-link">
//           <Fontawesome name="angle-up" />
//         </a>
//       </div>
//     )
//   }