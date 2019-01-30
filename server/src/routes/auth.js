import express from 'express';
import jwt from 'jsonwebtoken';
import { MSG } from '../shared/common/languages/english';
import * as firebase from "firebase";
import { studentsList, studentsData, ref } from '../config/db';

const router = express.Router();

router.post('/studentsRegisterationAuth', (req, res) => {
    const data = req.body.data;
    firebase.auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((result) => {
        res.status(200).json({ status: "Success", message : MSG['auth_reg_success'], uid : result.user.uid});
    })
    .catch((error) => {
        res.status(500).json({ status: "error", error});
    })
});

router.post('/studentsRegisteration', (req, res) => {
    const data = req.body.data;
    studentsData.child(data.uid).push({
        email : data.email,
        firstName : data.firstName,
        lastName : data.lastName
    })
    .then((result) => {
         res.json({ statusCode: 200, status: "Success", message : MSG['stud_reg_success'], data : result.user.data});
    })
    .catch((error) => {
        res.json({ statusCode: 500, status: "error", error});
    })
}); 

router.post('/login', (req, res) => {
    const credentials = req.body.credentials;
    firebase.auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then((result) => {
        const token = jwt.sign({"id" : result.user.uid, "email" : req.body.email}, 'secret', { expiresIn:"5h" });
        res.status(200).json({ status: "Success", message : "Login Successful", token : token, result : result});
    })
    .catch((error) => {
        res.status(500).json({ status: "error", error });
    })
});

export default router;