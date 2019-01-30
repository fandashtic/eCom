import React from 'react';
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { logout } from "actions/auth";

class HeaderNavBar extends React.Component {
    state = {
        userId: ''
    }

    logout = () => {
        this.props.logout();
        this.props.history.push("/");
    }

    componentDidMount() {
       /* if (localStorage.ecomJWT) {
            const payload = decode(localStorage.ecomJWT);
            console.log(payload)
            this.setState({
                userId: payload.id,
            })
        }*/
    }

    render() {
        const { userId } = this.state;
        return (
            <nav className="navbar navbar-transparent navbar-absolute navcolr p-0">
                <div className="container-fluid">
                   
                    <div className="collapse navbar-collapse">
                        <div style={{textAlign: "right", position: "relative", top: "15px"}}>
                        <Link to={"#"} onClick={this.logout} className="text-center p-0 pt-8" >
                        Logout
                        </Link>
                    </div>
                    <div style={{textAlign: "center"}}><strong>Fandashtic Ecommerce</strong></div>
                    </div>
                </div>
            </nav>
        )
    }
}

HeaderNavBar.propTypes = {
    logout: propTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(HeaderNavBar);