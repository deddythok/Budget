BUDGET CONTROLLER

var budgetController = (function() {
	//some code
	}

	return {
		publicTest: function(b) {
			return add(b);
		}
	}
})();


var UIController = (function() {
	//some code
})();


var controller = (function(budgetCtrl,UICtrl) {
	var z = budgetCtrl.publicTest(5);
	return {
		anotherPublic: function() {
			console.log(z);
		}
	}
})(budgetController,UIController);
	