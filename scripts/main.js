function getHead(ptype='home'){
  let head=document.head;
  let vp=document.createElement('meta');
  vp.name='viewport';
  vp.content='width=device-width, initial-scale=1.0';
  head.appendChild(vp);
  let title=document.title;
  if(ptype==='home'){
    title='home';
  }

}
function getHeader(){
  let header=document.createElement('header');
  document.body.insertAdjacentHTML('afterbegin',header)
}
