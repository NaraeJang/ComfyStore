const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer justify-center p-4 bg-neutral text-neutral-content mt-auto">
      <div>
        <p>Copyright © {date} - All right reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
