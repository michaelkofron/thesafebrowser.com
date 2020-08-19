let user = navigator.userAgent

let obj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        userAgent: `${user}`
    })
}

fetch("https://tsb-api.herokuapp.com/siteuser", obj)
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        console.log(object.success)
    })
    .catch(function(error){
        console.log(error)
    })