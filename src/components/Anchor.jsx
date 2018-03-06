import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Anchor extends Component {
    constructor(props) {
        super(props);

        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        requestAnimationFrame(function animate() {
            document.documentElement.scrollTop -= 25;
            document.body.scrollTop -= 25;

            if(window.pageYOffset) {
                requestAnimationFrame(animate)
            }
        })
    }

    handleVisibility() {
        this.anchor.style.opacity = document.body.scrollTop / 500 || document.documentElement.scrollTop / 500;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleVisibility)
    }

    render() {
        return(
            <div className="anchor" ref={(div) => this.anchor = div} onClick={this.handleScroll}>
                <FontAwesome name="chevron-up" size="2x"/>.
            </div>
        )
    }
}

export default Anchor