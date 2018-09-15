import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Javascript, dogs and Thai Food.
              Aspiring Film Critic. Extreme DIY'er.
              Revenue Manager for Marriott International, currently living in Gilbert, AZ.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
