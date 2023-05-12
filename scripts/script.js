fetch("https://finnhub.io/api/v1//covid19/us")
.then(response => {
    console.log(response.status);
    return response.json()
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})