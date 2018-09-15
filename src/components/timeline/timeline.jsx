import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Revenue Management" subtitle="Marriott International - Currently employment"/>
                      <CardText expandable={true}>
                          Sept 2015 - Now 
                          <br/><br/>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                        <CardHeader title="University of Arizona Full Stack bootcamp" subtitle="Graduation expected Oct 2018"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Experience includes:
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>HTML and CSS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>VBA</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Javascript and Jquery</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>node.js and express</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>mysql and sequelize</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>MongoDB and mongoose</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>React</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Tools Development" subtitle="Marriott International"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Fast paced downtown envirement
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Hall of Fame Winnder - 2018</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>SharePoint</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>#1 System adopter companywide - 2017</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>VBA-Inventory Management Tool</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>JAVA-Automated Shop scripts</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Thinktank and processes member - training experience</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Automation champion</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Student of Economics" subtitle="Brigham Young University"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>

                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Economics</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Business</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
