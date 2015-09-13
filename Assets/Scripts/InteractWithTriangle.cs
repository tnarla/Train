using UnityEngine;
using System.Collections;

public class InteractWithTriangle : MonoBehaviour {

	public GameObject interactionWindow;

	// Use this for initialization
	void Start () {
		interactionWindow.SetActive (false);
		
		StartCoroutine(OnMouseExit());

	}


	
	// Update is called once per frame
	void Update () {
	
	}

	void OnMouseDown(){
		interactionWindow.SetActive (true);
	}

	IEnumerator OnMouseExit(){
		
		yield return new WaitForSeconds (2);
		interactionWindow.SetActive (false);

	}
	
}
