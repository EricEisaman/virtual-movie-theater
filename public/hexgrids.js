//Hexgrid Mesh Defined in JSON
let hgr = {
	"size": 5,
	"cellSize": 10,
	"extrudeSettings": {
		"amount": 3,
		"bevelEnabled": true,
		"bevelSegments": 1,
		"steps": 1,
		"bevelSize": 0.5,
		"bevelThickness": 0.5
	},
	"autogenerated": true,
	"cells": [
		{
			"q": 0,
			"r": 0,
			"s": 0,
			"h": 1,
			"walkable": true,
			"userData": {}
		},
		{
			"q": 0,
			"r": 1,
			"s": -1,
			"h": 1,
			"walkable": true,
			"userData": {}
		},
		{
			"q": 1,
			"r": 0,
			"s": -1,
			"h": 1,
			"walkable": true,
			"userData": {}
		}]
}


let i = window.setInterval(()=>{
  if(window.gameHasBegun){
    let spawnZone = document.querySelector('#spawn-zone-1');
    spawnZone.components.hexgrid.addMesh(hgr);
    let spawnZone2 = document.querySelector('#spawn-zone-2');
    spawnZone.components.hexgrid.addMesh(hgr);
    let spawnZone3 = document.querySelector('#spawn-zone-3');
    spawnZone.components.hexgrid.addMesh(hgr);
    let spawnZone4 = document.querySelector('#spawn-zone-4');
    spawnZone.components.hexgrid.addMesh(hgr);
    let spawnZone5 = document.querySelector('#spawn-zone-5');
    spawnZone.components.hexgrid.addMesh(hgr);
    window.clearInterval(i);
  }
},500);



