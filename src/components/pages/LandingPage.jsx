import React from 'react';
import HeaderNavBar from 'components/pages/common/HeaderNavBar';

class LandingPage extends React.Component {
	render() {
		return (
            <div className="main-panel main-panel-1">
	            <HeaderNavBar />
	            <div className="content">
	                <div className="container-fluid">
	                    <div className="row">
	                        <div className="col-md-12">
	                            <div className="card">
	                                <div className="card-content p-70">
	                                    <h2 className="text-center">Welcome</h2>
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

export default LandingPage;