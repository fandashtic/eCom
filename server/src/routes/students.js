import express from 'express';
import jwt from 'jsonwebtoken';
import { MSG } from '../shared/common/languages/english';
import * as firebase from "firebase";
import { studentsList, studentsData } from '../config/db';
import request from "request";

const router = express.Router();

router.get('/fetchStudents', (req, res) => {
    request({
      method: 'GET',
      uri: 'https://reqres.in/api/users',
    }, function (error, response, result){
      if(!error && response.statusCode == 200){
        res.json(result);
      }
    })
});

router.get('/fetchStudent/:id', (req, res) => {
	const uid = req.params.id;
    studentsList.child('record').child(uid).once('value', (data) => {
    	let obj = data.val();
    	let objChild = obj[Object.keys(obj)];
    	let uidChildId = Object.keys(obj)[0];
    	objChild.uidChildId = uidChildId;
    	objChild.uid = uid;
        res.json({ result: objChild });
    }, (err) => {
    })
});

router.post('/updateStudentProfile', (req, res) => {
    const data = req.body.data;
    let thisData = {
    	[data.uidChildId]: {
    		firstName : data.firstName,
	        lastName : data.lastName,
	        address : data.address,
	        city : data.city,
	        state : data.state
    	}
    }
    studentsData.child(data.uid).update(thisData)
    .then((result) => {
         res.json({ statusCode: 200, status: "Success", message : MSG['stud_profile_update_success'], data : result.user.data});
    })
    .catch((error) => {
        res.json({ statusCode: 500, status: "error", error});
    })
}); 

export default router