// var budgetController = (function() {
// 	var x = 23;

// 	var add = function(a) {
// 		return x + a;
// 	}

// 	return {
// 		publicTest: function(b) {
// 			console.log(add(b));
// 		}
// 	}
// })();

var fungsiUtama = (function() {
	var a = 1;

	var tambah = function(x) {
		return a + x;
	}
	return {
		publicTest: function(b) {
			console.log(tambah(b));
		}
	}
})();

