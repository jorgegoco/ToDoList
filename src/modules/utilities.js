export const idNumber = (str) => Number(str.replace(/\D/g, ''));

export const renameIds = () => {
  const divs = Array.from(document.querySelectorAll('.task')) || [];
  if (divs.length > 0) {
    for (let i = 0; i < divs.length; i += 1) {
      divs[i].id = `task${i + 1}`;
    }
  }
};