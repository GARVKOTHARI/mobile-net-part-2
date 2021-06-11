function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet' , ModelLoaded );
}

function ModelLoaded() {
  console.log("Model Loaded !")
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video , gotResult);
}

function gotResult(error , Results) {
  if (error) {
    console.error(error);
  }

  else {
    console.log(Results);

    document.getElementById("result_object_name").innerHTML = Results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = Results[0].confidence.tofixed(3);
  }
}



