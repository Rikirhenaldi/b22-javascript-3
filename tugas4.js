const fetch = require('node-fetch')
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(result => {
    const data = result 
    data.forEach(x => {
        console.log(x.name);
    });
})
