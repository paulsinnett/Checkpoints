#pragma strict

import System.Collections.Generic;

private var trigger : Trigger;
private var savedState : boolean = true;
private static var list : List.<SaveState> = new List.<SaveState>();

function Start () {

	trigger = GetComponent.<Trigger>();
	list.Add(this);
}

function ResetFromSaved () {

	trigger.SetState(savedState);
}

function Save () {

	savedState = trigger.GetState();
}

static public function SaveAll() {

	for (var state in list) {
	
		state.Save();
	}		
}

static public function ResetAll() {

	for (var state in list) {
	
		state.ResetFromSaved();
	}
}
