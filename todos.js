const todos =[
    {
        text: "order food",
        body: "ring road shop",
    },
    {
        text: "attend movie show",
        body: "swan park",
    },
    {
        text: "design website",
        body: "sunset system",
    },
]
//console.log(todos[1].body);
//console.log(todos[2].text);
//todos.forEach(function (item) {
 //   console.log(item.text);
//});
const findTodo =function (todosData, todoText) {
    return todosData.find(function (item) {
        return item.text === todoText;
    });
};
console.log(findTodo(todos, "design website"));

const findTodo2 =function (todosData, todoText) {
    return Data.findIndex(function (item) {
        return item.text === todoText;
    });
};