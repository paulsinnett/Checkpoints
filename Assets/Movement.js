#pragma strict

public var start : Transform;
private var controller : CharacterController;
var speed : float = 1f;

function Start () {

	controller = GetComponent.<CharacterController>();
	Reset();
}

function Update () {

	var horizontal : float = Input.GetAxis("Horizontal");
	var vertical : float = Input.GetAxis("Vertical");
	var movement : Vector3 = new Vector3(horizontal, 0f, vertical);
	controller.Move(movement * Time.deltaTime * speed);
}

function Reset () {

	if (Checkpoint.current == null) {
	
		transform.position = start.position;
		
	} else {
	
		transform.position = Checkpoint.current.transform.position;
	}
}