#pragma strict

var smooth : float = 10f;
var waitTime = 3;
var train_outside : GameObject; 

var cam : Camera;

private var startOrthoSize;
var endOrthoSize : float = 3.5f;

private var startLocalPosition;
var endLocalPosition : float = 2;

private var lerpPosition : float;

private var triggered = false;

// Time taken for the transition.
var duration = 10.0;

private var startTime: float;


function Start() {
	// Make a note of the time the script started.
	startTime = Time.time;
	train_outside.SetActive(true);
}
	

function SmoothZoom (startOrtho : float, endOrtho : float, startPosition : float, endPosition : float, duration : float) {
    var t = 0.0;
    while (t <= 1.0) {
        t += Time.deltaTime/duration;
        var smoothT = Mathf.SmoothStep(0.0, 1.0, t);
        cam.orthographicSize = Mathf.Lerp(startOrtho, endOrtho, smoothT);
        cam.transform.localPosition.y = Mathf.Lerp(startPosition, endPosition, smoothT);
        yield;
    }
}


function Update (){
   var t = (Time.time - startTime) / duration;
   if (Time.timeSinceLevelLoad > waitTime){
   	if(!triggered) {
   	 startOrthoSize = cam.orthographicSize;
   	 startLocalPosition = cam.transform.localPosition.y;
   	 triggered = true;
   	 SmoothZoom(startOrthoSize, endOrthoSize, startLocalPosition, endLocalPosition, duration);
   	} else {
        if(cam.orthographicSize < 3.6) {
	        train_outside.SetActive(false);
        }
   	}
 }
}