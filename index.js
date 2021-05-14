
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML=this.innerHTML;
    click(buttonInnerHTML);
    press(buttonInnerHTML);
});

}

document.addEventListener("keypress",function(event){
    click(event.key);
    press(event.key);
});

function click(key){
    var audio="sounds/";
    switch(key)
    {
        case "w":audio=audio+"crash.mp3";
            break;
        case "a":audio=audio+"kick-bass.mp3";
            break;  
        case "s":audio=audio+"snare.mp3";
            break;
        case "d":audio=audio+"tom-1.mp3";
            break;
        case "j":audio=audio+"tom-2.mp3";
            break;
        case "k":audio=audio+"tom-3.mp3";
            break;  
        case "l":audio=audio+"tom-4.mp3";
            break;                
    }
    var audioplay=new Audio(audio);
    audioplay.play();
}

function press(currentKey)
{
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
    activeButton.classList.remove("pressed");
    },100);
}