import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import SassComponent from "./SassComponent";
import StyledComponent from "./StyledComponent";

// css Selector
// -> css 클래스가 특정 클래스 내부에 있는 경우에만 스타일을 적용할 수 있다.

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header>
      //     <img src={logo} className="logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>

      <div>
        {/* <SassComponent /> */}
        <StyledComponent />
      </div>
    );
  }
}

export default App;
