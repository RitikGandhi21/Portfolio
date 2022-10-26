import './Loader.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import Loader from 'react-loader-spinner';

const CustomLoader = ({ load }) => {
  const [loader, setLoader] = useState(load);
  // Total time of loading screen is sum of both timeouts.
  const close = () => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  };

  return (
    <div id={loader ? "preloader" : "preloader-none"}>
      <div className="loader">
        {loader && (
          <>
            <Loader
              type="Grid"
              height={120}
              width={120}
              color="#c770f0"
              className="loaderSvg"
            />
          <div id="inTurnFadingTextG">
            <div id="inTurnFadingTextG_1" className="inTurnFadingTextG">R</div>
            <div id="inTurnFadingTextG_2" className="inTurnFadingTextG">i</div>
            <div id="inTurnFadingTextG_3" className="inTurnFadingTextG">t</div>
            <div id="inTurnFadingTextG_4" className="inTurnFadingTextG">i</div>
            <div id="inTurnFadingTextG_5" className="inTurnFadingTextG">k</div>
            <div id="inTurnFadingTextG_6" className="inTurnFadingTextG">G</div>
            <div id="inTurnFadingTextG_7" className="inTurnFadingTextG">a</div>
            <div id="inTurnFadingTextG_8" className="inTurnFadingTextG">n</div>
            <div id="inTurnFadingTextG_9" className="inTurnFadingTextG">d</div>
            <div id="inTurnFadingTextG_10" className="inTurnFadingTextG">h</div>
            <div id="inTurnFadingTextG_11" className="inTurnFadingTextG">i</div>
          </div>
          </>
        )}
        {loader && close()}
      </div>
    </div>
  );
};

export default CustomLoader;
