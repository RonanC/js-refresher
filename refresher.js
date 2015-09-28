/*var a = 1;
var b = "Hello, world!";
var c = 1.234;
var d = null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

function test1(x, y) {
	return (x + y) * (x - y);
}

console.log(test1(2, 3));

var test2 = function(x, y) {
	return (x + y) / (x - y);
};

console.log(test2(2, 3));

var car = {
	make: "Skoda", model: "Octavia"
};

console.log("The car is a " + car.make + " " + car.model + ".");

var van = {
	make: "Ford", model: "Transit", full_name: function() {
		return this.make + " " + this.model;
	}
};

console.log("The van is a " + van.full_name() + 	".");

var numbers = [1,2,3,4];

for (var i = 0; i < numbers.length; i++) {
	console.log(i * i);
}

if (1 < 2) {
	console.log("The world is OK.");
} else {
	console.log("The world is not OK.");
}
*/



// do stuff
function doStuff(number){
	number += 2;
	number *= number;
	return number;
}

console.log("doStuff: " + doStuff(8));

// even numbers from 1 to 60 printed to screen
var numbers = [];

for (var i = 0; i < 60; i++) {
	if (i % 2 === 0) {
		numbers.push(i);
	}
}

for (var i = 0; i < numbers.length; i++) {
	console.log((i+1) + ": " + numbers[i]);
	console.log(doStuff(numbers[i]) + "\n");
}

// create connection object
var connection1 = {
	ip_address: "",
	port: 0,
	change_port: function (port_num){
		this.port = port_num;
		return "changed port number to " + port_num;
	},
	get_port: function (){
		return this.port;
	}
};
console.log(connection1.get_port());
console.log(connection1.change_port(8800));
console.log(connection1.get_port());

// constructor
var connections = [];

function connection(ip, port){
	this.ip = ip;
	this.port = port;
	this.toString = function(){
		return "ip: " + this.ip + "\nport: " + this.port;
	};
}

for (var i = 0; i < 100; i++) {
	connections[i] = new connection("127.0.0."+(Math.floor(Math.random() * 255)+1), (Math.floor(Math.random() * 9000)+1));
}

//console.log(Math.floor(Math.random()* 10)+1);

for (var i = 0; i < connections.length; i++) {
	console.log((i+1) + ": \n" + connections[i].toString() + "\n");
}
