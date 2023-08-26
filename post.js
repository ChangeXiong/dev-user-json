const axios = require("axios");
axios.post('http://localhost:3000/users',{
    id: 4,
    first_name: 'thong',
    last_name: 'xiong',
    email: 'xiong@gmail.com'
}).then(res => {
    console.log(res.data);
}) .catch(error => {
    console.log(error);
})
