

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
            <td>${user.id} </td>
            <td>${user.firstName} </td>
            <td>${user.lastName} </td>
            <td>${user.address}</td> 
            <td>${user.city} </td>
          <td>  <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
               
            <div  class="btn-group me-2" role="group" aria-label="Second group">
              <button type="button" class="btn" data-toggle="modal" data-target="#myModal">Done..</button>
              
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
              <button type="button" class="btn btn-danger" onclick=Deleteuser(${user.id})>Delete</button></td>
            </tr>`
            
            ; 
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

   

    function Deleteuser(id) {
        console.log(id.toString());
        var urlDelete = "https://localhost:44323/api/values/" + id.toString();
        console.log(urlDelete);
        fetch(urlDelete, {
          method: "DELETE",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
        })
          //.then(response => response.json())
          .then((result) => {
            console.log(result);
          });
          alert("USER DELETED");
      }
       

   
      function Updateuser(id) {
        var TempFname = document.getElementById("Modelsfname" + id.toString());
        var TempLname = document.getElementById("Modelslname" + id.toString());
        var TempAge = document.getElementById("Modelsaddress" + id.toString());
        var TempAddress = document.getElementById("Modelscity" + id.toString());
        var TempUser = {
          FirstName: TempFname.value,
          LastName: TempLname.value,
          Age: TempAge.value,
          Address: TempAddress.value,
        };
        console.log(TempUser);
        var urlUpdate = "https://localhost:44323/api/values" + id.toString();
        console.log(urlUpdate);
        fetch(urlUpdate, {
          method: "PUT",
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer",
          body: JSON.stringify(TempUser),
        })
          //.then(response => response.json())
          .then((result) => {
            console.log(result);
          });
      }    

    //   --------------------------------------------------

<<<<<<< HEAD

function signup()
{
var UserName=document.getElementById("username");
var Password=document.getElementById("password");


var LoginUser = 
    {
    "UserName":UserName.value,
    "EmailId":"nothing",
    "Password":Password.value,
    }

    fetch("https://localhost:44323/api/Login/signup", 
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
        body: JSON.stringify(LoginUser),
        
    })
    //.then(response => response.json())
    .then((result) => {
        console.log(result);
    });
    }


    function login()
{
var UserName=document.getElementById("username");
=======
function Addnewloginuser()
{
var UserName=document.getElementById("username");
var EmailId=document.getElementById("emailid");
>>>>>>> 4a29f6026df4adb7a4d40800dbc66b2b64e25358
var Password=document.getElementById("password");


var LoginUser = 
    {
    "UserName":UserName.value,
<<<<<<< HEAD
    "EmailId":"nothing",
    "Password":Password.value,
    }

    fetch("https://localhost:44323/api/Login/login", 
=======
    "EmailId":EmailId.value,
    "Password":Password.value,
    }

    fetch("https://localhost:44323/api/Login", 
>>>>>>> 4a29f6026df4adb7a4d40800dbc66b2b64e25358
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
<<<<<<< HEAD
        body: JSON.stringify(LoginUser),
        
    })
    //.then(response => response.json())
    .then(response => response.text())
        .then((response) => {
            console.log(response)
        });
        window.localStorage.setItem(key, value);
    }


    
=======
        body: JSON.stringify(TempUser),
        
    })
    //.then(response => response.json())
    .then(result => {
        console.log(result);}
        );
        window.localStorage.setItem(key, value);
    }
>>>>>>> 4a29f6026df4adb7a4d40800dbc66b2b64e25358
