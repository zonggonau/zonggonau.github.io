function setIconMobile() {
  let data = [
    {
      id: 1,
      name: "Github",
      icon: "svg/github.svg",
      link: "https://github.com/zonggonau",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "svg/instagram.svg",
      link: "https://www.instagram.com/zongcris/",
    },
    {
      id: 3,
      name: "Linkedin",
      icon: "svg/linkedin.svg",
      link: "https://www.linkedin.com/in/kristovedus-zonggonau-02607787/",
    },
    {
      id: 4,
      name: "Whatsup",
      icon: "svg/whatsapp.svg",
      link: "https://api.whatsapp.com/send?phone=+6281355315427&text=Halo",
    },
  ];
  const iconMobile = document.getElementById("social-media-mobile");
  data.map((item) => {
    iconMobile.innerHTML += `
    <div>
    <a href="${item.link}" class="flex-none w-10 h-10" target="_blank">
      <img src="${item.icon}" class="h-10 w-10">
    </a>
    </div>`;
  });
}
function setIconDekstop() {
  let data = [
    {
      id: 1,
      name: "Github",
      icon: "svg/github.svg",
      link: "https://github.com/zonggonau",
    },
    {
      id: 2,
      name: "Instagram",
      icon: "svg/instagram.svg",
      link: "https://www.instagram.com/zongcris/",
    },
    {
      id: 3,
      name: "Linkedin",
      icon: "svg/linkedin.svg",
      link: "https://www.linkedin.com/in/kristovedus-zonggonau-02607787/",
    },
    {
      id: 4,
      name: "Whatsup",
      icon: "svg/whatsapp.svg",
      link: "https://api.whatsapp.com/send?phone=+6281355315427&text=Halo",
    },
  ];
  const iconDekstop = document.getElementById("social-media-dekstop");
  data.map((item) => {
    iconDekstop.innerHTML += `
      <div>
      <a
            href="${item.link}"
            class="text-white px-3 py-2 rounded-md text-lg font-bold animate-pulse"
            target="_blank"
          >
            <img src="${item.icon}" class="h-8 w-8 text-white" />
          </a>
      </div>`;
  });
}

function setSkill() {
  let data = [
    { id: 1, name: "JavaScript", icon: "icon/javascript.png" },
    { id: 2, name: "HTML", icon: "icon/html.png" },
    { id: 3, name: "CSS", icon: "icon/css3.png" },
    { id: 4, name: "React", icon: "icon/react.png" },
    { id: 5, name: "Node", icon: "icon/node-js.png" },
    { id: 7, name: "MongoDB", icon: "icon/mongodb.png" },
    { id: 8, name: "MySQL", icon: "icon/mysql.png" },
    { id: 9, name: "Git", icon: "icon/git.png" },
    { id: 10, name: "GitHub", icon: "icon/github.png" },
    { id: 11, name: "Bootstrap", icon: "icon/bootstrap.png" },
    { id: 12, name: "Tailwindcss", icon: "icon/tailwind-css.png" },
    { id: 13, name: "Laravel", icon: "icon/laravel.png" },
    { id: 14, name: "PHP", icon: "icon/php.png" },
    { id: 15, name: "Python", icon: "icon/python.png" },
    { id: 16, name: "Codeigniter", icon: "icon/codeigniter.png" },
    { id: 17, name: "React Native", icon: "icon/react.png" },
    { id: 18, name: "Flutter", icon: "icon/flutter.png" },
    { id: 19, name: "Trello", icon: "icon/trello.png" },
    { id: 20, name: "Linux Server", icon: "icon/ubuntu.png" },
    { id: 21, name: "Firebase", icon: "icon/firebase.png" },
    { id: 22, name: "Wordpress", icon: "icon/wordpress.png" },
    { id: 23, name: "Postgresql", icon: "icon/postgresql.png" },
    { id: 24, name: "Docker", icon: "icon/docker.png" },
    { id: 25, name: "AWS", icon: "icon/amazon-aws.png" },
  ];
  const skill = document.getElementById("skill");
  data.map((item) => {
    skill.innerHTML += `
    <div class="flex flex-col space-x-2 items-center pb-10">
    <div class="flex-none w-10 h-10">
      <img src="${item.icon}" class="h-10 w-10" alt="${item.name}" />
    </div>
    <div class="flex-auto p-3">
      <h1 class="text-sm font-bold">${item.name}</h1>
    </div>
  </div>
     `;
  });
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
var themeToggleDarkIconDekstop = document.getElementById(
  "theme-toggle-dark-icon-dekstop"
);
var themeToggleLightIconDekstop = document.getElementById(
  "theme-toggle-light-icon-dekstop"
);

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleLightIconDekstop.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  themeToggleDarkIconDekstop.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");
var themeToggleBtnDekstop = document.getElementById("theme-toggle-dekstop");

// Mobile button mode light or dark
themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

// desktop button mode light or dark
themeToggleBtnDekstop.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleLightIconDekstop.classList.toggle("hidden");
  themeToggleDarkIconDekstop.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
if (hour >= 4 && hour <= 10) {
  document.getElementById("timezone").innerHTML = "Hi, Good Morning";
}
if (hour >= 10 && hour <= 15) {
  document.getElementById("timezone").innerHTML = "Hi, Good Afternoon";
}
if (hour >= 15 && hour <= 18) {
  document.getElementById("timezone").innerHTML = "Hi, Good Evening";
}
if (hour >= 18 && hour <= 24) {
  document.getElementById("timezone").innerHTML = "Hi, Good Night";
}
if (hour >= 0 && hour <= 4) {
  document.getElementById("timezone").innerHTML = "Hi, Good Night";
}

setIconMobile();
setIconDekstop();
setSkill();
