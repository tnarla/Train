#pragma strict

var character : Rigidbody2D; 
var pointClicked : Vector2; 
var FacingRight = true;
var velocity : int = 2; 
var target : Vector2;

function FindTargetPoint() : Vector2 {
	pointClicked = Input.mousePosition;
	return pointClicked;
}

function Start () {
	
}

function FixedUpdate () {
	if (Input.GetMouseButtonDown(0)){ 
		MoveTowardsTarget();	
	}
}

function MoveTowardsTarget() {
	var pos = character.position;
	var target = FindTargetPoint();
    var xPosition : float = target.x;
    Debug.Log(xPosition < pos.x);
    Debug.Log(pos.x);
    if(xPosition - character.position.x != 0.6) {
    	//character.AddForce(target, ForceMode2D.Force);
    	if(xPosition > character.position.x) {
   			character.velocity = Vector2(2,0);
    	}
    	else if (xPosition < character.position.x) {
    		character.velocity = Vector2(-2,0);
    	}
    }
    //pos.x = Mathf.Lerp(pos.x, xPosition, velocity * 1);
    character.position = pos;

//	target = FindTargetPoint();
//	character.MovePosition(target.x + velocity * 3);
}