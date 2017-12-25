const processClass = (className) => {
  const elements = document.getElementsByClassName(className);
  Array.prototype.forEach.call(elements, element => { processResult(element); });
};

const processResult = (element) => {
  searchStrings.forEach(string => {
    if (element.innerText.toLowerCase().includes(string)) {
      element.innerText = '-censored-';
    }
  });
};

const censorship = setInterval(() => {
  if (document.readyState === 'complete') {
    const searchStrings = ['diferent'];
    const classesToCensor = ['title', 'md'];
    classesToCensor.forEach(classTS => { processClass(classTS); });
    clearInterval(censorship);
  }
}, 333);
