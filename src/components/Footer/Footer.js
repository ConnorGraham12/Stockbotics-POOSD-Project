import { Component } from "react";
import "./Footer.css"


class Footer extends Component {
    render () {
        return(
            <footer className="FooterItems">
                <h4 className="footer-head">Contact Us</h4>
                <a href="https://github.com/ConnorGraham12/POOSD-Project"><i className="fab fa-github fa-2x"></i></a>
            </footer>
        )
    }
}

export default Footer