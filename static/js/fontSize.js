export default{
  setrem(){
    let window_w=document.documentElement.clientWidth||document.body.clientWidth;
    let min_w=375;
    if(window_w<320){
      document.getElementsByTagName('html')[0].style.fontSize=100+'px';
    }else{

      document.getElementsByTagName('html')[0].style.fontSize=(window_w/min_w)*100+'px';
    }
  }
 }