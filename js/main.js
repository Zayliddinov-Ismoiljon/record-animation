var elMessage= document.querySelector("#message");
var speechRecognition= speechRecognition ||webkitSpeechRecognition;
var speechGrammarList= speechGrammarList ||webkitSpeechGrammarList;

var grammar="#JSGF V1.0";

var recognation= new speechRecognition();
var speechRecognitionGrammerList= new speechGrammarList();

speechRecognitionGrammerList.addFromString(grammar,1)
recognation.grammers= speechRecognitionGrammerList;
speechRecognition.lang="en-US";
recognation.interimResults= false;

recognation.onresult= function(evt){
    var last=evt.results.lenght-1;
    var command= evt.results[0][0].transcript;

    elMessage.textContent="Voice input" +" "+ command ;

    if(command.toLowerCase()===" select red"){
        document.querySelector("#checkRed").checked=true;
        document.querySelector(".image").style.display="none";
        document.querySelector(".form").style.display="block";
        document.querySelector(".animation").style.display="none";

    }
    if(command.toLowerCase()==="select green"){
        document.querySelector("#checkGreen").checked=true;
        window.document.body.style.background="green";
        document.querySelector(".image").style.display="none";
        document.querySelector(".form").style.display="block";
        document.querySelector(".animation").style.display="none";


    }
    if(command.toLowerCase()==="select yellow"){
        document.querySelector("#checkYellow").checked=true;
        window.document.body.style.background="yellow";
        document.querySelector(".image").style.display="none";
        document.querySelector(".form").style.display="block";
        document.querySelector(".animation").style.display="none";

    }

    if(command.toLowerCase()==="book"){
        document.querySelector(".image").style.display="block";
        document.querySelector(".form").style.display="none";
        document.querySelector(".animation").style.display="none";
        document.querySelector("#message").style.color="white";
        window.document.body.style.background="black";
    }

    if(command.toLowerCase()==="apple"){
        document.querySelector(".animation").style.display="block";
        document.querySelector(".form").style.display="none";
        document.querySelector("#message").style.color="white";
        window.document.body.style.background="black";
        document.querySelector(".form").style.display="none";
        document.querySelector(".image").style.display="none";
    }
};

recognation.onspeechend=function(){
    recognation.stop();
}

recognation.onerror=function(evt){
    elMessage.textContent="Error occured in recognition " + evt.error;
}

document.querySelector("#giveRecord").addEventListener("click", function(){
    recognation.start();
})





