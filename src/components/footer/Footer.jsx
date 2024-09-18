import "./footer.scss";
import Contact from "/src/components/footer/child/contact/Contact";
import ScrollTop from "/src/components/footer/child/scrollTop/ScrollTop";
import Copyright from "/src/components/footer/child/Copyright";
import FooterBar from "/src/components/footer/child/FooterBar";

export default function Footer() {
  return (
    <>
      <footer>
        <Contact />
        <FooterBar />
        <Copyright />
      </footer>
      <ScrollTop />
    </>
  );
}
