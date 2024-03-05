// 1 - 100 чейинки сандарды чыгаруу (console'го) for loop
let one;
for ( one = 1; one <= 100; one++){
    console.log(one)
}
console.log("birinchi")

// 1 - 100 чейинки жуп(четный) сандарды чыгаруу (console'го) for loop



for (var i=2; i <= 100; i += 2){
   console.log(i) 
}
console.log("ekinchi");









let index = 1;
while (index <=100 ) {
    console.log(index) ;
    index = index +1;
}
   console.log("hallo word");



   let evenNumbers = 1;
   while (evenNumbers <=100 ) {
    console.log(evenNumbers) ;
    evenNumbers = evenNumbers +2;
}
   console.log("ekinchi tapchurma");

   let oddNumbers = 2;
   while (oddNumbers <=100 ) {
    console.log(oddNumbers) ;
    oddNumbers = oddNumbers +2;
}
   console.log("uchunchu tapshurma")

// Создайте цикл, который принимает массив чисел и создает новый массив, в котором каждое число увеличивается на 1

const num = [1, 2, 3, 4,5];
for (let i =0;i < num.length; i++){
    num[i]++;

}
console.log(num)
//  12 hw

const countPositive = (nums) => {
    let res = 0 ;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0){
            res ++;
        }
    }
    console.log(res);
};
countPositive([1 ,2, -2, -5, 4 -9]);
// Создайте цикл, который принимает массив чисел и создает новый массив, в котором каждое число увеличивается на 1

const arr = [1, 2, 3, ]
        arr.forEach(ForEach)

        function ForEach(num) {
            num = num + 2

            console.log(num);
        }


        const numbers = [10, 20, 30];
numbers.forEach(myFunction)

    

function myFunction(item, index, arr) {
  arr[index] = item }
   console.log(numbers + 99);


   
// 
// Создайте функцию findIndex(array,word), которая ищет в массиве строку (в параметре 'word') и возвращает индекс первого появления этой строки. Если ее нет в массиве, верните - 1.
const words = ['green', 'red', 'blue', 'red'];

    console.log(words.findIndex(checkWord));

    function checkWord(word) {
        return word === 'red';
    }