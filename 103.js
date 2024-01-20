Webcam.set({
width:400,height:400,image_format:"jpg",jpg_quality:85
})
camera=document.getElementById("camera");
Webcam.attach("#camera")
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Vdonx7LAo/model.json",redneuronal)
function redneuronal(){
console.log ("redneuronal");
}
function check(){
console.log ("redneuronal 2");
var img=document.getElementById("selfie_image");
classifier.classify(img, redneuronal3)
}
function redneuronal3(error,results){
if(error){
console.log(error);
}else{
console.log(results);
 document.getElementById("result_object_name").innerHTML=results[0].label;
document.getElementById("result_object_accuracy").innerHTML=results[0].confidence;
}
}
