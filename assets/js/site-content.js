/***************************************************
 * EDIT ME — single source of truth for the personal
 * details that repeat across the page (name, role,
 * email, social links). Change a value here and it
 * updates everywhere the site displays it.
 *
 * One-off content — the About bio, project
 * descriptions, and skill tags — lives directly in
 * index.html next to a matching <!-- EDIT: ... -->
 * comment, since each of those only appears once.
 ***************************************************/
const siteContent = {
  name: "Yuvanesh Raju",
  roleShort: "Dev · AI · Product",
  roleFull: "Software Developer · AI Builder · Product Engineer",
  email: "yuvanesh.raju5@gmail.com",
  social: {
    // Replace "#" with your real profile URL when ready.
    github: "https://github.com/yuva809",
    linkedin: "https://www.linkedin.com/in/yuvaneshraju/",
    x: "#",
  },
};

(function applySiteContent() {
  document.querySelectorAll('[data-content="name"]').forEach((el) => {
    el.textContent = siteContent.name;
  });
  document.querySelectorAll('[data-content="role-short"]').forEach((el) => {
    el.textContent = siteContent.roleShort;
  });
  document.querySelectorAll('[data-content="role-full"]').forEach((el) => {
    el.textContent = siteContent.roleFull;
  });
  document.querySelectorAll('[data-content="email"]').forEach((el) => {
    el.textContent = siteContent.email;
    el.setAttribute("href", "mailto:" + siteContent.email);
  });
  document.querySelectorAll('[data-content="email-form"]').forEach((el) => {
    el.setAttribute("action", "mailto:" + siteContent.email);
  });
  Object.keys(siteContent.social).forEach((key) => {
    var url = siteContent.social[key];
    document.querySelectorAll('[data-social="' + key + '"]').forEach((el) => {
      el.setAttribute("href", url);
    });
  });
})();
