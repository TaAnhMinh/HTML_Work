function response(event){
    if (event.shiftKey){
       window.alert("shift key is pressed. \n The event name is " + event.type);
    } else if (event.ctrlKey ){
        window.alert("ctrl key is pressed. \n The element name is " + event.target);
    }
    else{
        window.alert("Display the event name if the user held Shift during the mouse click.\n" + 
        "Display the element name that triggered the event if the user held Ctrl during " + 
        "the mouse click.");
    }
}
