import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Home Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Profile() {
  return (
    <>
      <h1>Kartik Dogra</h1>
      <h3>Experiment 3.c</h3>
      <img src="image.jpeg" width= "250px" height= "350"alt=""  />
    </>
  );
}

function DashBoard() {
  return (
    <>
      <h2>HTML</h2>
      <h2>CSS</h2>
      <h2>React</h2>
      <h2>Javascript</h2>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
