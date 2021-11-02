function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K5bTy3vrM/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    } else {
        console.log(results);
        randomNumber_r= Math.floor(Math.random()* 255)+ 1;
        randomNumber_g= Math.floor(Math.random()* 255)+ 1;
        randomNumber_b= Math.floor(Math.random()* 255)+ 1;

        document.getElementById("resultLabel").innerHTML= 'I can hear - '+
        results[0].label;
        document.getElementById("resultConfidence").innerHTML= 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+ "%";
        document.getElementById("resultLabel").style.color = "rgb("
        +randomNumber_r+ ", "+ randomNumber_g+ ", "+ randomNumber_b+")";
        document.getElementById("resultConfidence").style.color = "rgb("
        +randomNumber_r+ ", "+ randomNumber_g+ ", "+ randomNumber_b+")";

        img = document.getElementById('Alien1');
        img1 = document.getElementById('Alien2');
        img2 = document.getElementById('Alien3');
        img3 = document.getElementById('Alien4');

        if (results[0].label == "Clap"){
        img.src = 'aliens-01.gif';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
        } else if (results[0].label == "Snap"){
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.gif';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.png';
    } else if (results[0].label == "Table Banging Sound") {
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.gif';
        img3.src = 'aliens-04.png';
    } else if (results[0].label == "Background Noise"){
        img.src = 'aliens-01.png';
        img1.src = 'aliens-02.png';
        img2.src = 'aliens-03.png';
        img3.src = 'aliens-04.gif';
    }
}
}