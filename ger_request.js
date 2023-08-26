const axios = require("axios");
axios.get('http://localhost:3000/users')
    .then(res => {
        let data = res.data;
        data.forEach(val => {
            console.log(`${val.first_name} ${val.last_name} ${val.email}`)
        });
    })
    .catch(error => {
        console.log(error);
    })