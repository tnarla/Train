#pragma strict

var character : Rigidbody2D; 
var pointClicked : Vector2; 
var facingRight = true;
var velocity : float = 0.03f; 
var target : Vector2;
var startTime : float;
var placeToGo : float; 

var anim : Animator; 

function FindTargetPoint() : Vector2 {
	pointClicked = Input.mousePosition;
	return Vector2(pointClicked.x, pointClicked.y);
}

function Start () {
	anim = GetComponent("Animator"); 
	startTime = Time.time; 
	placeToGo = transform.position.x;
}

function Update () {
	if (placeToGo > transform.position.x + 0.03){
		if(!facingRight) { Flip();}
		anim.SetFloat("Speed", 5);
		transform.position.x += 0.03;}
	else if (placeToGo < transform.position.x - 0.03){
		if(facingRight) { Flip();}
		anim.SetFloat("Speed", 5);
		transform.position.x -= 0.03;
		}
	else { anim.SetFloat("Speed", -1); }
	
	
	if (Input.GetMouseButtonDown(0)){ 
		var pixVal = Input.mousePosition;
		var gameX = Camera.main.ScreenToWorldPoint(pixVal).x;
		placeToGo = gameX;
	
	} 
	
}

// change from weird Pixel sizing to -5 to 5 grid system
function changeFromPixel(pixelX : float) : float {
	
	pixelX = pixelX / Screen.width; 
	return pixelX - 5; 
}

function Flip() {
	facingRight = !facingRight; 
	var theScale : Vector2 = transform.localScale;
	theScale.x *= -1; 
	transform.localScale = theScale;
}
