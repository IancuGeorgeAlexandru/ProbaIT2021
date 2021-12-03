const data = {};
const token = localStorage.getItem("token");
const bobocToken = "5f29f436-ee11-4f80-ac35-9e15efa5a2b5";   
const url = "https://proba2021.lsacbucuresti.ro/auth/login";

fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'boboc-token': bobocToken
    },
    body: JSON.stringify(data)
}).then(response => response.json()).then(data => console.log(data));
