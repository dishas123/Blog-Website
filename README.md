<h1>CodeCraft Chronicles – Student Blog Platform</h1>

<b>CodeCraft Chronicles</b> is a full-stack MERN application built to support students preparing for software engineering internships and placements. It allows users to sign up, log in, and create, edit, or delete blog posts across several preparation categories including DSA, Web Development, CS Fundamentals, Resume Building, and Aptitude.

The aim of this platform is to help students share their experiences, roadmaps, and learning strategies, so others can learn from their journeys and grow together.

<br>

<h2>Features</h2>

<ul>
  <li><b>User Authentication</b><br>
    - Signup and Login using JWT-based authentication<br>
    - Passwords securely hashed using Bcrypt
  </li>
  <li><b>Blog CRUD Operations</b><br>
    - Create, read, update, and delete blogs
  </li>
  <li><b>Protected Routes</b><br>
    - Only authenticated users can modify content
  </li>
  <li><b>Blog Categories</b><br>
    - DSA<br>
    - Web Development<br>
    - CS Fundamentals<br>
    - Resume Building<br>
    - Aptitude
  </li>
  <li><b>User Comment Option</b><br>
    -Users can comment on others' blog posts
  </li>
   <li><b>Image upload Option</b><br>
    -Users can upload images along with their blog contents.
  </li>
  <li><b>Peer Learning</b><br>
    - Learn from other students' experiences and mistakes
  </li>
</ul>

<br>

<h2>Tech Stack</h2>

<b>Frontend</b><br>
- React.js<br>
- Material-UI (MUI)<br>
- Axios<br><br>

<b>Backend</b><br>
- Node.js<br>
- Express.js<br>
- MongoDB with Mongoose<br>
- JSON Web Tokens (JWT)<br>
- Bcrypt<br>

<br>

<h2>Setup Instructions</h2> <br>

<b>Clone the repository</b><br>

git clone https://github.com/dishas123/CodeCraft-Chronicles.git<br>
cd Blog-Website<br>
<b>Install dependencies</b><br><br>

<b>Backend</b> <br>
cd server <br>
npm install<br>
<b>Frontend</b> <br>


cd client<br>
npm install<br>
<b>Configure Environment Variables</b><br>
Create a .env file in the server directory and add:<br>


ACCESS_SECRET_KEY=yourAccessSecret <br>
REFRESH_SECRET_KEY=yourRefreshSecret <br>
MONGODB_URI=yourMongoDBURI <br>
<b>Run the Application</b><br><br>

<b>Start the backend</b> <br>


cd server <br>
npm start <br>
<b>Start the frontend</b> <br>


cd client <br>
npm start <br>

<h2> Website Output screenshots: </h2>  <br>
![image](https://github.com/user-attachments/assets/8ed419fc-ba2d-4c11-afa8-6793fb842d5a)  <br> <br>

![image](https://github.com/user-attachments/assets/56b62a2f-e31f-46f5-b38e-676bfce144ea)  <br>
![image](https://github.com/user-attachments/assets/c20ae092-7cc0-411a-ab8f-72f6955412c1)  <br>
![image](https://github.com/user-attachments/assets/399084c9-2205-4529-a70c-bc43d18e73dc)  <br>


![image](https://github.com/user-attachments/assets/f51a8927-812c-4ba1-b92a-adaccd64d5e6) <br>




