window.onload = function() {
     movement ();
}

const  /*fish = document.getElementById('fish'),*/
	predator = document.getElementById('predator');
	
function movement() {

	let moveUp = 'translateY(-10px)',
		moveRight = 'translateX(10px)',
		moveDown = 'translateY(10px)',
		moveLeft = 'translateX(-10px)';
	let arr = [moveUp, moveRight, moveDown, moveLeft];

	setInterval (
    	function () {
    					predator.style.transform += arr[Math.floor(Math.random() * arr.length)];
    				}, 
    				10
    			);
}