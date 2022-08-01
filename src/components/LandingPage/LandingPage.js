import SignupHeader from "../Signup/SignupHeader";
import mainImage from "../../assets/main-image.png";
import step1 from "../../assets/step-1.png";
import step2 from "../../assets/step-2.png";
import step3 from "../../assets/step-3.png";
import step4 from "../../assets/step-4.png";
import method1 from "../../assets/method-1.png";
import method2 from "../../assets/method-2.png";

import "../Signup/Signup.css";

const LandingPage = () => {
  return (
    <div>
      <SignupHeader />
      <main>
        <section className='main-container'>
          <img src={mainImage} alt='logo' className='logo' />
          <div>
            <h1>Welcome to Take Root.</h1>
            <h2>
              The first online plant bed planner, <br />
              combining the square-foot method <br />
              and the companion method.
            </h2>
            <div>
              <button>Let's get started</button>
              <button>What methods?</button>
            </div>
          </div>
        </section>

        <section className='how-it-works-container'>
          <h3>How it works</h3>
          <div className='steps-container'>
            <div className='step-container'>
              <img src={step1} alt='step-1' />
              <div>
                <h4>Step 1</h4>
                <p>Create your personal raised bed squares </p>
              </div>
            </div>
            <div className='step-container'>
              <img src={step2} alt='step-2' />
              <div>
                <h4>Step 2</h4>
                <p>Choose your herbs, fruits and vegetables</p>
              </div>
            </div>
            <div className='step-container'>
              <img src={step3} alt='step-3' />
              <div>
                <h4>Step 3</h4>
                <p>Get companions and enemies of your chosen plant</p>
              </div>
            </div>
            <div className='step-container'>
              <img src={step4} alt='step-4' />
              <div>
                <h4>Step 4</h4>
                <p>Print, save and have fun gardening!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='methods-container'>
          <div>
            <h3>Method 1</h3>
            <div className='method-container'>
              <img src={method1} alt='method-1' />
              <div>
                <h4>Square-foot method</h4>
                <p>
                  With the square-foot gardening method, you plant in blocks
                  instead of traditional rows. Different crops are planted in
                  different blocks according to their size; for example, 16
                  radishes in one square foot, or just one cabbage.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3>Method 2</h3>
            <div className='method-container'>
              <img src={method2} alt='method-2' className='logo' />
              <div>
                <h4>Companion method</h4>
                <p>
                  The companion planting method in gardening is the planting of
                  different crops in proximity for any of a number of different
                  reasons, including pest control, pollination, providing
                  habitat for beneficial insects, maximizing use of space, and
                  to otherwise increase crop productivity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
