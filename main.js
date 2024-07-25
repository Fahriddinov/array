const fruit = ["olma", "Banan", "Gilos", "Shaftoli"];
console.log(fruit);

alert(`Boshlanishda arrayning uzunligi: 4`);

if (confirm(`Sizning arrayingizdan malumotlarni olib tashlamoqchimiz`) === true) {
    alert(`Arrayning uzunligi: 3`);
    fruit.pop();
    console.log(fruit)
} else {
    alert(`Arrayning uzunligi: 4`)
    console.log(fruit)
}