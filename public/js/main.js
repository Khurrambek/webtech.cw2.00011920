// * GET elements by queryselectorall
const getQrAll = (parent, target) => {
  const elementArr = parent.querySelectorAll(target);
  if (elementArr.length == 0) return [];
  return elementArr;
};

// * GET element by queryselector
const getQr = (parent, target) => {
  const element = parent.querySelector(target);
  if (!element) return "Element not found";
  return element;
};

const navList = getQr(document, "#nav-list");
const navLink = getQrAll(navList, ".nav-link");
const sidebarLabel = getQr(document, "#sidebar-label");

navLink.forEach((link) => {
  if (link.href == window.location.href) {
    link.classList.add("active");
    const icon = getQr(link, "i");
    sidebarLabel.textContent = null;
    sidebarLabel.append(icon);
    sidebarLabel.append(link.innerText);
  }
});
