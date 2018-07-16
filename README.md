# seattle-301n11
*Class lecture repo for seattle-301n11. Lead Instructor: JB Tellez*

<a id="top"></a>
## Code 301

- [Course Overview & Objectives](#courseoverview)
- [Daily Lecture Structure](#lectures)
- [Weekly Overviews](#weeklyoverviews)
- [Course Materials in this Repository](#materials)
- [Course Operations](#operations)
- [Course GitHub Organization & Setup](#organization)
- [Course Grading & Prework; Other Academic Information](#grading)
- [Student Setup & Lab Workflow](#studentsetup)

<a id="courseoverview"></a>
## Course Overview

This course guides students through the collaborative process of developing a single page, dynamic web application, using the MVC (Model-View-Controller) design pattern.

The lab assignments for the course:

- Weeks 1 through 4: Fulfillment, via pair-programming, of TODO items from starter code in a pre-existing blog application that evolves throughout the course. This is a real-world exercise for students in collaboration while learning and extending an existing codebase. These assignments are also a foundation for tackling technical challenges, developing code-reading skills, and gaining knowledge of application architecture.
- Weeks 5 and 6: Working with the same partner each day, writing and deploying a mobile-only book app. This is an exercise in creating full-stack applications which can be added as a personal portfolio item for future employers.

##### Course Learning Objectives

- Students will collaboratively design and create a single page web application from scratch using MVC architecture built with clean HTML, CSS, and JavaScript that satisfies stakeholder requirements captured in user stories.
- Students will have the skills to enroll in a Code 401 course or attain an entry-level website development job or internship by completing the course requirements.


[-top-](#top)

---

<a id="lectures"></a>
## Daily Lecture Structure

Daily lectures typically follow a three-part pattern: code review of the previous day's lab, introduction/demo of new material, and preparation for the daily lab assignment:

##### Code Review

Using the evolving codebase as the starting point for daily lectures, the class will walk through the previous days assignment(s). This portion of lecture will be a discussion-based code review that is inviting and engaging. A typical code review lasts around 30-45 minutes, but can go much longer. It may be necessary to do upwards of 60-90 minutes of code review if the students are not comprehending the previously assigned lab materials.

##### Introduction and Demonstration of New Material

The subsequent portion of lecture will be focused on the introduction of new concepts, often with a series of introductory slides. Sometimes a deeper dive into topics feature live code demos, documentation reviews, and whiteboard diagrams.

##### Preparation for Lab

In weeks 1 through 4, we will open up the codebase in VS Code and walk through the REVIEW and TODO items defined for that day in the starter code, making sure to read through each task description and paraphrase or discuss any confusing terminology.

In weeks 5 and 6, we will review the feature tasks and user stories for the lab assignment and discuss the way these tasks should be incorporated into the book app.

[-top-](#top)

---

<a id="weeklyoverviews"></a>
## Module Overviews

### Module 1: The Front End (Classes 1 - 5)

***The focus of the View module is understanding and constructing the view layer of a basic MVC web application.***

The View module begins in Class 1 with an introduction to mobile-first design and  responsive development principles, and includes the fundamentals of modular CSS, SMACSS, the box model, positioning, layouts, media queries, and design.  In Class 2, using jQuery and the JavaScript constructor pattern, we'll examine DOM selection, traversal, and manipulation; in addition, an introduction to Agile methodology is presented on this day. In Class 3 we'll explore jQuery events, effects, delegation, and principles of code modularity. In Class 4 the practical applications of typography and HTML templates are covered, ES6 template literals are presented, and a 3rd-party templating library is introduced ([Handlebars](http://handlebarsjs.com)). Class 5 is a form-building workshop that brings it all together and gives students an opportunity to apply their skills to the discussion and implementation of a new (old) problem: HTML forms.


### Module 2: The Back End (Classes 6 - 10)

***The focus of this week is on the MVC model layer through the use of Node.js and PostgreSQL, providing students their first hands-on interaction with a full-stack application.***

The Model module begins in Class 6 with an introduction to the use of AJAX and JSON in the contexts of both the Web Request/Response Cycle (WRRC) and locally stored data files. In addition, the ES6 `let` and `const` variable declarations are presented on this day. The primary jQuery AJAX methods used during this week are **$.ajax(), $.get(), $.getJSON()**. Class 7 is an introduction to server-side code using Node.js, NPM, and Express. In Class 8 students are introduced to CRUD, persistence, and database concepts and get their first exposure to PostgreSQL. Class 9 focuses on more advanced SQL topics including joins and relations. Class 10 is an introduction to concepts of functional programming via the use of the JavaScript array methods **.map(), .filter(), .reduce()**.

### Module 3: Full-Stack Applications (Classes 11-15)

***The focus of these final five classes is the creation of a full-stack application using [EJS](http://ejs.co/) for server-side templating. Students will create a book collection, which will eventually include the ability for a user to search for a book by title or author and receive search results from the Google Books API. Students will be able to read and create resources, with exposure to updating and deleting resources in class 14. The module will conclude with a kickoff to final projects.***

Throughout this module, students will work with a partner to build a full-stack book application. Class 11 will focus on a GET request for all resources from a student-seeded database. These resources will be displayed to the user through the use of sever-side templating. Class 12 will focus on selecting a single resource from the list and viewing the details in a new view. Class 13 will focus on building an HTML5 form with method and action attributes so users can manually enter a new resource, which will be added to the database. Class 14 will focus on adding the ability to search by title or author and initiate a request to the Google Books API. The first ten results will be displayed to the user and, through the use of a hidden form, the user can select a single book to be added to the database. Class 15 is for review and the transition into Final Projects.

### Module 4: Final Projects (Classes 16-20)

In teams, students create a full-stack web application that demonstrates command of all of the primary concepts discussed in this course. Overall, the application should make API calls, have dynamic functionality, and display a well-factored full-stack architecture. You act as a guide and support system for students as many project groups hit the occasional roadblocks and need assistance throughout the week. Otherwise, groups should be generally be self-managing. They will need to have proper Agile processes in place in order to keep their project in scope and delivered on time. 
---

<a id="grading"></a>
## Course Grading & Prework; Other Academic Information

##### Grade Weightings

- See the Canvas course for the grade weightings and gradebook.

##### Prework

- Here is the prework GitHub repo link: [Code-301-prework](https://github.com/codefellows/code-301-prework)

##### Attendance

- Students are expected to maintain a 90% attendance rate.

##### Quizzes

- Course quizzes (one per week, published on Friday afternoon to be completed over the subsequent weekend) are administered through Canvas.

##### One On Ones

- The instructor will do one-on-one meetings with each student during Week 3 and possibly also during Week 6.

##### Reading Assignments

- Reading is one of the primary language-learning processes that students will utilize to develop their skills. Each day, one or more reading assignments is due before the start of lecture. Students are expected to make at least one observation and ask a question to promote curiosity and class discussion. Their submission is completed by them and graded within the Canvas course. The reading submissions in Canvas are by default setup to be graded with either a ‘complete’ or ‘incomplete’ mark, and as a result, the late submission policy is not in effect for reading assignments.


[-top-](#top)

---

<a id="studentsetup"></a>
## Student Setup & Lab Workflow

The README for the first lab assignment has detailed instructions for students in setting up their local directories on their laptops and also instructions in pair-programming process.

[-top-](#top)