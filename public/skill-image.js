export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().replace(/ /g, "");
  const images = {
    html: "/svg/skills/html.svg",
    photoshop: "/svg/skills/photoshop.svg",
    css: "/svg/skills/css.svg",
    javascript: "/svg/skills/javascript.svg",
    nextjs: "/svg/skills/nextJS.svg",
    react: "/svg/skills/react.svg",
    bootstrap: "/svg/skills/bootstrap.svg",
    mongodb: "/svg/skills/mongoDB.svg",
    mysql: "/svg/skills/mysql.svg",
    postgresql: "/svg/skills/postgresql.svg",
    tailwind: "/svg/skills/tailwind.svg",
    vitejs: "/svg/skills/vitejs.svg",
    cplusplus: "/svg/skills/cplusplus.svg",
    java: "/svg/skills/java.svg",
    firebase: "/svg/skills/firebase.svg",
    git: "/svg/skills/git.svg",
    materialui: "/svg/skills/materialui.svg",
    numpy: "/svg/skills/numpy.svg",
    opencv: "/svg/skills/opencv.svg",
    strapi: "/svg/skills/strapi.svg",
    microsoftoffice: "/svg/skills/microsoftoffice.svg",
    picsart: "/svg/skills/picsart.svg",
    canva: "/svg/skills/canva.svg",
    typescript: "/svg/skills/typescript.svg",
    c: "/svg/skills/c.svg",
  };

  return images[skillID];
};
