document.addEventListener('DOMContentLoaded', () => {
  
  // FOOTER SECTION                          
  const today = new Date();
  const thisYear = today.getFullYear();
  const myName = document.title;
  const footer = document.querySelector('footer');
  const copyright = document.createElement('p');
  copyright.innerHTML = `&copy; ${myName} ${thisYear}`;
  
  footer.appendChild(copyright);
  
  
  // SKILLS SECTION (array)
  const skills = [ "Tenacity", "Pizzazz", "Laying in sunbeams like a cat", "JavaScript", "HTML5", "CSS" ];
  const skillsSection = document.getElementById('skills');
  const skillsList = skillsSection.querySelector('ul');
  
  // Add array elements to the unordered list using a for loop
  for (let i = 0; i < skills.length; i++ ) {
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    
    skillsList.appendChild(skill);
  }
  
  
  //EXPERIENCE SECTION (array)
  const experience = [ "Intro to Computer Programming, Code the Dream", "Job 1", "Job 2", "Job 3", "Job 4", "Job 5" ];
  const experienceSection = document.getElementById('experience');
  const experienceList = experienceSection.querySelector('ul');
  
  // Add array elements to the unordered list using a for loop
  for (let i = 0; i < experience.length; i++ ) {
    const exp = document.createElement('li');
    exp.innerText = experience[i];
    
    experienceList.appendChild(exp);
  }
  
  
  
  
  // MESSAGE SECTION
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
    
    
    // Create new li for the message; add .msg to make the class of each li "msg"
    const newMessage = document.createElement('li');
    newMessage.classList.add('msg');
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>${message}</span>`;
    
    
    //  Uncomment to add edit button:
    //  const editButton = document.createElement('button');
    //  editButton.setAttribute('type', 'button');
    //  editButton.innerText = 'edit';
    //  newMessage.appendChild(editButton);
    
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
    
    // Hide message section if no messages
    if (messageList.children.length === 0) {
      messageSection.style.display = 'none';
    } else {
      messageSection.style.display = 'block';
    }
  
  });
  
  
  // Add projects dynamically to section:
  fetch('https://api.github.com/users/Hannahlyzer/repos')        
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('This is awkward:', response.statusText);
      }
    })
    .then((repositories) => {
      const projectSection = document.getElementById("projects");
      let projectList = projectSection.querySelector("ul");
      projectList.className = 'listofthings verticallist';
      
      
      for (let i = 0; i < repositories.length; i += 1) {
        let project = document.createElement("li");
          
        let repoLink = document.createElement("a");
        repoLink.id = `link${[i]}`;
        repoLink.href = repositories[i].html_url;
        repoLink.innerText = repositories[i].name;
        repoLink.target = "_blank";
        
        let repoDescription = document.createElement("p");
        repoDescription.innerText = repositories[i].description;
        
        //  Attempting to change projects <p> element (repoDescription) color when <a> is clicked to maintain pretty contrast:
        //  repoLink.addEventListener("click", function () {
        //  console.log("Link clicked");
        //  var paragraph = document.querySelector(`.par${[i]}`);
        //  repoLink.classList.toggle("clicked");
        
        
        //  Simple way to add date(first attempt):
        //  let repoDate = document.createElement("p");
        //  let uglyDate = new Date(repositories[i].created_at);
        //  let prettyDate = uglyDate.toDateString();
        //  repoDate.innerText = `Created on: ${prettyDate}`
        
        //  More complicated (but prettier) way to add date:
        const format = { year: 'numeric', month: 'long', day: 'numeric' };
        let createdAt = new Date(repositories[i].created_at);
        let formattedDate = createdAt.toLocaleDateString(undefined, format);
        let repoDate = document.createElement("p");
        repoDate.innerText = `Created on: ${formattedDate}`;
        
        project.appendChild(repoLink);
        project.appendChild(repoDescription);
        project.appendChild(repoDate);
        
        projectList.appendChild(project);
      }
    });
});

// END
  
  

 

// Attempt at edit button function:
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
