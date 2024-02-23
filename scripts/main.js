function getHead(ptype='home'){
  let vp=document.createElement('meta');
  vp.name='viewport';
  vp.content='width=device-width, initial-scale=1.0';
  document.head.appendChild(vp);
  let title=document.title;
  if(ptype==='home'){
    document.title='home';
  }

  
}
function getHeader(){
  let header=document.createElement('header');
  document.body.insertAdjacentHTML('afterbegin',header)
}
