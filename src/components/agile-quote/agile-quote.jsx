import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
              </span>
              <span className="quote-author">- Martin Golding</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
