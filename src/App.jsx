import styles from "./style";
import { Business, Footer, Navbar, Testimonials, Hero } from "./components";

const App = () => (
  <div className="w-full overflow-hidden" style={{backgroundColor: "#70CFFF"}}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart}`} style={{backgroundColor: "#70CFFF"}}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={` ${styles.paddingX} ${styles.flexCenter}`} style={{backgroundColor: "#70CFFF"}}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Testimonials />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
