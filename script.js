const url = "https://jsonplaceholder.typicode.com/users"


const fetchData = async()=>{
   const response = await fetch(url);
   const  data = await response.json();
    console.log(data) 
    const list=data.map((res)=>{
       return `<div id="card"><span id="text">${res.name}</span>
       <span id="text">${res.email}</span>
       <span id="text">${res.address.street}</span>
       <span id="text">${res.address.city}</span></div>`

    })

    const mydiv =  document.getElementById("root")
        mydiv.innerHTML = list
 }

fetchData()