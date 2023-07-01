import "./App.css";
import { useState } from "react";

import ApexCharts from "react-apexcharts";
function App() {
  const sliderdata = [27, 17, 22, 34];
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const chartoption = {
    chart: {
      height: 280,
      type: "area",
    },

    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  };

  var options = {
    chart: {
      height: 280,
      type: "radialBar",
    },
    series: [67],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#333",
          startAngle: -90,
          endAngle: 90,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "15px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "butt",
    },
    labels: ["Progress"],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderdata.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderdata.length - 1 : prevIndex - 1
    );
  };
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };
  return (
    <div className="app_container">
      <div className="main-container">
        <div className="first_conatiner">
          <div className="inner_wrapper">
            <div className="add_pagination">
              <div className="add_btn">
                <div className="material-icons">add</div>
              </div>
              <div className="pagination-wrapper">
                {" "}
                <div className="pagination-dots">
                  {sliderdata.map((_, index) => (
                    <span
                      key={index}
                      className={index === currentIndex ? "active" : ""}
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="degree_converter">
                <p>&deg;C</p>
                <section className="model-5 ">
                  <div className="checkbox">
                    <input type="checkbox" />
                    <label></label>
                  </div>
                </section>
                <p>&deg;F</p>
              </div>
            </div>
            <div className="city_time_container">
              <div className="city_data">
                <div className="city_name">
                  <span className="material-icons">near_me</span>
                  <p>New York, USA</p>
                </div>
                <div>07:19</div>
              </div>
              <div className="city_data day">
                <div className="city_name">
                  <p>Today 28 Sept</p>
                </div>
                <div>19:32</div>
              </div>
            </div>
            <div className="slider_wrapper">
              <button onClick={goToPreviousSlide}>
                <span className="material-icons">chevron_left</span>
              </button>
              <div className="slide_content-wrapper">
                <div className="Slide-data">
                  <h1>{sliderdata[currentIndex]}&deg;</h1>
                  <div className="weather_data">
                    <span className="material-icons">wb_sunny</span>{" "}
                    <p>Sunny</p>
                  </div>
                </div>
              </div>
              <button onClick={goToNextSlide}>
                <span className="material-icons">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="second_container">
            <div className="top_container">
              <div className="welcome_container">
                <h2>Welcome back India!</h2>
                <p>Check out today's weather information</p>
              </div>
              <div className="profile_container">
                <div className="profile_dots">...</div>
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="graph-container">
              <div className="chart-labels">
                <label>Upcoming hours</label>
                <div className="chart-dropdown">
                  <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="hover-dropdown"
                  >
                    <button>
                      Rain precipitation
                      <span className="material-icons">
                        keyboard_arrow_down
                      </span>
                    </button>
                    {isDropdownOpen && (
                      <ul className="dropdown-menu">
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                      </ul>
                    )}
                  </div>
                  <div className="next-days">
                    <button>
                      Next days
                      <span className="material-icons">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
              <div id="chart">
                <ApexCharts
                  options={chartoption}
                  series={chartoption.series}
                  type="area"
                  height={140}
                />
              </div>
            </div>
            <div>
              <h3> More details of today's weather</h3>
            </div>
            <div className="multiple-charts">
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
              <div className="box">
                <div className="gauge-chart">
                  <ApexCharts
                    options={options}
                    series={options.series}
                    type="radialBar"
                    height={150}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
}

export default App;
