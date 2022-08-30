import $ from "jquery";

const $showData = $("#show-data");
const $raw = $("pre");

$("#get-data").on("click", (e) => {
  e.preventDefault();

  $showData.text("Loading the JSON file.");

  $.getJSON(
    "https://recruiting.paylocity.com/recruiting/v2/api/feed/jobs/24da04f3-750a-4cea-a65e-bea4cec1002e",
    (data) => {
      console.log(data);
      const markup = data.jobs
        .map(
          (job) =>
            `<li>${job.title}: ${job.jobLocation.locationDisplayName}</li>`
        )
        .join("");

      const list = $("<ul />").html(markup);

      $showData.html(list);

      $raw.text(JSON.stringify(data, undefined, 2));
    }
  );
});
