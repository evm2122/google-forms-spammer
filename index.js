button.onclick = function(){
    if(!/^(ftp|http|https):\/\/[^ "]+$/.test(url.value)){
        alert("Invalid URL")
        return;
    }
    const { hostname } = new URL(url.value);
    if(hostname !== "docs.google.com"){
        alert("Invalid URL")
        return;
    }
    if(number.value<0){
        alert("Please specify a number greater than 0.")
        return;
    }
    formContent = textbox.value.replaceAll("\n", "&").replace(/\s+/g,"").replaceAll(":", "=")
    for(i=0;i<number.value;i++){
        fetch(url.value,{
            "body": formContent,
            "method": "POST",
            "mode": "no-cors"
        }).then(log.textContent = log.value + "\nSending form request")
    }
}