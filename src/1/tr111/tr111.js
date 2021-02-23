
  
   function myFunction() {
     debugger
    // document.getElementById("myDIV").classList.toggle("mystyle");
    var element = document.getElementById("myDIV");
    // עובד //
    console.log('fff');
    // element.classList.toggle("mystyle");            //  עובד //
    //   בצורה ארוכה יותר   עובד //
    if (element.classList.length==0)
    element.classList.add("mystyle");
    else element.classList.remove("mystyle")
    //  //                  //
    // if (element.getAttribute.length>0) {        //  לא עבד
    //      שינוי אטריביוט עובד      !    //עובד //
    // if (this.a) {
    //   console.log("הייייוש");
    //   element.setAttribute("style", "display:block");this.a=false
    // }
    // else {element.setAttribute("style", "display:none");this.a=true}
  //                                      //עובד //
    
 }
 

