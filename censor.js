(function() {
  const searchStrings = ["trump"];
  const classesToCensor = ["title", "md"];

  const processClass = className => {
    const elements = document.getElementsByClassName(className);
    Array.prototype.forEach.call(elements, element => {
      processResult(element);
    });
  };

  const processResult = element => {
    searchStrings.forEach(string => {
      if (element.innerText.toLowerCase().includes(string)) {
        element.innerText = "-censored-";
      }
    });
  };

  const censorship = setInterval(() => {
    if (document.readyState === "complete") {
      classesToCensor.forEach(classTS => {
        processClass(classTS);
      });
      clearInterval(censorship);
    }
  }, 333);
})();
