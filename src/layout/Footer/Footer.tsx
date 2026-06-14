import "./Footer.scss";


export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__name">
          <span className="site-footer__bracket">[</span>
          V.<span className="site-footer__neon">TORRES</span>
          <span className="site-footer__bracket">]</span>
        </span>
        <span className="site-footer__copy">
          © {year} · BUILT WITH REACT + TS
        </span>
        <span className="site-footer__easter">CONTINUE? 3... 2... 1...</span>
      </div>
    </footer>
  );
};
