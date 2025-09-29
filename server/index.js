const e = require('express');
const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true     }));
app.use(express.json());
app.use(express.static('public'));

app.post('/api/form-post', (req, res) => {
    let name = req.body.name ||''
    let email = req.body.email ||''
    let msg = req.body.message ||''
    let text = `
    <table border="1">
        <caption>ข้อมูลที่ติดต่อมา</caption>
        <tr><td>ชื่อ-สกุล:</td><td>${name}</td></tr>
        <tr><td>อีเมล:</td><td>${email}</td></tr>
        <tr><td>ข้อความ:</td><td>${msg}</td></tr>
    </table>
    `   
    res.send(text);

})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});