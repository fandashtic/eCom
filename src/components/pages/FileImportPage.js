import React from 'react';
import HeaderNavBar from 'components/pages/common/HeaderNavBar';
import ReactFileReader from 'react-file-reader';
//import csv from 'csvtojson';
import { fileUpload } from 'actions/auth';

class FileImportPage extends React.Component {
	constructor(props) {
  super(props)
  this.state = {
  } 
  this.handleFiles = this.handleFiles.bind(this) 
}

	handleFiles = files => {
		let file = []
		let head = []
		const scope = this
    	var reader = new FileReader();
    	reader.onload = function(e) {
		    var csv = reader.result;
		    var lines = csv.split("\n");
		    console.log()
		    let result = [];
		    let store = [];
		    let resHed = [];
		    var headers=lines[0].split(",");
				resHed = headers
	    	for(var i=1;i<lines.length;i++){
	    		var obj = {};
				let currentline = lines[i].split(",");
				if(currentline!==undefined){
					result.push(currentline)
				}
				for(var j=0;j<headers.length;j++){
					if(currentline[j] !==undefined){
        				obj[headers[j]] = currentline[j];
					}
      			}
      			 store.push(obj);
      		}  
	  	setTimeout(function(){ scope.setState({["fileJson"] : result , ["headers"]:resHed, ["store"]:store})}, 1000)
  		}
	  	reader.readAsText(files[0]);
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.fileUpload(this.state.store)
	}

	render() {
		const { fileJson ,headers,store } = this.state
		return (
            <div className="main-panel main-panel-1">
	            <HeaderNavBar />
	            <div className="content">
	                <div className="container-fluid">
	                    <div className="row">
	                        <div className="col-md-12">
	                            <ReactFileReader fileTypes={".csv"} handleFiles={this.handleFiles}>
								  <button className='btn'>Upload</button>
								</ReactFileReader>
								<div className="container">
									<table className="table">
										<thead>
											<tr>
												{
													(headers !== undefined && headers !== null ) && 
													headers.map(function(item){
														return (
														  		<th key={item}>{item}</th>
														)
													})
												}
											</tr>
	    								</thead>
	    								<tbody>
	    								 
	    									{
												(fileJson !== undefined && fileJson !== null ) &&
												fileJson.map(function(rows, i){
													return(
														<tr key={i}>
															{
															 	rows.map((col, j) => {
															 		return(
															 			<td key={j}>{col}</td>
															 		)
															 	})
															}
											        	</tr>
											        )
									        	})
											}
	    								</tbody>
	    							</table>
	    							{
	    								(fileJson !== undefined && fileJson !== null ) &&
	    								<input type='button' name= "submit" onClick={this.handleSubmit}/>
	    							}
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
        fileUpload: (data) => dispatch(fileUpload(data)),
    }
}

export default FileImportPage;