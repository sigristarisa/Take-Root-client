import step1 from "../../assets/step-1.png";
import step2 from "../../assets/step-2.png";
import step3 from "../../assets/step-3.png";
import step4 from "../../assets/step-4.png";

const HowItWorks = () => {
  return (
    <section className='how-it-works-container'>
      <h3>How it works</h3>
      <div className='steps-container'>
        <div className='step-container'>
          <img src={step1} alt='step-1' />
          <div className='step-text'>
            <h4>Step 1</h4>
            <p>Create your personal raised bed squares </p>
          </div>
        </div>
        <div className='step-container'>
          <img src={step2} alt='step-2' />
          <div className='step-text'>
            <h4>Step 2</h4>
            <p>Choose your herbs, fruits and vegetables</p>
          </div>
        </div>
        <div className='step-container'>
          <img src={step3} alt='step-3' />
          <div className='step-text'>
            <h4>Step 3</h4>
            <p>Get companions and enemies of your chosen plant</p>
          </div>
        </div>
        <div className='step-container'>
          <img src={step4} alt='step-4' />
          <div className='step-text'>
            <h4>Step 4</h4>
            <p>Print, save and have fun gardening!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
