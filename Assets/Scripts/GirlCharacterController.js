#pragma strict

var character : Rigidbody2D; 
var pointClicked : Vector2; 
var facingRight = true;
var velocity : float = 2f; 
var target : Vector2;

function FindTargetPoint() : Vector2 {
	pointClicked = Input.mousePosition;
	return Vector2(pointClicked.x, pointClicked.y);
}

function Start () {
	
}

function FixedUpdate () {

	if (Input.GetMouseButtonDown(0)){ 
		MoveTowardsTarget();	
	}
}

// change from weird Pixel sizing to -5 to 5 grid system
function changeFromPixel(pixelX : float) : float {
	pixelX = pixelX / 104; 
	return pixelX - 5; 
}

function Flip() {
	facingRight = !facingRight; 
	var theScale : Vector2 = transform.localScale;
	theScale.x *= -1; 
	transform.localScale = theScale;
}

function MoveTowardsTarget() {
	var characterPosX = character.position.x;
	
	
	var xTargetPosition = changeFromPixel(FindTargetPoint().x);
	
	// Check if the mouse and the character are not in the same position. Then
	// move the character until they are the same. 
    if(xTargetPosition - character.position.x != 0.6) {
    	//character.AddForce(target, ForceMode2D.Force);
    	if(xTargetPosition > characterPosX) {
    		if(!facingRight) { Flip();}
    		//velocity = 2f * (characterPosX - xTargetPosition) / 0.48988 ; 
   			character.velocity = Vector2(2,0);
   			
   			//Mathf.Lerp(characterPosX, xTargetPosition , Time.fixedDeltaTime);
    	}
    	else if (xTargetPosition < characterPosX) {
    		if(facingRight) { Flip();}
    		character.velocity = Vector2(-2,0);
    	}
    }
   
}