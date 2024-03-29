function getClientData(){
let clientdata={
  id:'970d411408804c6f811075fbfd7b432f',
  c_secret:'a7fe6210e4164fc9973def44286735de'
};
return clientdata;
}
async function getToken(){
let clientdata=getClientData();
const token = await fetch("https://accounts.spotify.com/api/token", {
  method: 'POST',
  headers: {
      'Authorization': 'Basic ' + btoa(clientdata.id + ':' + clientdata.c_secret),
      'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: 'grant_type=client_credentials'
}).then((data) => data.json()).then((accessObject) => accessObject);
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
