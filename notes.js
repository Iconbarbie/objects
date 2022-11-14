// ARRAY<= a collection of items
const notes = ["note1", "note2","note3"];
//console.log(notes[1]);
//notes[1] ="something";
//notes.forEach(function (item, index) {
   // console.log(`${index} -- ${item}`);
//});

notes.forEach(function (note, position) {
    console.log(note);
    console.log(position);
})