﻿#pragma strict

function OnTriggerEnter(other : Collider) {

	if (other.CompareTag("Player")) {
	
		other.SendMessage("Damage");
	}
}
