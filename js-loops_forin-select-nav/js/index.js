console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");

 // --v--to give the array a variablle name --v--
select.name = "languages";


// --v-- write/change code here --v--



for (const language in languages) {
const option = document.createElement("option");
// option.value = language;
  option.textContent = languages[language];
  select.appendChild(option);
}

main.append(select);






// --^-- write/change code here --^--



// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");

navElement.append(ul);
main.append(navElement);

// --v-- write/change code here --v--
nav.name ="navigation"
for (const key in nav) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.href = nav[key].href;
  anchor.textContent = nav[key].text;
  listItem.appendChild(anchor);
  ul.appendChild(listItem);
}

  





// --^-- write/change code here --^--
