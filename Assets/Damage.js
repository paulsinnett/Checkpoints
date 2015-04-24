#pragma strict

private var visual : Renderer;

function Start () {

	visual = GetComponent.<Renderer>();
}

function Damage () {

	visual.enabled = false;
	
	yield WaitForSeconds(1f);
	
	SendMessage("Reset");

	SaveState.ResetAll();	
	
	visual.enabled = true;
}
