import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const urlTags = [
        {url: "https://google.com", tag: "search engine"},
        {url: "https://facebook.com", tag: "social media"},
        {url: "https://bing.com", tag: "search engine"},
        {url: "https://wikipedia.org", tag: "reference"},
        {url: "https://developer.mozilla.org/en-US/", tag: "reference"},
        {url: "https://twitter.com", tag: "social media"}
    ]

    this.setState({urlTags});
  }

  render() {

    return (
        <div className="App">
        </div>
    );
  }
}

export default App;
