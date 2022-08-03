//select all info 
const btn = document.querySelector("button");
const billValue = document.getElementById("bill-value");
const numOfPeople = document.getElementById("num-of-people");
const service = document.getElementById("serv");
const tipAmount = document.querySelector(".tip-amount");
const tip = document.getElementById('tip')

btn.addEventListener("click", () => {
  // console.log(billValue.value);
  // console.log(numOfPeople.value);
  // console.log(numOfPeople.value)
  let selectedItem = service.selectedIndex;
  const tipResult = (billValue.value * ((service.options[selectedItem].value) / 100)) / numOfPeople.value
  tipAmount.classList.remove('display');
  tip.innerHTML = tipResult.toFixed(2) + " each"
})
