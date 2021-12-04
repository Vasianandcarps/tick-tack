let arr = [
  "А роза упала на лапу Азора",
  "Ого",
  "А Собака боса",
  "Привет, мир",
  "А Собака боса",
  "Лёша на полке клопа нашёл",
  "Я — арка края",
];

function palindrom(value) {
  let v = value.toLowerCase();

  //let res = v.replace(/ /g, "");

  let arrFromStr = v.split("");
  arrFromStr = arrFromStr.filter((val) =>
    val.trim() == "" || val == "—" ? false : true
  );
  //   arrFromStr = arrFromStr.filter((val) => (val == "—" ? false : true));
  console.log(arrFromStr);
  let str = arrFromStr.join("");
  let reversedArrFromStr = arrFromStr.reverse();
  let reversedStr = reversedArrFromStr.join("");
  console.log(str);
  console.log(reversedStr);
  if (str == reversedStr) {
    return document.write(value + "<br>");
  }
}

const palindroms = arr.filter(palindrom);

console.log(palindroms);
