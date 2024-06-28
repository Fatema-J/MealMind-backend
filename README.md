# MealMind Backend🥗🍛

### Team Members

- Fatema Aljonaid - [Github](https://github.com/Fatema-J) | [Linkedin](https://www.linkedin.com/in/fatema-aljonaid/)
- Hawraa Alattar - [Github](https://github.com/hawraalattar) | [Linkedin](https://www.linkedin.com/in/hawraalattar/)
- Jenan Alawadhi - [Github](https://github.com/jenanalawadhi1) | [Linkedin](https://www.linkedin.com/in/jenan-alawadhi/)

---

### Overview

![MealMind Logo](./images/logo.jpg)

**_MealMind_** is an innovative web application designed to create personalized diet plans for users. By leveraging artificial intelligence, the app tailors meal recommendations based on user responses to a questionnaire. Whether you’re aiming for weight loss, muscle gain, or overall health improvement, our app has you covered.

---

### Key Features

1. **Personalized Plan:** Answer a few questions, and MealMind generates personalized meal plans that align with your goals.
2. **Publish and Share:** Post about your plans and share your experience with the community.
3. **Community Interaction:** Other users can comment on your posts, share tips, encouragement, and success stories within the app.

---

### Getting Started

1. Clone both [backend](https://github.com/Fatema-J/MealMind-backend) and [frontend](https://github.com/jenanalawadhi1/MealMind-FrontEnd) repositories.
   - `git@github.com:Fatema-J/MealMind-backend.git`
   - `git@github.com:jenanalawadhi1/MealMind-FrontEnd.git`
2. Install dependencies for each app (`npm install`).
3. Set up your MongoDB database.
4. Create .env file in the backend repository contains these varaibles

```
MONGODB_URI=<connection to mongodb>
APP_SECRET=<random String>
SALT_ROUNDS=<Number>
GROQ_API_KEY=<api key for groq>
```

5. Run the front-end and back-end servers.
6. Access the app locally.

---

### Technologies Used

- Front-end: **React**
- Back-end: **Node.js, Express.js**
- Database: **MongoDB**
- Deployment: **Render, Surge**
- Project Management: **Trello, Slack**
- Designing Phase: **Canva**
  - [component hierarchy diagram](https://www.canva.com/design/DAGIbB5B3cc/hdEzlXEDCSl5Q7BdZt0lig/edit?utm_content=DAGIbB5B3cc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
  - [wireframe](https://www.canva.com/design/DAGHwsnK8KQ/zjGfQ2WnddJBScql7dDwhg/edit)
  - [ERD](https://www.canva.com/design/DAGHw-wdAdw/ciKQi4I4dDn5z2gQ7BjbNw/edit?utm_content=DAGHw-wdAdw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

### Deployment and Live Demo

- [MealMind deployed website](https://mealmind.surge.sh/)
- [Trello board](https://trello.com/b/eIbm4xlp/mealmind)
- Screenshots:
  ![Welcome Page](./images/MealMind%20UI.png)
  ![Login Page](./images/MealMind%20Login%20UI.png)

---

### Additional Features

- [x] Dark Theme
- [x] Different plan categories (Vegan, Keto, Gluten-free.. etc)
- [ ] Upload image by the user for the post
- [x] Display random picture for each plan in My Plan page
- [x] Adding a feature of different units to be selected for both Height (cm/ ft) and Weight (kg/ lbs)
- [ ] Track user progress in the plan
- [ ] Search for the plan

---

### Credits

- Our Great Instructors at GA, to debug and explain parts we got stuck in.
- [promptingguide](https://www.promptingguide.ai/) to engineer our prompts for the API
- [groq](https://groq.com/) the AI api to generate customized plans
- [StackOverFlow](https://stackoverflow.com/), [GeeksforGeeks](https://www.geeksforgeeks.org/), [W3Schools](https://www.w3schools.com/) to solve issues in the code
- [Ezgif](https://ezgif.com/) to remove the background of the "loading" gif
- Loading GIF from [demilked](https://www.demilked.com/gif-animations-replace-loading-screen/)
