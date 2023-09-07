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
  
  
  
  const messageForm = document.getElementsByName('leave_message')[0];
  
  messageForm.addEventListener('submit', (e) => {
    //Prevent page from refreshing when form is submitted
    e.preventDefault();
    
    //Create variables to represent different form field inputs
    const name = e.target.usersName.value;
    const email = e.target.usersEmail.value;
    const message = e.target.usersMessage.value;
    
    
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    
   
    
    
    //Add edit button
    const editButton = document.createElement('button');
    editButton.setAttribute('type', 'button');
    editButton.innerText = 'edit';
    
    //Add remove button
    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.innerText = 'remove';
    newMessage.appendChild(removeButton);
    
  //set event handler to make the remove button work
  removeButton.addEventListener('click', (e) => {
    const entry = e.target.parentNode;
    entry.remove();
  });
  
    
  
   
  //editButton.addEventListener('click', (e) => {
  //  const button = e.target;
  //  const li = button.parentNode;
  //  const span = li.querySelector('span');
  //  const input = li.querySelector('input');
  //    
  //  if (button.innerText === 'edit') {
  //      
  //      //When edit button is clicked, allow for text input
  //      input.value = span.textContent;
  //      
  //      //Provide original input in text box for editing
  //      input.value = span.textContent;
  //      span.style.display = 'none';
  //      input.style.display = 'inline';
  //      button.innerText = 'save';
  //      
  //      //change edit state to save state (undo the edit button and update textContent)
  //    } else if (button.innerText === 'save') {
  //      span.textContent = input.value
  //      span.style.display = 'inline';
  //      input.style.display = 'none';
  //      button.innerText = 'edit';
  //    }
  //  });
  //
  //  newMessage.appendChild(editButton);
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    
    messageForm.reset();
    
  });
  
  });