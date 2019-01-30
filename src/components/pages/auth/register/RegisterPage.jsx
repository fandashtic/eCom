import React from 'react';
import { connect } from "react-redux";
import RegisterForm from 'components/forms/auth/register/RegisterForm';
import { register } from 'actions/auth'

class RegisterPage extends React.Component {

	register = (data) => {
        return this.props.register(data);
    }
    success = () => {
    	this.props.history.push('/')
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
	                                    <h4 className="text-center">Retail Registration</h4>
	                                    <RegisterForm register={this.register} success={this.success}/>
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
        register: (data) => dispatch(register(data)),
    }
}

export default connect(null, mapDispatchToProps)(RegisterPage)