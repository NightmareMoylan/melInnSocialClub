if(document.getElementsByClassName("leftIndex") != null){ //if on the index page
    let screenWidth = screen.width;
    console.log("on index")
    if(screenWidth>500){
        console.log("width is higher");
        document.querySelector(".leftIndex").innerHTML+='<br><ul style="list-style: none; color: black; font-size: 20px;"><li>Mel Inn Social Club</li><li>513, Hawthorne Road</li><li>Bootle</li><li>L21 6JJ</li></ul>';
    }else{
        document.querySelector(".rightIndex").innerHTML+='<br><br><ul style="list-style: none; color: black; font-size: 20px;"><li>Mel Inn Social Club</li><li>513, Hawthorne Road</li><li>Bootle</li><li>L21 6JJ</li></ul>';
    }
}