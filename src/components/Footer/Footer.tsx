import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-subcontainer">
        <h4>Footer</h4>
        <span>{year}</span>
      </div>
    </footer>
  );
};

export default Footer;
