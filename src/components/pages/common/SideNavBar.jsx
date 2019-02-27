import React from 'react';
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { logout } from "actions/auth";

class SideNavBar extends React.Component {
    state = {
        loginView: true,
        menuToggle: false,
        navbarToggle: false,
        eventToggle: false,
        loggedUserName: '',
        loggedUserID: '',
        userId: '',
        userType:'',
        navOpen: false,
    }

      handleGlobalClick = (e) => {
        if(e.target.id !== 'eventToggle' ) {
            this.setState({eventToggle: false})
        } 
        if(e.target.id !== 'megaMenu') {
            this.setState({ menuToggle: false })
        }
        if(e.target.id !== 'nav_toggle_id') {
          this.setState({navbarToggle: false}); 
        }
    }

    handleMenuToggle = (e) => {
        e.preventDefault()
        this.setState({
            menuToggle: !this.state.menuToggle,
            navbarToggle: true
        })
    }
     handleEventToggle = (e) => {
        e.preventDefault()
        this.setState({
            eventToggle: !this.state.eventToggle,
            navbarToggle: true
        })
    }

    handleNavbarToggle = (e) => {
        e.preventDefault()
        this.setState({
            navbarToggle: !this.state.navbarToggle
        })
    }

    render() {
        return (
			<div class="default-sidebar">
                    <nav class="side-navbar box-scroll sidebar-scroll" tabindex="1" style={{overFlow: "hidden",outline: "none"}}>
                        <ul class="list-unstyled">
                            <li>
                                <Link to='/dashboard' aria-expanded="false" data-toggle="collapse" class="collapsed">
                                   <i class="la la-columns"></i>
                                   <span>Dashboard</span>
                                </Link>
                            </li>
                            <li class="active"><Link to ='#' aria-expanded="false" data-toggle="collapse" class="collapsed"><i class="la la-puzzle-piece"></i><span>Reports</span></Link>
                                <ul id="dropdown-app" class="list-unstyled pt-0 collapse">
                                    <li><Link to='/dailySalesReport' class="active">Daily Sales Report</Link></li>
                                    <li><Link to='/dailyStockReport'>Daily Stock Report</Link></li>
                                    <li><Link to='/vanLoadingSlip'>Van Loading Slip</Link></li>
                                    <li><Link to='/salesTargetActual'>Sales Target vs Actual</Link></li>
                                    <li><Link to='/salesForecast'>Sales Forecast</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
        )
    }
}

export default SideNavBar;