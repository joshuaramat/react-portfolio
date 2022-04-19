function Footer() {
  const icons = [
    {
      link: "mailto:ramatjoshua@gmail.com",
      class: "fas fa-envelope"
    },
    {
      link: "https://github.com/joshuaramat",
      class: "fab fa-github"
    },
    {
      link: "https://www.linkedin.com/in/joshuaramat/",
      class: "fab fa-linkedin"
    }
  ];

  return(
    <footer>
      <ul>
        {icons.map((icon, index) => 
          <li key={index}>
            <a href={icon.link} key={index}>
              <i className={icon.class}></i>
            </a>
          </li>
        )}
      </ul>
    </footer>
  );
}

export default Footer;
