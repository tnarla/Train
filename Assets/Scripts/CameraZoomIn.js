#pragma strict

var zoom : float = 1.8;
var smooth : float = 100f;
var waitTime = 3;
var train_outside : GameObject; 

var cam : Camera; 

	// Time taken for the transition.
	var duration = 6.0;

	private var startTime: float;
	
	
	function Start() {
		// Make a note of the time the script started.
		startTime = Time.time;
		train_outside.SetActive(true);
	}
	

     

function Update (){
   var t = (Time.time - startTime) / duration;
   if (Time.timeSinceLevelLoad > waitTime){
     if(cam.orthographicSize > 3.6 && cam.orthographicSize <= 12){
        cam.orthographicSize = Mathf.Lerp(cam.orthographicSize, zoom, Time.fixedDeltaTime * smooth);
        cam.transform.localPosition.y = Mathf.Lerp(cam.transform.localPosition.y, 2, Time.fixedDeltaTime * smooth);
        //cam.orthographicSize = Mathf.Lerp(cam.orthographicSize, zoom, t);
       
        if(cam.orthographicSize < 3.6) { 
	        train_outside.SetActive(false);
        }
        
     }
     
     
   }
 }
 
 
 
 

	    
 