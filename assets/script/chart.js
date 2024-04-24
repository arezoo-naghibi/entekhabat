
const barImage = document.getElementById("icon-nav");
const opentoggle = document.getElementsByClassName("img-nav");

const iconbar = barImage.addEventListener("click", openBar);

function openBar() {
  opentoggle.classList.toggle("hidden");
}







var chartBox = document.getElementById("myChart");
var chart1 = new Chart(chartBox, {
  type: "bar",
  data: {
    labels: [
      "2",
      "4",
      "6",
      "8",
      "10",
      "12",
      "14",
      "16",
      "18",
      "20",
      "22",
      "24",
    ],
    datasets: [
      {
        data: ["2", "1", "0", "1", "2", "10", "5", "4", "7", "20", "24", "21"],
        backgroundColor: [
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
          "#707070",
        ],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
});






var circleChart = document.getElementById("chartPie");
var chart2 = new Chart(circleChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        label: "",
        data: [250, 110],
        backgroundColor: ["#865760", "#ffffff"],
      },
    ],
  },
});






var genderChart = document.getElementById("gender");
var chart3 = new Chart(genderChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [200, 160],
        backgroundColor: ["#865760", "#6D6875"],
      },
    ],
  },
});


