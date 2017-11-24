//Budget Controller

var budgetController = (function() {
	
	var Expense = function(id, description, value) {
		this.id = id;
		this.this = description;
		this.value - value;
	};
	var Income = function(id, description, value) {
		this.id = id;
		this.this = description;
		this.value - value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},  
		totals: {
			exp: 0,
			inc : 0
		}
	};

	return {
		addItem: function(type, des, val) {
			var newItem;

			ID = 0;

			if(type === 'exp') {
				newItem new Expense(ID,des,val);
			} else if { type === 'inc') {
				newItem = new Income(ID,des, val)l
			}

			data.allItems(type). push(newIet)

		}
			
	};

})();


//UI Controller

var UIController = (function() {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
<<<<<<< HEAD
		inputButton: '.add__btn'
	}

=======
		inputBtn: '.add__btn'

	}
>>>>>>> fc1ed3edf2779d643dbd103afa44c42461dba75f
	return {
		getInput: function() {

			return {
			type : document.querySelector(DOMstrings.inputType).value,//Will be either inc or exp
			description : document.querySelector(DOMstrings.inputDescription).value,
			value : document.querySelector(DOMstrings.inputValue).value
			};
<<<<<<< HEAD

		},

		getDOMstrings: function() {
			return DOMstrings;
		}	
=======
		},
		getDOMstrings: function() {
			return DOMstrings;
		}
>>>>>>> fc1ed3edf2779d643dbd103afa44c42461dba75f
	};
})();


//Global App Controller
var controller = (function(budgetCtrl,UICtrl) {

	var setupEventListeners = function() {
<<<<<<< HEAD
		var DOM = UICtrl.getDOMstrings();
		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
		document.addEventListener('keypress', function(event) {
			if(event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	
=======

			var DOM = UICtrl.getDOMstrings();

			document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

			document.addEventListener('keypress', function(event) {
				if(event.keyCode === 13 || event.which === 13) {
					ctrlAddItem();
				}
			});
	};
>>>>>>> fc1ed3edf2779d643dbd103afa44c42461dba75f

	var ctrlAddItem = function() {
		// 1. Get the field input data
		var input = UICtrl.getInput();
                                                         

		//2. Add the item to the budget controller

		//3. Add the new item to the UI

		//4. calculate the budget  

		//5. Display the budget on the UI	}

	};
<<<<<<< HEAD
	
=======

>>>>>>> fc1ed3edf2779d643dbd103afa44c42461dba75f
	return {
		init: function() {
			console.log('Application has started');
			setupEventListeners();
		}
	}

})(budgetController,UIController);

<<<<<<< HEAD
controller.init();
	
=======
controller.init();
>>>>>>> fc1ed3edf2779d643dbd103afa44c42461dba75f
