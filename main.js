function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SixuZcb6B/model.json', modelReady);
 }
 function modelReady(){
   classifier.classify(gotResults);
 }

var dog = 0
var cat = 0
var lion = 0
var cow = 0
function gotResults(error, results) {
   if (error) {
     console.error(error);
   } else {
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
     document.getElementById("result_label").innerHTML = 'The detected voice is  - '+ results[0].label;
     document.getElementById("result_count").innerHTML = 'Voice Detected Dog -   '+dog+ ' Voice Detected Cat -   '+cat+ ' Voice Detected Lion -  ' +lion+ ' Voice Detected Cow -  '+cow;
     document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
     document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

     img = document.getElementById('audio111');
 
     if (results[0].label == "cat meowing") {
       img.src = 'eatingcat.gif';
       cat = cat+1;
     } else if (results[0].label == "cow mooing") {
       img.src = 'lovelycow.gif';
       cow = cow + 1;
     }
       else if (results[0].label == "dog barking") {
         img.src = 'doggg.gif';
         dog = dog + 1;
       }
       else if (results[0].label == "lion roaring") {
         img.src = 'happylion.gif';
         lion = lion + 1;
     } else{
       img.src = 'doo.jpg';
     }
   }
 }











    