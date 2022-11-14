const notes =[
    {
        title: "My next trip",
        body: "awesome spain it is",
    },
    {
        title: "attend book session",
        body: "london arts",
    },
    {
        title: "book iam reading",
        body: "safe harbour",
    },
    {
        title: "javascript conference",
        body: "amsterdam center, netherlands",
    },
    {
        title: "formula1",
        body: "qatar rally",
    },
]
//console.log(notes[3].body);
//notes.forEach(function (item) {
   // console.log(item.body); 
//});

//const findNote =function (notesData, noteTitle) {
   // return notesData.find(function (item) {
       // return item.title === noteTitle;
   // });
//};[]
//console.log(findNote(notes, "attend book session"));

//const findNote2 =function (0notesData, noteTitle) {
   // return notesD[ata.findIndex(function (item) {
       // return item.title === noteTitle;
    //});
//};
//console.log(findNote2(notes, "attend book session"));

const findNote2 = function (notesData, query) {
    return notesData.filter(function (item) {
        return (
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.body.toLowerCase().includes(query.toLowerCase())
        );
    });
};
console.log(findNote2(notes, "ne"))

function outer() {
    let hero = "black panther";

    function inner() {
        let cryForHelp = `${hero} ,please save me`;
        console.log(cryForHelp);
    }
    inner()
}
// to invoke function is also a parent scope
outer()