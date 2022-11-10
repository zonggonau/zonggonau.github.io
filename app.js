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

setSkill();
