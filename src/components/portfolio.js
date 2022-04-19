import noteTaker from "../assets/note-taker.png";
import teamProfileGenerator from "../assets/team-profile-generator.png";
import movieDashboard from "../assets/movieDashboard.jpeg";
import weatherDashboard from "../assets/weather-dashboard.png";
import workDayScheduler from "../assets/work-day-scheduler.png";
import codeQuiz from "../assets/code-quiz.png";
import passwordGenerator from "../assets/password-generator.jpg";
import horiseon from "../assets/horiseon.jpg";
import runBuddy from "../assets/run-buddy.jpg";

function Portfolio() {
  return(
    <section className="portfolio hero">
      <div className="content">
        <h4>Portfolio</h4>
        <ul>
        <li>
            <a href="https://github.com/joshuaramat/movie-dashboard" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://blooming-stream-54961.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={movieDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Movie Search Engine</span>
                <span className="project-details">Interactive Front- and Back-End Project</span>
              </div>
            </a>
          </li>
          
          <li>
            <a href="https://github.com/tw2159/Note-Taker" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://limitless-dusk-41992.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={noteTaker} alt="" className="screenshot" />
              <div className="project-info">
                <span>Note Taker</span>
                <span className="project-details">Express.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/team-profile-generator" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://joshuaramat.github.io/team-profile-generator/" target="_blank" rel="noreferrer">
              <img src={teamProfileGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Team Profile Generator</span>
                <span className="project-details">Node.js / HTML / CSS</span>
              </div>
            </a>
          </li>
          
          <li>
            <a href="https://github.com/joshuaramat/weather-dashboard" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
              <img src={weatherDashboard} alt="" className="screenshot" />
              <div className="project-info">
                <span>Weather Dashboard</span>
                <span className="project-details">Third-Party APIs</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/scheduler" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://joshuaramat.github.io/scheduler/" target="_blank" rel="noreferrer">
              <img src={workDayScheduler} alt="" className="screenshot" />
              <div className="project-info">
                <span>Work Day Scheduler</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/code-quiz" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://joshuaramat.github.io/code-quiz/" target="_blank" rel="noreferrer">
              <img src={codeQuiz} alt="" className="screenshot" />
              <div className="project-info">
                <span>Code Quiz</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/password-gen" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://tw2159.github.io/password-generator/" target="_blank" rel="noreferrer">
              <img src={passwordGenerator} alt="" className="screenshot" />
              <div className="project-info">
                <span>Password Generator</span>
                <span className="project-details">HTML / CSS / JavaScript</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/horiseon" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://joshuaramat.github.io/password-gen" target="_blank" rel="noreferrer">
              <img src={horiseon} alt="" className="screenshot" />
              <div className="project-info">
                <span>Horiseon</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
          <li>
            <a href="https://github.com/joshuaramat/run-buddy" class="githubLink" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://joshuaramat.github.io/run-buddy/" target="_blank" rel="noreferrer">
              <img src={runBuddy} alt="" className="screenshot" />
              <div className="project-info">
                <span>Run Buddy</span>
                <span className="project-details">HTML / CSS</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
