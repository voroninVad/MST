const socials = [
  {
    name: "instagram",
    img: "image/social/instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    name: "tiktok",
    img: "image/social/tiktok.png",
    link: "https://www.tiktok.com/",
  },
  {
    name: "linkedIn",
    img: "image/social/linkedIn.png",
    link: "https://www.linkedIn.com/",
  },
  {
    name: "facebook",
    img: "image/social/facebook.png",
    link: "https://www.facebook.com/",
  },
  {
    name: "telegram",
    img: "image/social/telegram.png",
    link: "https://web.telegram.org/k/",
  },
  {
    name: "youtube",
    img: "image/social/youtube.png",
    link: "https://www.youtube.com/",
  },
];

document.getElementById("socials").innerHTML = socials
  .map(
    (el) => `
    <a target="_blank" href="${el.link}">   
        <img src="${el.img}" alt="${el.name}">
    </a>
       
       `
  )
  .join("\n");

document.querySelectorAll(".menu-burger .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("burger-toggle").checked = false;
  });
});

document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const checkbox = document.getElementById("userAccept");

    let valid = true;

    // clear the errors
    document.querySelectorAll(".error-message").forEach(el => el.style.display = "none");
    document.querySelectorAll("input").forEach(el => el.classList.remove("error"));

    // input Name
    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Please enter your name.";
      document.getElementById("nameError").style.display = "block";
      nameInput.classList.add("error");
      valid = false;
    }

    // input Email
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      document.getElementById("emailError").style.display = "block";
      emailInput.classList.add("error");
      valid = false;
    }

    // input checkbox
    if (!checkbox.checked) {
      document.getElementById("checkboxError").textContent = "You must accept the privacy policy.";
      document.getElementById("checkboxError").style.display = "block";
      valid = false;
    }

    if (valid) {
      this.submit();
    }
  });