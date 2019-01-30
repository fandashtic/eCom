import React from 'react';
import Validator from 'validator';
import { MSG } from 'shared/common/languages/english';
import { Link } from 'react-router-dom';

class RegisterForm extends React.Component {
	state = {
		data: {
			companyName:"",
			password:"",
	      	email: "",
    	},
    	success:'',
    	errors: {}
	}

	handleChange = e => {
	    this.setState({
	      data: { ...this.state.data, [e.target.name]: e.target.value }
	    });
	}

	handleSubmit = (e) => {
  		e.preventDefault()
    	const errors = this.validate(this.state.data);
	    this.setState({ errors });
	    if (Object.keys(errors).length === 0) {
	       	this.props.register(this.state.data)
	       	.then( res => {
	       		if(res.status === 'error') {
	       			let globalErrors = {global:res.message}
	       			this.setState({ errors: globalErrors })
	       		} else {
	       		let success = 'Registration Successfully'
       			this.setState({
       				success:success
       			})
       			this.props.success()
	       		}
	       	})
	    }
  	};
  	
  	validate = data => {
		const errors = {};
		if (Validator.isEmpty(data.companyName)) {
	  		errors.companyName = MSG['company_name_cannot_empty'];
		}
		if (Validator.isEmpty(data.email)) {
		 	errors.email = MSG['email_cannot_empty'];
		} else if (!Validator.isEmail(data.email)) {
	  		errors.email = MSG['email_invalid'];
		}
		if (Validator.isEmpty(data.password)) {
	  		errors.password = MSG['password_cannot_empty'];
		}
		return errors;
	};

	render() {
		const { errors, success } = this.state
		return (
			<div>
			{success && <div className="alert alert-success text-center" style={{margin: "20px", borderRadius: "5px", padding: "15px"}}>{success}</div>}
				{errors.global && <div className="alert alert-danger text-center" style={{margin: "20px", borderRadius: "5px", padding: "15px"}}>{errors.global}</div> }
				<form onSubmit={this.handleSubmit}>
					<div className="container-fluid">
						<div className="form-group">
			            	<label htmlFor="">Company<small className="str_clr">*</small></label>
						 	<input className="form-control" type="text" name="companyName" onChange={this.handleChange} placeholder="Enter Company Name" maxLength="100"/>
		            		{errors.companyName && <span className="err-msg">{errors.companyName}</span>}
		            	</div>
	           			<div className="form-group">
			            	<label htmlFor="">Email<small className="str_clr">*</small></label>
						 	<input className="form-control" type="email" name="email" onChange={this.handleChange} placeholder="Enter Email ID" maxLength="200"/>
		            		{errors.email && <span className="err-msg">{errors.email}</span>}
		            	</div>
		            	<div className="form-group">
			            	<label htmlFor="">Password<small className="str_clr">*</small></label>
			            	<input className="form-control" type="Password" id="password" onChange={this.handleChange}  name="password" placeholder="Enter password" maxLength="50"/>
	           				{errors.password && <span className="err-msg">{errors.password}</span>}
	           			</div>
	           		</div>
	           		<div className="footer text-center">
						<button type="submit" className="btn btn-primary mt-6">Register</button>
	            	</div>
	            	<hr width="50%"/>
	            	<div className="text-center">
	            		<Link to ='/'> <span>Already Login?</span> </Link>
	            	</div>
	            </form>
        	</div>
	    )
	}
}

export default RegisterForm;