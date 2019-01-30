import React from "react";

export const config = {
	srchDelay: 5,
	notifyStyle: {
	  NotificationItem: { 
	    DefaultStyle: { 
	      fontSize: '15px',
	      width: '100%',
	      height: '100%',
	      padding: '20px',
	      margin: '0 auto',
	      marginTop: '100px',
	    }
	  }
	},
};

export const notifyMsg = function(msg, level) {
  	return {
		level: level,
		children: (<div className="modal-dialog modal-small" role="document">
		               <div className="modal-content justify-content-center">
		                   <div className="modal-body text-center">
		                   {
		                   	(level === 'success') ? <h3 className="text-success">Successful!</h3> : <h3 className="text-danger">Error!</h3>
		                   }
		                       <div className="text-center">
		                          <p>{msg}</p>
		                      </div>
		                   </div>
		                   <div className="modal-footer justify-content-center">
		                   {
		                   	(level === 'success') ? <button type="button" className="btn btn-lg btn-success notification-dismiss alert-dismiss">OK</button> : <button type="button" className="btn btn-lg btn-danger notification-dismiss alert-dismiss">OK</button>
		                   }
		                   </div>
		               </div>
		              </div>),
		position: 'tc',
		autoDismiss: 7
	}
};