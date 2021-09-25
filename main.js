function kyra (){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/bMgWbRaPv/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}function gotResults(error , results){
    if (error){
    console.error(error);
    }
    else {
    console.log(results);
    document.getElementById("sound").innerHTML='I can hear - '+results[0].label;
    document.getElementById("sounds").innerHTML='accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
    color_r = Moth.floor(Math.random()*255)+1;
    color_b = Moth.floor(Math.random()*255)+1;
    color_g = Moth.floor(Math.random()*255)+1;
    document.getElementById("sound").style.color="rgb("+color_r+","+color_g+","+color_b+")";
    document.getElementById("sounds").style.color="rgb("+color_r+","+color_g+","+color_b+")";
    img1=document.getElementById("a1");
    img2=document.getElementById("a2");
    img3=document.getElementById("a3");
    img4=document.getElementById("a4");