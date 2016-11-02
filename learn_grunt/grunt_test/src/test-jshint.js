(function(window, undefined){
	function add(a, b) {
		var c = 1;
		a = a + c; // c 没有定义
		return a + b; // 这里没写分号
	}
	add(10,100);
})(window);