(function(global,doc){
	var main = function(){};
	global.ls = new main();
	main.prototype.show = function(name){
			alert(name);
	};

})(window,document);