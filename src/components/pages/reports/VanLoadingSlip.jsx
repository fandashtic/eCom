import React from 'react';
import HeaderNavBar from 'components/pages/common/HeaderNavBar';
import SideNavBar from 'components/pages/common/SideNavBar';
import { Link } from 'react-router-dom';

class VanLoadingSlip extends React.Component {
	render() {
		return (
            <div className="page">
	            <HeaderNavBar />
	            <div className="page-content d-flex align-items-stretch">
	            	<SideNavBar/>
	            	<div className="content-inner">
		            	<div class="container-fluid calendar">
	                        <div class="row no-margin">
	                            <div class="col-xl-12">
	                                <div class="row widget has-shadow">
	                                    <div class="widget-header bordered d-flex align-items-center">
	                                        <h2 className="text-center">Dashboard</h2>
	                                    </div>
	                                    <div class="widget-body">
	                                        <div id="calendar" class="fc fc-unthemed fc-ltr">
		                                        <div class="fc-view-container">
			                                        <div class="fc-view fc-month-view fc-basic-view text-center">
			                                        	<h2 className="text-center">Hai Welcome Dashboard</h2>
			                                        </div>
			                                        	{/*some text*/}
		                                        </div>
	                                        </div>
	                                    </div>
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

export default VanLoadingSlip;