
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                    <div style={{padding: '20px'}}>
                    <center><h1><u>Team Members</u></h1></center>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <div>
                            <img src="/assets/nitin.jpg"
                                style={{
                                    height: '250px',
                                    width: '250px',
                                }} />
                        </div>
                        <div style={{paddingLeft: '20px', width: '800px'}}>
                        <div><b><u>Designation:</u></b> Consultant</div>
                        <div>
                            Nitin is working as a Sr. Consultant with Xebia and has over 7+ years of 
                            experience . He is passionate about learning new technologies 
                            and has also mentored many teams and individual in the field of web development.
                        </div>
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}


About.defaultProps = {

}

About.propTypes = {

}