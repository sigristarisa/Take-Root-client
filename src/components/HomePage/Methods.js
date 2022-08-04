import method1 from "../../assets/method-1.png";
import method2 from "../../assets/method-2.png";

const Methods = () => {
  return (
    <section id='methods-container'>
      <div>
        <h3>Method 1</h3>
        <div className='method-container'>
          <img src={method1} alt='method-1' />
          <div>
            <h4>Square-foot method</h4>
            <p>
              With the square-foot gardening method, you plant in blocks instead
              of traditional rows. Different crops are planted in different
              blocks according to their size; for example, nine radishes in one
              square foot, or just one cabbage.
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
              The companion method in gardening is to plant different crops in
              proximity for different reasons, including pest control,
              pollination, providing habitat for beneficial insects, maximizing
              use of space, and to otherwise increase crop productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;
