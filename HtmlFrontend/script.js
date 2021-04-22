fetch("https://localhost:44323/api/values",{
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer'
}
)
.then(res => res.json())
.then(data => {
    let li = "";
            data.forEach(user => {
               // console.log(user);
            li += `<tr>
           
            <td>${user.firstName} </td>
            <td>${user.lastName} </td>
            <td>${user.address}</td> 
            <td>${user.city} </td>
          <td>  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
            <div  class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn btn-success" data-toggle="modal" data-target="#myModal" >Update</button>
              
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-danger" >Delete</button></td>
            </tr>`;
    });
    document.getElementById("user").innerHTML = li;
    
 
  // do something with data
  console.log(data);
})
.catch(function(error) {
  console.log('Looks like there was a problem: \n', error);
});


            
function Adduser()
{
var fname=document.getElementById("fname");
var lname=document.getElementById("lname");
var address=document.getElementById("address");
var city=document.getElementById("city");

var TempUser = 
    {
    "FirstName":fname.value,
    "LastName":lname.value,
    "Address":address.value,
    "City":city.value
    }

    fetch("https://localhost:44323/api/values", 
    {   
        method: "POST",
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(TempUser)
    })
    //.then(response => response.json())
    .then(result => {
        console.log(result);}
        );
    }







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

  
   
    