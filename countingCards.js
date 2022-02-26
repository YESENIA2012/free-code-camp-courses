let count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count = count;
  } else if (
    card == 10 ||
    card == "J" ||
    card == "Q" ||
    card == "K" ||
    card == "A"
  ) {
    count--;
  }

  var string = " ";
  if (count <= 0) {
    string = " Hold";
    return count + string;
  } else if (count > 0) {
    string = " Bet";
    return count + string;
  } else {
    return "Change Me";
  }
}

cc(3);
cc(7);
cc("Q");
cc(8);
let resultado = cc("A");
console.log(resultado);
