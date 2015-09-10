using UnityEngine;
using System.Collections;

public class InteractWithTriangle : MonoBehaviour {

	public GameObject interactionWindow;

	// Use this for initialization
	void Start () {
		interactionWindow.SetActive (false);
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown(){
		interactionWindow.SetActive (true);
	}
}
