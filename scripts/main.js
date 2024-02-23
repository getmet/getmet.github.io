function loadstyle(ptype='home',location=null){
  if(ptype){
    location=`/styles/${ptype}.css`;
  }
  let style=document.createElement('link');
  style.rel='stylesheet';
  style.href=location;
  document.head.appendChild(style);
}
function getHead(ptype='home'){
  let vp=document.createElement('meta');
  vp.name='viewport';
  vp.content='width=device-width, initial-scale=1.0';
  document.head.appendChild(vp);
  loadstyle(false,'/styles/main.css');
  loadstyle();
  let title=document.title;
  if(ptype==='home'){
    document.title='home';
  }
  else{
    document.title=document.getElementById('h1');
  }
  
  
}
function getHeader(){
  let header=document.createElement('header');
  document.body.insertAdjacentHTML('afterbegin',header)
}
