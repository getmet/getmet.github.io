function setCookie(cname,cvalue,exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie(cname) {
  let cookie = getCookie(cname);
  return cookie!==false;
}
function getClientData(){
let clientdata={
  id:'970d411408804c6f811075fbfd7b432f',
  c_secret:'a7fe6210e4164fc9973def44286735de'
};
return clientdata;
}
async function getToken(){
let clientdata=getClientData();
if(checkCookie('tn')){
  let tokenavl=getCookie('tn');
  console.log(`tn = ${tokenavl}`)
  return tokenavl;
}
const token = await fetch("https://accounts.spotify.com/api/token", {
  method: 'POST',
  headers: {
      'Authorization': 'Basic ' + btoa(clientdata.id + ':' + clientdata.c_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
}).then((data) => data.json()).then((accessObject) => accessObject);
setCookie('tn',token.access_token,3.6);
return token.access_token;
}
async function getSearchResult(){
let searchtype=document.getElementsByClassName('searchtype');
  let address;
let query=document.getElementById('search-query').value;
  setTimeout(async function() {
       let token=await getToken();
for(let i=0;i<searchtype.length;i++){
  if(searchtype[i].checked===true){
    if (searchtype[i].id==='search-isrc'){
    address=`https://api.spotify.com/v1/search?type=track&q=isrc:${query}`;
    } else if (searchtype[i].id==='search-song'){
      address=`https://api.spotify.com/v1/search?type=track&q=${query}`;
    }
  }
  
}
let searchresult=await fetch(address, {
  headers: {
    Authorization: `Bearer ${token}`,
  }
})
console.log(await searchresult.json());
    }
    ,3000);
}
