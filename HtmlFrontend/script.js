
fetch("https://localhost:44323/api/values").
    then(response => response.json())
        .then(json => {        
            let li = ``;
            json.forEach(user => {
                console.log(user);
            li += `<tr>
         
            <td>${user.firstName} </td>
            <td>${user.lastName} </td>
            <td>${user.address}</td> 
            <td>${user.city} </td>
            <td>
            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
            <div  class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" onclick=update('${user.firstName},${user.lastName}') ;>Update</button>
              
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-danger" onclick=deleted();>Delete</button></td>

            </tr>`;
    });
    document.getElementById("user").innerHTML = li;
});


// function update(A,B,C,D)
// {
//     document.getElementById("Modelfname").value = A;
//     document.getElementById("Modellname").value = B;
//     document.getElementById("Modeladdress").value = C;
//     document.getElementById("Modelcity").value = D;
    
// }

// function deleted()
// {

// }

  
            
function Adduser()
{
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var address=document.getElementById("address");
var city=document.getElementById("city");

var json = 
    {
    "FirstName":fname.value,
    "LastName":lname.value,
    "Address":address.value,
    "City":city.value
    }

    fetch("https://localhost:44323/api/values", {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "Access-Control-Request-Method": "*"
  },
  body: json
})
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  });
}

   
    

