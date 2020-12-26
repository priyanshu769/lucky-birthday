const bday = document.querySelector(".bday");
const luckyNum = document.querySelector(".lucky-num");
const checkBtn = document.querySelector(".check-btn");
const resultArea = document.querySelector(".result");
const cutBtn = document.querySelector(".cut-btn");

const resultStyle = () => {
  resultArea.classList.add = "hide";
};

window.addEventListener("load", resultStyle);

const luckCheck = () => {
  const bdayValue = bday.value.split("").map(Number);
  if (bdayValue.length == 8) {
    console.log(bdayValue);
    const total = bdayValue.reduce((intNum, addThem) => {
      return intNum + addThem;
    });
    const luckyNumber = parseInt(luckyNum.value);
    if (total % luckyNumber == 0) {
      // cut function for cut btn
      const cutIt = () => {
        console.log("clicked cut btn");
        resultArea.style.display = "none";
        document.querySelector(".play-area").style.display = "";
      };

      // console.log("very lucky");
      // console.log(total);
      resultArea.innerHTML = `<h2>You have a lucky birthday, It attracts luck towards you.</h2>`;
    } else {
      resultArea.innerHTML = `<h2>Oh crazy! You are not the person who relies on luck. You are born to work hard and grab that thing what you want.</h2>`;
      // console.log("same pinch, uh aint lucky. bt uh can alws wrk hrd like me");
    }

    // document.querySelector(".play-area").style.display = "none";

    resultArea.style.display = "";

    // console.log("All good!");
  } else {
    resultArea.innerHTML = `<h2>Oh! THe birthday wan't entered or entered in a wrong format. Tri again.</h2>`;
    // console.log("You entered birthday in wrong format.");
  }
};

checkBtn.addEventListener("click", luckCheck);
// cutBtn.addEventListener("click", cutIt);

/*
cut button to add later (maybe)

CUT BUTTON = <div class="close-btn-conatiner">
<button class="cut-btn" onclick="cutIt()"><i class="fa fa-times-circle"></i></button>
</div>
*/
