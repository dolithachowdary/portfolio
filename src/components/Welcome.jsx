import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="bg-logo">
        <svg
          viewBox="0 0 1024 1024"
        >
          <path d="M319.736389,408.183136 C342.316772,420.081024 364.494141,431.949249 386.881165,443.407867 C392.306519,446.184784 394.169952,449.917358 394.155609,455.700195 C394.053833,496.694122 394.474518,537.692627 393.993713,578.680969 C393.739746,600.333374 409.039276,619.448914 429.147491,623.910583 C441.903412,626.740784 454.388306,624.712219 465.960510,618.532715 C509.597229,595.231079 553.201416,571.868225 596.769287,548.438171 C610.391235,541.112488 622.210938,531.926331 627.816162,516.666809 C636.821228,492.151367 628.770874,465.503906 605.138977,451.818695 C588.573120,442.225433 571.538086,433.429962 554.586304,424.518372 C527.312561,410.180481 499.961731,395.988220 472.592346,381.833313 C448.328888,369.284760 423.977844,356.905701 399.697906,344.388916 C366.833893,327.446991 334.002502,310.441772 301.150879,293.475830 C298.932800,292.330292 296.627930,291.351074 294.422607,290.182770 C289.251282,287.443054 288.642517,283.561066 292.983643,279.483246 C303.195099,269.891052 313.934082,260.922394 325.440521,252.904785 C351.394165,234.820480 380.249084,224.325897 411.570923,220.858353 C452.996460,216.272217 492.001129,224.476852 528.849792,243.831406 C568.960632,264.899414 609.267029,285.594940 649.382690,306.653748 C665.602966,315.168579 682.263733,322.858063 698.014526,332.255493 C730.685791,351.748169 755.490234,378.396271 771.315613,413.164978 C779.660889,431.499786 784.754272,450.678131 786.374756,470.776917 C790.534607,522.373840 778.796875,569.649780 747.540466,611.376831 C729.653076,635.256226 706.523132,652.872192 680.182007,666.756592 C636.422424,689.822266 592.932434,713.400574 549.390930,736.878174 C527.830322,748.503662 506.426208,760.353333 482.201630,765.855347 C430.349792,777.632263 382.031006,769.233215 337.274078,740.652771 C303.747986,719.244019 280.034149,689.558472 265.295349,652.816711 C256.677551,631.333740 252.111725,608.753784 252.011581,585.597900 C251.725464,519.442017 251.887253,453.284149 251.895142,387.127075 C251.896698,373.988892 253.851257,372.969788 265.166504,379.116089 C283.167023,388.893799 301.321228,398.388519 319.736389,408.183136 z" />
        </svg>
      </div>
      <div className="content">
        <div className="welcome-msg">
          <span className="small">welcome to my</span>
          <h1 className="main-title">portfolio<span>.</span></h1>
        </div>

        <div className="shortcuts">
          <div className="shortcut-item">
            <span className="label">Open Chat</span>
            <span className="key">Ctrl</span> + <span className="key">I</span>
          </div>
          <div className="shortcut-item">
            <span className="label">Github Profile</span>
            <span className="key">Ctrl</span> + <span className="key">Alt</span> + <span className="key">K</span>
          </div>
          <div className="shortcut-item">
            <span className="label">Home Page</span>
            <span className="key">Ctrl</span> + <span className="key">Shift</span> + <span className="key">H</span>
          </div>
          <div className="shortcut-item">
            <span className="label">View Timeline</span>
            <span className="key">Ctrl</span> + <span className="key">T</span>
          </div>
        </div>
      </div>

      <style>{`
        .welcome-container {
          height: 100%;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #1e1e1e;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
          color: #cccccc;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .bg-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          opacity: 0.05;
          pointer-events: none;
          z-index: 0;
        }

        .bg-logo svg {
          width: 100%;
          height: 100%;
          fill: #ffffff;
        }

        .welcome-container::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(circle at center, transparent 0%, #1e1e1e 80%);
          pointer-events: none;
        }

        .content {
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
          text-align: center;
        }

        .welcome-msg {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }

        .main-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 4rem;
          font-weight: 300;
          margin: 0;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .main-title span {
          color: #007acc;
        }

        .welcome-msg .small {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.4rem;
          font-weight: 300;
          color: #858585;
          letter-spacing: 0.5px;
          display: block;
        }

        .shortcuts {
          display: flex;
          flex-direction: column;
          gap: 15px;
          align-items: flex-start;
          width: 100%;
          max-width: 400px;
        }

        .shortcut-item {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 14px;
          color: #858585;
        }

        .shortcut-item .label {
          flex: 1;
          text-align: left;
        }

        .key {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          padding: 2px 6px;
          margin: 0 4px;
          font-family: 'JetBrains Mono', monospace;
          color: #cccccc;
          font-size: 12px;
          min-width: 30px;
          display: inline-block;
          text-align: center;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        @media (max-width: 768px) {
          .main-title { font-size: 3rem; }
          .welcome-msg .small { font-size: 1rem; }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
