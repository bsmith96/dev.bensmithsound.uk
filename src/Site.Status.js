import React from 'react';
import './App.css';
import './Site.Status.css';
import {prods} from './Production.list.json';

class Status extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {prods};
  }

  setStatus() {
    const today = new Date();
    var prodStatus = false;
    var status = "";
    prods.map(prod => {
      var preStart = new Date(Date.parse(prod.date.preStart));
      var fitupStart = new Date(Date.parse(prod.date.fitupStart));
      var techStart = new Date(Date.parse(prod.date.techStart));
      var runStart = new Date(Date.parse(prod.date.runStart));
      var runEnd = new Date(Date.parse(prod.date.runEnd));

      {/*if (prod.producer) {
        var showRef = prod.showName + " (for " + prod.producer + ")"
      } else {
        var showRef = prod.showName
      }*/}

      var showRef = prod.showName;

      if(preStart <= today && fitupStart > today) {
        prodStatus = "in pre-production for " + showRef;
      } else if(fitupStart <= today && techStart > today) {
        prodStatus = "fitting up for " + showRef;
      } else if(techStart <= today && runStart > today) {
        prodStatus = "in tech rehearsals for " + showRef;
      } else if(runStart <= today && runEnd > today) {
        prodStatus = "working on performances of " + showRef;
      } else {
        prodStatus = false
      };

      if(prodStatus) {
        console.log("I am " + prodStatus);
        if(status === "") {
          status = "I am currently " + prodStatus;
        } else {
          status = status.replace(", & ", ", ");
          status = status.concat(", & " + prodStatus);
        }
      };

    })
    return(status + ".");
  }

  render() {
    return (
      <div className="position-fixed top-0 end-0 p-3 status" style={{zIndex:'5'}}>
        <div id="liveToast" className="toast fade-in-and-out" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-body">
            {this.setStatus()}
          </div>
        </div>
      </div>
    );
  }
}

export default Status;