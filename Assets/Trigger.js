#pragma strict

private var animator : Animator;

function Start () {

	animator = GetComponent.<Animator>();
}

function OnTriggerEnter (other : Collider) {

	if (other.CompareTag("Player")) {
	
		animator.SetBool("Set", false);
	}
}

public function SetState (state : boolean) {

	animator.SetBool("Set", state);
}

public function GetState () : boolean {

	return animator.GetBool("Set");
}
