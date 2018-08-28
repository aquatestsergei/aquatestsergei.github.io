window.onload = function() {
     movement ();
}

const /*fish = document.getElementById('fish'),*/
	predator = document.getElementById('predator');
	
function movement() {

	let moveUp = 'translateY(-1px)',
		moveRight = 'translateX(1px)',
		moveDown = 'translateY(1px)',
		moveLeft = 'translateX(-1px)';
	let arr = [moveUp, moveRight, moveDown, moveLeft];

	setInterval (
    	function () {
    					predator.style.transform += arr[Math.floor(Math.random() * arr.length)];
    				}, 
    				10
    			);
}