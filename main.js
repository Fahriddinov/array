const fruit = ["olma", "Banan", "Gilos", "Shaftoli"];
console.log(fruit);

alert(`Boshlanishda arrayning uzunligi: ${fruit.length}`);

if (confirm(`Sizning arrayingizdan malumotlarni olib tashlamoqchimiz`) === true) {
    fruit.pop();
    alert(`Arrayning uzunligi:  ${fruit.length}`);
    console.log(fruit)
} else {
    alert(`Arrayning uzunligi:  ${fruit.length}`)
    console.log(fruit)
}