const today = new Date();
const thisYear = today.getFullYear();
const myName = document.title;

//DOM selector to select footer element from dom
const footer = document.querySelector('footer');

//inner text of copyright element displays name, current year (thisYear)
const copyright = document.createElement('p');
copyright.innerText = `${myName} ${thisYear}`;
footer.appendChild(copyright); //add copyright variable to the footer


//Skills section
//skills array
const skills = [ "Tenacity", "Pizzazz", "Laying in sunbeams like a cat", "Beginner Javascript", "Beginner HTML" ];
const skillsSection = document.getElementById('skills');
//query the unordered list specficially
const skillsList = skillsSection.querySelector('ul');

//add array elements to the unordered list using a for loop
for (let i = 0; i < skills.length; i++ ) {
  const skill = document.createElement('li'); //creates new list item element
  skill.innerText = skills[i];
  skillsList.appendChild(skill); //adds the skill variables into the specific list
}