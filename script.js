const content = document.getElementById("content");

function loadPage(page) {
  let html = "";
  switch (page) {
    case "home":
      html = `
        <h2>Welcome to Our Single Page Application</h2>
        <p>This project demonstrates how navigation works without reloading the page.</p>
        <p>Use the menu above to explore different sections dynamically.</p>`;
      break;
    case "services":
      html = `
        <h2>Our Services</h2>
        <ul>
          <li>Web Development</li>
          <li>App Design</li>
          <li>UI/UX Consulting</li>
          <li>Maintenance & Support</li>
        </ul>`;
      break;
    case "about":
      html = `
        <h2>About Us</h2>
        <p>We are a team of passionate developers building fast and dynamic web applications using modern technologies.</p>
        <p>This Single Page Application (SPA) is an example of how content can change without a full page reload.</p>`;
      break;
    case "contact":
      html = `
        <h2>Contact Us</h2>
        <p>Get in touch with our team by filling out the form below:</p>
        <form id="contactForm">
          <label>Name:</label><br>
          <input type="text" id="name" required><br><br>
          <label>Email:</label><br>
          <input type="email" id="email" required><br><br>
          <label>Message:</label><br>
          <textarea id="message" required></textarea><br><br>
          <button type="submit">Send</button>
        </form>`;
      break;
    default:
      html = "<h2>Page Not Found</h2>";
  }
  content.innerHTML = html;

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Your message has been sent successfully!");
      form.reset();
    });
  }
}

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
    loadPage(page);
  });
});

loadPage("home");