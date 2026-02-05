// ===================================
// PORTFOLIO - DEVOPS ENGINEER
// JavaScript Functionality
// ===================================

// ===================================
// SOCIAL MEDIA LINKS
// ===================================

function setSocialLinks() {
  const socialData = [
    {
      id: 1,
      name: "GitHub",
      icon: "svg/github.svg",
      link: "https://github.com/zonggonau",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: "svg/linkedin.svg",
      link: "https://www.linkedin.com/in/kristovedus-zonggonau-02607787/",
    },
    {
      id: 3,
      name: "Instagram",
      icon: "svg/instagram.svg",
      link: "https://www.instagram.com/zongcris/",
    },
    {
      id: 4,
      name: "WhatsApp",
      icon: "svg/whatsapp.svg",
      link: "https://api.whatsapp.com/send?phone=+6281355315427&text=Halo",
    },
  ];

  const socialContainer = document.getElementById("social-links");

  socialData.forEach((social) => {
    const link = document.createElement("a");
    link.href = social.link;
    link.className = "social-link";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", social.name);

    const img = document.createElement("img");
    img.src = social.icon;
    img.alt = social.name;

    link.appendChild(img);
    socialContainer.appendChild(link);
  });
}

// ===================================
// SKILLS DATA & RENDERING
// ===================================

function setSkills() {
  const skillsData = [
    {
      category: "DevOps & CI/CD",
      icon: "🚀",
      skills: [
        { name: "Docker", icon: "icon/docker.png" },
        { name: "Kubernetes", icon: "icon/docker.png" },
        { name: "GitHub Actions", icon: "icon/github.png" },
        { name: "Jenkins", icon: "icon/git.png" },
        { name: "GitLab CI", icon: "icon/git.png" },
        { name: "Git", icon: "icon/git.png" },
        { name: "CircleCI", icon: "icon/git.png" },
      ],
    },
    {
      category: "Cloud Platforms",
      icon: "☁️",
      skills: [
        { name: "AWS", icon: "icon/amazon-aws.png" },
        { name: "Digital Ocean", icon: "icon/digital-ocean.png" },
        { name: "Firebase", icon: "icon/firebase.png" },
        { name: "Heroku", icon: "icon/digital-ocean.png" },
        { name: "Vercel", icon: "icon/digital-ocean.png" },
      ],
    },
    {
      category: "Infrastructure & Automation",
      icon: "⚙️",
      skills: [
        { name: "Linux Server", icon: "icon/ubuntu.png" },
        { name: "Terraform", icon: "icon/ubuntu.png" },
        { name: "Ansible", icon: "icon/ubuntu.png" },
        { name: "Nginx", icon: "icon/ubuntu.png" },
        { name: "Apache", icon: "icon/ubuntu.png" },
        { name: "Shell Script", icon: "icon/ubuntu.png" },
      ],
    },
    {
      category: "Monitoring & Logging",
      icon: "📊",
      skills: [
        { name: "Prometheus", icon: "icon/ubuntu.png" },
        { name: "Grafana", icon: "icon/ubuntu.png" },
        { name: "ELK Stack", icon: "icon/ubuntu.png" },
        { name: "Datadog", icon: "icon/ubuntu.png" },
        { name: "New Relic", icon: "icon/ubuntu.png" },
      ],
    },
    {
      category: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "icon/postgresql.png" },
        { name: "MySQL", icon: "icon/mysql.png" },
        { name: "MongoDB", icon: "icon/mongodb.png" },
        { name: "Firebase", icon: "icon/firebase.png" },
        { name: "Redis", icon: "icon/mongodb.png" },
        { name: "SQLite", icon: "icon/mysql.png" },
      ],
    },
    {
      category: "Programming & Scripting",
      icon: "💻",
      skills: [
        { name: "JavaScript", icon: "icon/javascript.png" },
        { name: "TypeScript", icon: "icon/javascript.png" },
        { name: "Python", icon: "icon/python.png" },
        { name: "PHP", icon: "icon/php.png" },
        { name: "Node.js", icon: "icon/node-js.png" },
        { name: "Bash", icon: "icon/ubuntu.png" },
        { name: "Go", icon: "icon/ubuntu.png" },
      ],
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React", icon: "icon/react.png" },
        { name: "Next.js", icon: "icon/react.png" },
        { name: "Vue.js", icon: "icon/react.png" },
        { name: "HTML", icon: "icon/html.png" },
        { name: "CSS", icon: "icon/css3.png" },
        { name: "Laravel", icon: "icon/laravel.png" },
        { name: "CodeIgniter", icon: "icon/codeigniter.png" },
        { name: "Express.js", icon: "icon/node-js.png" },
        { name: "Bootstrap", icon: "icon/bootstrap.png" },
        { name: "Tailwind CSS", icon: "icon/tailwind-css.png" },
        { name: "WordPress", icon: "icon/wordpress.png" },
        { name: "Strapi", icon: "icon/node-js.png" },
      ],
    },
    {
      category: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "React Native", icon: "icon/react.png" },
        { name: "Flutter", icon: "icon/flutter.png" },
        { name: "Expo", icon: "icon/react.png" },
      ],
    },
    {
      category: "Testing & Quality",
      icon: "🧪",
      skills: [
        { name: "Jest", icon: "icon/javascript.png" },
        { name: "Pytest", icon: "icon/python.png" },
        { name: "PHPUnit", icon: "icon/php.png" },
        { name: "Selenium", icon: "icon/python.png" },
        { name: "Postman", icon: "icon/node-js.png" },
      ],
    },
    {
      category: "Message Queue & Cache",
      icon: "📮",
      skills: [
        { name: "RabbitMQ", icon: "icon/ubuntu.png" },
        { name: "Redis", icon: "icon/mongodb.png" },
        { name: "Kafka", icon: "icon/ubuntu.png" },
        { name: "Memcached", icon: "icon/ubuntu.png" },
      ],
    },
    {
      category: "AI & Productivity",
      icon: "🤖",
      skills: [
        { name: "AI Prompting", icon: "icon/python.png" },
        { name: "ChatGPT", icon: "icon/python.png" },
        { name: "Claude AI", icon: "icon/python.png" },
        { name: "GitHub Copilot", icon: "icon/github.png" },
        { name: "Cursor IDE", icon: "icon/python.png" },
        { name: "Trello", icon: "icon/trello.png" },
        { name: "Jira", icon: "icon/trello.png" },
        { name: "Notion", icon: "icon/trello.png" },
      ],
    },
  ];

  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((category) => {
    // Create category container
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category";

    // Create category title
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "skill-category-title";
    categoryTitle.innerHTML = `<span class="skill-category-icon">${category.icon}</span> ${category.category}`;
    categoryDiv.appendChild(categoryTitle);

    // Create skills grid
    const skillsGrid = document.createElement("div");
    skillsGrid.className = "skills-grid";

    category.skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.className = "skill-item";

      const skillIcon = document.createElement("img");
      skillIcon.src = skill.icon;
      skillIcon.alt = skill.name;
      skillIcon.className = "skill-icon";

      const skillName = document.createElement("div");
      skillName.className = "skill-name";
      skillName.textContent = skill.name;

      skillItem.appendChild(skillIcon);
      skillItem.appendChild(skillName);
      skillsGrid.appendChild(skillItem);
    });

    categoryDiv.appendChild(skillsGrid);
    skillsContainer.appendChild(categoryDiv);
  });
}

// ===================================
// THEME TOGGLE
// ===================================

function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  const themeToggleLightIcon = document.getElementById(
    "theme-toggle-light-icon",
  );

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("color-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (currentTheme === "dark" || (!currentTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
    themeToggleLightIcon.classList.remove("hidden");
    themeToggleDarkIcon.classList.add("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    themeToggleDarkIcon.classList.remove("hidden");
    themeToggleLightIcon.classList.add("hidden");
  }

  // Toggle theme on button click
  themeToggleBtn.addEventListener("click", function () {
    // Toggle icons
    themeToggleDarkIcon.classList.toggle("hidden");
    themeToggleLightIcon.classList.toggle("hidden");

    // Toggle dark mode
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  });
}

// ===================================
// DYNAMIC GREETING
// ===================================

function setGreeting() {
  const greetingElement = document.getElementById("greeting");
  const hour = new Date().getHours();

  let greeting = "Hi, Good Day";

  if (hour >= 4 && hour < 12) {
    greeting = "Hi, Good Morning ☀️";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Hi, Good Afternoon 🌤️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Hi, Good Evening 🌆";
  } else {
    greeting = "Hi, Good Night 🌙";
  }

  greetingElement.textContent = greeting;
}

// ===================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

function initNavbarScroll() {
  const navbar = document.getElementById("navbar");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navbar.style.boxShadow = "none";
    } else {
      navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
    }

    lastScroll = currentScroll;
  });
}

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(section);
  });

  // Observe skill categories
  document.querySelectorAll(".skill-category").forEach((category, index) => {
    category.style.opacity = "0";
    category.style.transform = "translateY(30px)";
    category.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
    observer.observe(category);
  });
}

// ===================================
// INITIALIZE ALL FUNCTIONS
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // Set initial content
  setSocialLinks();
  setSkills();
  setGreeting();

  // Initialize features
  initTheme();
  initSmoothScroll();
  initNavbarScroll();

  // Add slight delay for scroll reveal to ensure DOM is ready
  setTimeout(() => {
    initScrollReveal();
  }, 100);
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
