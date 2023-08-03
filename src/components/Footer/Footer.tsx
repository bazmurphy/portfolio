import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <h4>Footer</h4>
      <span>{year}</span>
    </footer>
  );
};

export default Footer;
