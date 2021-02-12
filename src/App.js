import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const urls = ["https://google.com",
                  "https://facebook.com",
                  "https://bing.com",
                  "https://wikiedia.org",
                  "https://espn.com"];

    const tags = ["search engine", "social media", "reference", "sports"];

    this.setState({urls, tags});
  }

  render() {

    return (
        <div className="App">
        </div>
    );
  }
}

export default App;
