import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      storedBreak: 5,
      session: 25,
      storedSession: 25,
      storedMinutes: 25,
      minutes: 25,
      storedSeconds: "00",
      seconds: "00",
      playing: false,
      status: "Session"
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.sDown = this.sDown.bind(this);
    this.initSec = this.initSec.bind(this);
    this.handleReset = this.handleReset.bind(this);
    let time;
  }

  handleClick(e) {
    let bl = parseInt(document.getElementById("break-length").innerHTML);
    let sl = parseInt(document.getElementById("session-length").innerHTML);
    let id = e.target.id;

    //clicking break decre button and it's between 10 and 60

    if (
      bl > 10 &&
      bl < 60 &&
      id === "break-decrement" &&
      this.state.playing === false
    ) {
      this.setState({
        storedBreak: this.state.storedBreak - 1,
        break: this.state.storedBreak - 1
      });

      if (this.state.status === "Break") {
        this.setState({
          storedMinutes: this.state.storedBreak - 1,
          minutes: this.state.storedBreak - 1,
          seconds: "00"
        });
      }
    }

    //clicking sess decre button between 10 and 60
    else if (
      sl > 10 &&
      sl < 60 &&
      id === "session-decrement" &&
      this.state.playing === false
    ) {
      this.setState({
        storedSession: this.state.storedSession - 1,
        session: this.state.storedSession - 1
      });
      if (this.state.status === "Session") {
        this.setState({
          storedMinutes: this.state.storedSession - 1,
          minutes: this.state.storedSession - 1,
          seconds: "00"
        });
      }

      //clicking break incr button between 10 and 60
    } else if (
      bl < 60 &&
      bl > 10 &&
      id === "break-increment" &&
      this.state.playing === false
    ) {
      this.setState({
        storedBreak: this.state.storedBreak + 1,
        break: this.state.storedBreak + 1
      });
      if (this.state.status === "Break") {
        this.setState({
          storedMinutes: this.state.storedBreak + 1,
          minutes: this.state.storedBreak + 1,
          seconds: "00"
        });
      }

      //clicking sess incr button between 10 and 60
    } else if (
      sl < 60 &&
      sl > 10 &&
      id === "session-increment" &&
      this.state.playing === false
    ) {
      this.setState({
        storedSession: this.state.storedSession + 1,
        session: this.state.storedSession + 1
      });
      if (this.state.status === "Session") {
        this.setState({
          storedMinutes: this.state.storedSession + 1,
          minutes: this.state.storedSession + 1,
          seconds: "00"
        });
      }
    }

    //clicking sess decr button between 1 and 10
    else if (
      sl <= 10 &&
      sl > 1 &&
      id === "session-decrement" &&
      this.state.playing === false
    ) {
      this.setState({
        storedSession: this.state.storedSession - 1,
        session: this.state.storedSession - 1
      });

      if (this.state.status === "Session") {
        this.setState({
          storedMinutes: "0" + (this.state.storedSession - 1),
          minutes: "0" + (this.state.storedSession - 1),
          seconds: "00"
        });
      }
    }

    //clicking sess incr button between 1 and 10
    else if (
      sl <= 10 &&
      sl >= 1 &&
      id === "session-increment" &&
      this.state.playing === false
    ) {
      this.setState({
        storedSession: this.state.storedSession + 1,
        session: this.state.storedSession + 1
      });

      if (this.state.status === "Session") {
        this.setState({
          storedMinutes: "0" + (this.state.storedSession + 1),
          minutes: "0" + (this.state.storedSession + 1),
          seconds: "00"
        });
      }
    }

    //clicking break decr button between 1 and 10
    else if (
      bl <= 10 &&
      bl > 1 &&
      id === "break-decrement" &&
      this.state.playing === false
    ) {
      this.setState({
        storedBreak: this.state.storedBreak - 1,
        break: this.state.storedBreak - 1
      });

      if (this.state.status === "Break") {
        this.setState({
          storedMinutes: "0" + (this.state.storedBreak - 1),
          minutes: "0" + (this.state.storedBreak - 1),
          seconds: "00"
        });
      }
    }

    //clicking break incr button between 1 and 10
    else if (
      bl <= 10 &&
      bl >= 1 &&
      id === "break-increment" &&
      this.state.playing === false
    ) {
      this.setState({
        storedBreak: this.state.storedBreak + 1,
        break: this.state.storedBreak + 1
      });

      if (this.state.status === "Break") {
        this.setState({
          storedMinutes: "0" + (this.state.storedBreak + 1),
          minutes: "0" + (this.state.storedBreak + 1),
          seconds: "00"
        });
      }
    }
  }

  sDown() {
    let timeLeft = document.getElementById("time-left").innerHTML;

    if (this.state.seconds > 10) {
      this.setState({
        storedSeconds: this.state.storedSeconds - 1,
        seconds: this.state.seconds - 1
      });
    } else if (this.state.seconds <= 10) {
      this.setState({
        storedSeconds: this.state.storedSeconds - 1,
        seconds: "0" + (this.state.storedSeconds - 1)
      });
    }
    if (this.state.minutes > 10 && timeLeft.endsWith("00") === true) {
      this.setState({
        storedMinutes: this.state.storedMinutes - 1,
        minutes: this.state.minutes - 1,
        storedSeconds: 59,
        seconds: 59
      });
    }  else if (
      this.state.minutes <= 10 &&
      timeLeft.endsWith("00") === true &&
      timeLeft.startsWith("00") === false
    ) {
      this.setState({
        storedMinutes: this.state.storedMinutes - 1,
        minutes: "0" + (this.state.storedMinutes - 1),
        storedSeconds: 59,
        seconds: 59
      });
    } if (timeLeft === "00:00" && this.state.status === "Session") {
      document.getElementById("beep").play()
      if (this.state.break > 10) {
        this.setState({
          session: this.state.storedSession,
          storedMinutes: this.state.break,
          minutes: this.state.break,
          seconds: "00",
          status: "Break"
        });
      } else if (this.state.break <= 10) {
        this.setState({
          session: this.state.storedSession,
          storedMinutes: "0" + this.state.break,
          minutes: "0" + this.state.break,
          seconds: "00",
          status: "Break"
        });
      }
    } else if (timeLeft === "00:00" && this.state.status === "Break") {
      document.getElementById("beep").play()
      if (this.state.session > 10) {
        this.setState({
          break: this.state.storedBreak,
          storedMinutes: this.state.session,
          minutes: this.state.session,
          seconds: "00",
          status: "Session"
        });
      } else if (this.state.session <= 10) {
        this.setState({
          break: this.state.storedBreak,
          storedMinutes: "0" + this.state.session,
          minutes: "0" + this.state.session,
          seconds: "00",
          status: "Session"
        });
      }
    }

    //console.log(timeLeft)
  }

  initSec() {
    if (this.state.seconds === "00" && this.state.minutes !== "00") {
      if(this.state.storedMinutes > 10){
      this.setState({
        storedMinutes: this.state.storedMinutes - 1,
        minutes: this.state.minutes - 1,
        storedSeconds: 60,
        seconds: 60
      });}
      else if(this.state.storedMinutes <= 10){
        this.setState({
          storedMinutes: this.state.storedMinutes - 1,
          minutes: "0" + (this.state.storedMinutes - 1),
          storedSeconds: 60,
          seconds: 60
        })
      }
    }
  }

  handlePlay() {
    setTimeout(this.initSec, 1000);
    if (this.state.playing === false) {
      //console.log("playing");
      this.time = setInterval(this.sDown, 1000);
      this.setState({ playing: true });
    } else if (this.state.playing === true) {
      this.setState({ playing: false });
      //console.log("stop");
      clearInterval(this.time);
    }
  }

  handleReset() {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    if (this.state.playing === true) {
      this.setState({ playing: false });
      //console.log("stop");
      clearInterval(this.time);
    }
    this.setState({
      storedBreak: 5,
      break: 5,
      storedSession: 25,
      session: 25,
      storedMinutes: 25,
      minutes: 25,
      seconds: "00",
      playing: false,
      status: "Session"
    });
  }

  render() {
    return (
      <div id="display">
        <h1 id="title">25 + 5 Clock</h1>
        <div id="lengths">
          <BreakL click={this.handleClick} break={this.state.break} />
          <SessionL click={this.handleClick} session={this.state.session} />
        </div>
        <Timer
          minutes={this.state.minutes}
          seconds={this.state.seconds}
          status={this.state.status}
        />
        <audio
          id="beep"
          preload="auto" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
        <Buttons play={this.handlePlay} reset={this.handleReset} />
      </div>
    );
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="t-l">
        <div id="timer-label">
          {this.props.status}
          <div id="time-left">
            {this.props.minutes}:{this.props.seconds}
          </div>
        </div>
      </div>
    );
  }
}

class BreakL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="break-label">
        Break Length
        <div id="b-in">
          <img
            onClick={this.props.click}
            id="break-decrement"
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
            alt="up arrow"
          />
          <div id="break-length">{this.props.break}</div>
          <img
            onClick={this.props.click}
            id="break-increment"
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
            alt="up arrow"
          />
        </div>
      </div>
    );
  }
}

class SessionL extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="session-label">
        Session Length
        <div id="s-in">
          <img
            onClick={this.props.click}
            id="session-decrement"
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
            alt="up arrow"
          />

          <div id="session-length">{this.props.session}</div>
          <img
            onClick={this.props.click}
            id="session-increment"
            src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
            alt="up arrow"
          />
        </div>
      </div>
    );
  }
}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="buttons">
        <img
          onClick={this.props.play}
          id="start_stop"
          src="https://cdn4.iconfinder.com/data/icons/music-library/39/Asset_17-512.png"
        />
        <img
          id="reset"
          onClick={this.props.reset}
          src="https://cdn1.iconfinder.com/data/icons/arrows-106/24/12-512.png"
        />
      </div>
    );
  }
}

ReactDOM.render(<Display />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
