const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
const transporter = require('./config.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname, "../build")));
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.post('/send', (req, res) => {
//   console.log(req.body);
//   console.log(process.env.EMAIL_USER)
//   try {
//     const mailOptions = {
//       from: req.body.email,
//       to: process.env.EMAIL_USER,
//       subject: req.body.subject + req.body.email,
//       html: req.body.message,
//     }
//     transporter.sendMail(mailOptions, (err, info) => {
//       if(err) {
//         res.status(500).send({
//           success: false,
//           message: 'Something went wrong. Your message has not been submitted'
//         });
//       } else {
//         res.send({
//           success: true,
//           message: 'Thanks for contacting me. I will get back to you shortly'
//         });
//       }
//     })

//   } catch (error) {
//     res.status(500).send({
//       success: false,
//       message: 'Something went wrong. Your message has not been submitted'
//     });
//   }

// });
app.use('*', express.static(path.join(__dirname, "../build/index.html")));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})