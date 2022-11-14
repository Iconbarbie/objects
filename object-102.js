//using functions in objects
let myBook1 = {
    title: "Harry Potter",
    author: "JK Rowlings",
    pagecount: 600,
};

let myBook2 = {
    title: "Safe Harbour",
    author: "Daniella Steel",
    pagecount: 700,
};

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
    };
};
let bookSummary = getSummary(myBook1);
console.log(bookSummary.summary);

let getSummary2 = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
    };
};
let bookSummary2 =getSummary2(myBook2);
console.log(bookSummary2.summary);
