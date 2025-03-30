// 1. recursive function
function expo(num, power, cb) {
  if (power === 0) return 1;
  if (power === 1) return num;
  return cb(num, expo(num, power - 1, cb));
}

const a = expo(5, 3, (num, result) => num * result);
const b = expo(2, 4, (num, result) => num * result);
const c = expo(1, 0, (num, result) => num * result);
console.log(a, b, c);

// 2. fetch function
function postCards(title, txt) {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  const h2 = document.createElement("h2");
  const text = document.createElement("p");
  card.appendChild(h2);
  card.appendChild(text);
  h2.innerText = title;
  text.innerText = txt;
  document.body.appendChild(card);
}

async function createPosts() {
  try {
    const jsonData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await jsonData.json();
    data.forEach((el) => {
      return postCards(el.title, el.body);
    });
  } catch (error) {
    console.log(error);
  }
}
createPosts();

// 3. deepCopy fucntion
function deepCopy(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj))
      reject("Not an object");
    const copy = JSON.parse(JSON.stringify(obj));
    resolve(copy);
  });
}

const user = {
  name: "Alex",
  grades: {
    quizz: 30,
    assigments: 50,
  },
};

const user2 = "Programming is fun";

async function createCopy(obj) {
  try {
    const copy = await deepCopy(obj);
    console.log(copy);
  } catch (error) {
    console.log(error);
  }
}

createCopy(user);
createCopy(user2);
createCopy();
