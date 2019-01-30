import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import auth from './routes/auth';
import students from './routes/students';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));
app.use(cors());
app.use('/api/auth', auth);
app.use('/api/students', students);
app.use('/images', express.static(path.join(__dirname, '../assets/images')));

/*app.use(express.static(path.join(__dirname, '../../build')));
app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});*/

app.use((req, res) => {
	res.status(404).json({
		errors: {
			global: "Page Not Found."
		}
	})
});

let port = process.env.port || 8080;
app.listen(port, () => console.log('Running on port:' + port));