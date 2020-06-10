![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Redux Feedback Loop

## Description

_Duration: Weekend Project_

This project is a feedback form for students to use to let the educators know how they are feeling. It allows the student to fill in responses to the questions on a range and submit them to the teacher. 

The educators also have an admin view where they can see feedback people have submitted, flag it, and delete it if the feedback is no longer needed to he stored. If a student puts in a low score (below 3) on any of the answers it will automatically flag that answer for the educators to review.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- PostgreSQL

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Built With

- REACT.js
- Node.js
- PostgreSQL
- Material-UI

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at markspannbauer@gmail.com