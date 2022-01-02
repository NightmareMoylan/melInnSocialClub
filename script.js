if(document.getElementsByClassName("leftIndex") != null){ //if on the index page
    let screenWidth = screen.width;
    console.log("on index")
    if(screenWidth>500){
        console.log("width is higher");
        document.querySelector(".leftIndex").innerHTML+='<br><ul style="list-style: none; color: black; font-size: 20px;"><li>Mel Inn Social Club</li><li>513, Hawthorne Road</li><li>Bootle</li><li>L21 6JJ</li></ul><br><h4>Opening Hours</h4><br><ul style="list-style: none; color: black; font-size: 20px;"><li>Monday 19:30-23:00</li><li>Friday 19:30-1:00</li><li>Saturday 19:30-1:00</li><li>Sunday 19:30-23:00</li></ul><br><h4 style="color:black;">These are the opening hours for the course of the pandemic. They may be subject to change</h4><br>';
    }else{
        document.querySelector(".rightIndex").innerHTML+='<br><br><ul style="list-style: none; color: black; font-size: 20px;"><li>Mel Inn Social Club</li><li>513, Hawthorne Road</li><li>Bootle</li><li>L21 6JJ</li></ul><br><br><h4>Opening Hours</h4><br><ul style="list-style: none; color: black; font-size: 20px;"><li>Monday 19:30-23:00</li><li>Friday 19:30-1:00</li><li>Saturday 19:30-1:00</li><li>Sunday 19:30-23:00</li></ul><br><h4 style="color:black;">These are the opening hours for the course of the pandemic. They may be subject to change</h4><br>';
    }
}