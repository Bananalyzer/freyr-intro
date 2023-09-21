document.addEventListener('DOMContentLoaded', () => {

  const today = new Date();
  const thisYear = today.getFullYear();
  const myName = document.title;
  
  //DOM selector to select footer element from dom
  const footer = document.querySelector('footer');
  
  //inner text of copyright element displays name, current year (thisYear)
  const copyright = document.createElement('p');
  copyright.innerHTML = `&copy; ${myName} ${thisYear}`;
  footer.appendChild(copyright); //add copyright variable to the footer
  
  
  //Skills section
  //skills array
  const skills = [ "Tenacity", "Pizzazz", "Laying in sunbeams like a cat", "JavaScript", "HTML5", "CSS" ];
  const skillsSection = document.getElementById('skills');
  //query the unordered list specficially
  const skillsList = skillsSection.querySelector('ul');
  
  //add array elements to the unordered list using a for loop
  for (let i = 0; i < skills.length; i++ ) {
    const skill = document.createElement('li'); //creates new list item element
    skill.innerText = skills[i];
    skillsList.appendChild(skill); //adds the skill variables into the specific list
  }
  
  
  //Experience section
  //experience array
  const experience = [ "Intro to Computer Programming, Code the Dream", "Job 1", "Job 2", "Job 3", "Job 4", "Job 5" ];
  const experienceSection = document.getElementById('experience');
  //query the unordered list specficially
  const experienceList = experienceSection.querySelector('ul');
  
  //add array elements to the unordered list using a for loop
  for (let i = 0; i < experience.length; i++ ) {
    const exp = document.createElement('li'); //creates new list item element
    exp.innerText = experience[i];
    experienceList.appendChild(exp); //adds the skill variables into the specific list
  }
  
  
  
  
  
  const messageForm = document.getElementsByName('leave_message')[0];
  const messageSection = document.getElementById('messages');
  const messageList = messageSection.querySelector('ul');
  
  messageForm.addEventListener('submit', (e) => {
    
    //Prevent page from refreshing when form is submitted
    e.preventDefault();
    
    //Create variables to represent different form field inputs
    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const message = e.target.usersMessage.value;
    
    
    // Create new li for the message. Adding .msg should make the class type of each li "msg".
    const newMessage = document.createElement('li');
    newMessage.classList.add('msg');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    
  
    
    
  //  //Add edit button
  //  const editButton = document.createElement('button');
  //  editButton.setAttribute('type', 'button');
  //  editButton.innerText = 'edit';
  //  newMessage.appendChild(editButton);
    
  //  Trying to hide message section when no messages
  if (messageList.children.length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }  
    
    
  
  
  
    //Add remove button
    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.innerText = 'Remove';
    newMessage.appendChild(removeButton);
    
  //set event handler to make the remove button work
  removeButton.addEventListener('click', (e) => {
    const entry = e.target.parentNode;
    entry.remove();
    
    //Check to see if messages section should be hidden again
   if (messageList.children.length === 0) {
      messageSection.style.display = 'none';
   }
  });
  
  
    
    
    messageList.appendChild(newMessage);
    
    // Reset form fields to empty
    messageForm.reset();
    
    
    
    if (messageList.children.length === 0) {
    messageSection.style.display = 'none';
  } else {
    messageSection.style.display = 'block';
  }
    
  });
  
  });