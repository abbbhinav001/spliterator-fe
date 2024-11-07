import Header from "../../components/common/header/Header";
import "./Home.css";
import { useEffect } from "react";

export default function Home() {
  function openPage(pageName, elmnt, color) {
    // Hide all elements with class "tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    // Add the specific color to the button used to open the tab content
    // elmnt.style.backgroundColor = color;
  }

  useEffect(() => {
    // Get the element with id "defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="content-container">
        <button
          className="tablink"
          onClick={() => openPage("Home", this, "red")}
        >
          Home
        </button>
        <button
          className="tablink"
          onClick={() => openPage("News", this, "green")}
          id="defaultOpen"
        >
          News
        </button>
        <button
          className="tablink"
          onClick={() => openPage("Contact", this, "blue")}
        >
          Contact
        </button>
        <button
          className="tablink"
          onClick={() => openPage("About", this, "orange")}
        >
          About
        </button>

        <div id="Home" className="tabcontent">
          <h3>Home</h3>
          <p>Home is where the heart is..</p>
        </div>

        <div id="News" className="tabcontent">
          <h3>News</h3>
          <p>Some news this fine day!</p>
        </div>

        <div id="Contact" className="tabcontent">
          <h3>Contact</h3>
          <p>Get in touch, or swing by for a cup of coffee</p>
        </div>

        <div id="About" className="tabcontent">
          <h3>About</h3>
          <p>Who we are and what we do</p>
        </div>
      </div>
    </div>
  );
}
