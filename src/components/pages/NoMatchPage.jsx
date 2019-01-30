import React, { Component } from 'react'

class PageNotFound extends Component {
	render() {
		return (
		<section>
            <div className="main">
				<div className="section" id="carousel">
	            <div className="container">
	                <div className="row">
	                    <div className="col-md-12 mr-auto ml-auto">
	                         <br/>
                     			<h1 className="text-center" style={{fontSize:"160px"}}>404</h1>
                                   <h2 className="text-center">Oops! Page not found
                                </h2>
	                        </div>
	                    </div>
	                </div>
	            </div>
            </div>
	    </section>
		)
	}
}

export default PageNotFound;