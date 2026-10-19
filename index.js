const error = document.getElementById("error"),
  crs = document.getElementById("input");
document.querySelector("form").addEventListener("submit", (e) => {
  (e.preventDefault(),
    fetch(`https://railfeed.co.uk/data/passthrough_board?crs=${crs.value}`)
      .then((e) => e.json())
      .then((e) => {
        e.services.forEach((e) => {
          const t = `<li><h2>${e.toc_name}</h2> <h2>${e.toc_type.toLowerCase()}</h2> <h2>Train</h2> <h2>Departing From: </h2><h2>${e.origin}</h2> <h2>And Arriving At: </h2><h2>${e.destination}</h2> <h2>Departed At: </h2><h2>${e.origin_departure}</h2></li>`;
          document.querySelector("ul").insertAdjacentHTML("beforeend", t);
        });
      })
      .catch(
        (e) => (document.getElementById("error").innerHTML = "Not Found"),
      ));
});
