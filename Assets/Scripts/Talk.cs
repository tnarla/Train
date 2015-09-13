using UnityEngine;
using System.Collections;
using UnityEngine.UI; 


public class Talk : MonoBehaviour {

	
	public GameObject objectToTalkTo ;
	public GameObject dialogue;
	public Font font; 
	public Text talk; 
	public GameObject interactionWindow;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown() {
		interactionWindow.SetActive (false);
		if (objectToTalkTo.tag == "triangle") {
			dialogue.SetActive(true);
			talk.text = "Why would I talk to a triangle?"; 

		}


	}


}
