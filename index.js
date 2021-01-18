const todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
};

// console.log(todo.title);
// console.log(todo['title']);

// Iterating props in an object
for (key in todo) {
    // check if completed
    if (key === 'completed') {
        if (todo.completed) {
            console.log('Todo is completed');
        } else {
            console.log('Todo is NOT completed');
        }
    }
    console.log(`Key is ${key}`);
    console.log(`Value is ${todo[key]}`);
}

// List of todos
// How many I have completed and how many are still open?

// List of open todos
// List of done todos
const todos = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
];


const openTodos = [];
const completedTodos = []; // Array

for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    console.log(todo);

    if (todo.completed) {
        // add to completed todos
        completedTodos.push(todo);
    } else {
        // add to open todos
        openTodos.push(todo);
    }
}
console.log('Open tasks are: ', openTodos.length);
console.log('\n');
console.log('Done tasks are: ', completedTodos.length);