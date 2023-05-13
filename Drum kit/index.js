document.addEventListener("DOMContentLoaded",()=>{
    for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        // console.log("hyy");

        document.querySelectorAll(".drum")[i].addEventListener("click",function ()
        {
            var text=this.innerHTML; 
            music(text) ;
        })
    }
    document.addEventListener("keypress",function(event){
        var text2=event.key;
        music(text2);
    })
    const music=(text)=>
    {
        switch(text)
        {
            case "w":
            const audio=new Audio('/sounds/tom-1.mp3') 
            audio.play(); 
            case "a":
            const audio1=new Audio('/sounds/tom-2.mp3') 
            audio1.play(); 
            case "s":
             const audio2=new Audio('/sounds/tom-3.mp3') 
            audio2.play(); 
            case "d":
             const audio3=new Audio('/sounds/tom-4.mp3') 
            audio3.play(); 
            case "j":
             const audio4=new Audio('/sounds/snare.mp3') 
            audio4.play();
            case "k":
             const audio5=new Audio('/sounds/kick-bass.mp3') 
            audio5.play(); 
            case "l":
             const audio6=new Audio('/sounds/crash.mp3') 
            audio6.play();  

            default:
                console.log("hyy");
        }
        document.querySelector("."+text).classList.add("pressed");
        setTimeout(()=>
        {
            document.querySelector("."+text).classList.remove("pressed");
        },100)
    } 
})