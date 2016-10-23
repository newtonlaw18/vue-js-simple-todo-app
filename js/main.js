var TodoComponent = Vue.extend({
	data: function(){
		return {
			inEditMode: false
		}
	},
	props: ['todo'],
	template: '<div><span v-on:click="clicked"  v-show="! inEditMode">{{ todo.title }}</span><input v-on:keyup.enter="saved" v-model="todo.title" v-show="inEditMode"></div>',
	methods: {
		clicked: function() {
			this.inEditMode = true;

		},
		saved: function() {
			this.inEditMode = false;

		}
	}
});

Vue.component('todo-component', TodoComponent);

var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello',
		todoText: '',
		todos: [
			{ title: 'Build an app' },
			{ title: 'Learn React' },
			{ title: 'Wash my car' },
			{ title: 'Do laundry' },
			{ title: 'Grocery' }
		],
		showTodos: true,
		count: 5
	},
	methods: {
		createTodo: function(){
			var todoText = this.todoText.trim();
			if(todoText){
				this.todos.push({title: todoText});
				this.todoText = "";
				this.count += 1;
			}
		},
		clearTodo: function () {
			this.todoText = "";
		},
		increaseCounter: function () {
			this.count += 1;
		},
		removeTodo: function(index){
			this.todos.splice(index, 1);
			this.count -=1;
		}
	}
});
