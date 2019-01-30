import React from 'react';
import { connect } from "react-redux";
import LoginForm from 'components/forms/auth/login/LoginForm';
import { login } from 'actions/auth';

class LoginPage extends React.Component {

	submit = (data) => {
        return this.props.login(data);
    }
    
	render() {
		return (
            <div className="main-panel main-panel-1">
	            <div className="content">
	                <div className="container-fluid">
	                    <div className="row">
	                    	<div className="col-md-4">
	                    	</div>
	                        <div className="col-md-4">
	                            <div className="card">
	                                <div className="card-content">
	                                    <h4 className="text-center">Retail Login</h4>
	                                    <LoginForm submit={this.submit}/>
	                                </div>
	                            </div>
	                    	</div>
	                	</div>
	            	</div>
	        	</div>
	    	</div>
	    )
	}
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (data) => dispatch(login(data)),
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)