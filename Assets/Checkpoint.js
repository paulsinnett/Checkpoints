#pragma strict

static var current: Checkpoint = null;

function OnTriggerEnter (other : Collider) {

	if (other.CompareTag("Player")) {
	
		if (current != this) {
		
			current = this;

			SaveState.SaveAll();
		}
	}
}
