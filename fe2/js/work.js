var mode;
var condition;

   function click1() {
     r = document.getElementById('alone');
     console.log(r);
     console.log(r.checked);
     RequestKidgardens();
     //workOnIt();
   }
   function click2() {
     r = document.getElementById('kidsnumber');
     if (r.value==0) r.value=1;
   }

function ajaxGet(req,funcOk,funcFail) {
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    funcOk(this.responseText);
   } else {
    funcFail(this.responseText);
  } 

 };
 xhttp.open("GET", req, true);
 xhttp.send(); 

}

function workOnJG(json) {
 
  kgArray = JSON.parse(json);
  kgArSize = kgArray.length - 1;
  TotalCap = 0;
  TotalPop = 0;
  while (kgArSize>=0) {

    TotalCap += kgArray[kgArSize][kgArSize]["capacity"];
    TotalPop += kgArray[kgArSize][kgArSize]["population"];
  }

  return TotalCap-TotalPop
  
}

function RequestKidgardens() {
  condition = 'Kidgardens';
  ajaxGet('https://api.hackathon.xe-xe.org/block/0/objects/kidgardens',CallBack,CallBack);
}

function RequestParks() {
  condition = 'parks';
  ajaxGet('https://api.hackathon.xe-xe.org/block/0/objects/parks',CallBack,CallBack);
}

function CallBack(e) {
     addKiev();
     addZHd();
     console.log(condition);
     console.log(e);
}

// leisure, malls, parks