/* ASSIGNMENT 1: 
Create a website that contains (at least) a button and a text showing the number of times I clicked the button. Every time I click on the button the counter is increased by one.
Example: https://valera-rozuvan.github.io/online-counter/ 
*/

let totalClicks = 0;
const addCount = () => {
  totalClicks += 1;
  let clickText = document.querySelector("h4");
  if (totalClicks === 1) {
    clickText.innerHTML = `You just clicked on the button!`;
  } else if (totalClicks > 10) {
    clickText.innerText = `Okay, clicking ${totalClicks} times is too much... Get a life and stop clicking the button.`;
  } else if (0 < totalClicks < 10) {
    clickText.innerText = `Now you've clicked it ${totalClicks} times!`;
  }
  console.log(totalClicks);
};

const button = document
  .querySelector("button")
  .addEventListener("click", addCount);
