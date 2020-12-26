const bday = document.querySelector(".bday");
const luckyNum = document.querySelector(".lucky-num");
const checkBtn = document.querySelector(".check-btn");
const resultArear = document.querySelector(".result")

const luckCheck = () => {
  const bdayValue = bday.value.split("").map(Number);
  if (bdayValue.length === 8) {
    console.log(bdayValue);
    const total = bdayValue.reduce((num1InArr, addThem) => {
      return num1InArr + addThem;
    });
    const luckyNumber = parseInt(luckyNum.value);
    if (total % luckyNumber == 0) {
        console.log("very lucky");
        resultArear.innerHTML = `<h2>You have a lucky birthday, It attracts luck towards you.</h2>`
    } else {
        resultArear.innerHTML = `<h2>Oh crazy! You are not the person who relies on luck. You are born to work hard and grab that thing what you want.</h2>`
        console.log("same pinch, uh aint lucky. bt uh can alws wrk hrd like me");
    }
    console.log("All good!");
  } else {
    console.log("You entered birthday in wrong format.");
  }
};

checkBtn.addEventListener("click", luckCheck);
