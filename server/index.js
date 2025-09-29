const e = require('express');
const express = require('express');
const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: true     }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/server-time', (req, res) => {
    let now = new Date()
    let time ={
        hour:now.getHours(),
        minute:now.getMinutes(),
        second:now.getSeconds()
    }
    res.json(time);
    })
function rd(min,max){
    let x =(max-min)+1;
    return Math.floor(Math.random()*x)+min;
}
app.get('/api/football-result', (req, res) => {
    let table =`
    <table border="1" style="margin: 7px auto">
    <tr><td>Liverpool</td><td>${rd(0,5)}</td></tr>
    <tr><td>Manchester United</td><td>${rd(0,5)}</td></tr>
    <tr><td>Chelsea</td><td>${rd(0,5)}</td></tr>    
    <tr><td>Arsenal</td><td>${rd(0,5)}</td></tr>
    <tr><td>Manchester City</td><td>${rd(0,5)}</td></tr>
    </table>
    `
    res.send(table);
    
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});