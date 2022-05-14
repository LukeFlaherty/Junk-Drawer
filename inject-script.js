function parseEssentialDetails() {
  let main = {};

  main.performance = JSON.parse(JSON.stringify(window.performance)) || null;

  return main;
}

setInterval(() => {
  let essential = parseEssentailDetails();
  window.postMessage({ type: "FROM_PAGE", essential });
}, 500);
