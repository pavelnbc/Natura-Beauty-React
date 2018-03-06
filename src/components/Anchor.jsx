<<<<<<< HEAD
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

=======
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

>>>>>>> 9fcd629947ad3b1c438cdb2b1c47681c660f8afa
export default Anchor