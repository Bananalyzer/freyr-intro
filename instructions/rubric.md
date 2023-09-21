# Grading Rubric

## Overview

This ten-week project guides students through building their own personal portfolio website. There are some general requirements (see below) but the assignment is purposefully open-ended to showcase each student's creativity.

## Requirements

- [X] Project is published on public GitHub repository
- [X] Repository includes one `index.html` file at root-level (same level as the instructions folder)
- [X] Repository includes one or more `.js` files, linked properly in the html file
- [X] Repository includes one or more `.css` files, linked properly in the html file
- [X] Webpage contains header navigation menu with the following:
  - [X] Student's name
  - [X] Link to "About" section
  - [X] Link to "Experience" section
  - [X] Link to "Skills" section
  - [X] Link to "Projects" section
  - [X] Link to "Leave a Message" section
  - [X] OPTIONAL: Link to "Contact Me" section (if email and social media links aren't in your footer)
- [X] Webpage contains "About" section with the following:
  - [X] Level-two heading
  - [X] One or more paragraphs of text
- [X] Webpage contains "Experience" section with the following:
  - [X] Level-two heading
  - [X] List of previous work experience in a styled grid or flexbox layout; OR
  - [ ] One or more paragraphs of text (if student has no previous work experience)
- [X] Webpage contains "Skills" section with the following:
  - [X] Level-two heading
  - [X] List of skills in a styled grid copyor flexbox layout (inserted via JavaScript)
- [X] Webpage contains "Projects" section with the following:
  - [X] Level-two heading
  - [X] List of public repositories retrieved from GitHub API via Fetch
- [X] Webpage contains "Leave a Message" section with the following:
  - [X] Level-two heading
  - [X] Form with "Name", "Email Address", and "Message" fields
  - [X] Submit button
  - [X] Form submit event listener that adds message to list (see "Messages" section)
- [X] Webpage contains "Messages" section with the following:
  - [X] Level-two heading
  - [X] List of messages (see "Leave a Message" form) in a styled grid or flexbox layout; each list item has the following:
    - [ ] Message text
    - [ ] Name of message author with "mailto" link to email address
    - [ ] "Remove" button that deletes message from list
- [X] Webpage contains footer with the following:
  - [X] Copyright text with current year (inserted via JavaScript)
  - [ ] OPTIONAL: Email link and Social media links (e.g. LinkedIn, GitHub, etc.) (if you do not have a "Contact Me" section)
- [X] Webpage layout adjusts responsively for various devices sizes (mobile, tablet, desktop) this means at least one element should have at least one change made to it for each device size

## OPTIONAL Stretch Goals
Stretch goals are additional things you can do with your portfolio to make it more your own and further your developer skills.  NONE of these are required to advance to the next class, but any/all of these are recommended to incorporate if you intend to use this portfolio as your professional portfolio for applying for jobs.
- [X] Use a font-family from Google fonts
- [X] Make your navigation "sticky" or "fixed" on the page as you scroll
- [ ] Use CSS grid in one or more areas of your site
- [ ] Make a "hamburger menu" to minimize your navigation on smaller devices
- [ ] Add a button to toggle your site to dark mode
- [X] Transform your project list into clickable links that take the user to the repository
- [X] Display additional information about each of the repositories such as created date, last modified date, description, etc.
- [X] Customize the styling of your projects list
- [ ] Chain a catch function to your API fetch to handle errors
- [X] Hide the messages section and it's header if there are no messages
- [ ] Create an "edit" button for each message so the user can change the information they originally put in the Leave A Message form
- [ ] Use icons or images on your page (be sure to include alt attributes for accessibility)

## Example

Here is an example portfolio that demonstrates all the requirements above: <a href="https://intro-to-programming-ethompson.netlify.app/" target="_blank">View Example Portfolio</a>

---

Created by [Code the Dream](https://www.codethedream.org)
