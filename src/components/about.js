import joshua from "../assets/joshua.JPG";

function About() {
  return(
    <>
      <section className="about hero">
        <div className="content">
          <h4>About</h4>
          <img src={joshua} alt="" className="photo" />
          <p>A physical therapy aide with a passion for coding.</p>
          <p>I am happy to share all the projects that I completed during my coding bootcamp course and my progress along this coding journey.</p>
        </div>
      </section>
    </>
  );
}

export default About;
