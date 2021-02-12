import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const urls = [
        "https://google.com",
        "https://facebook.com",
        "https://wikipedia.org",
        "https://espn.com",
        "https://bing.com"
    ]

    const tags = [
        "search engine",
        "social media",
        "reference",
        "sports",
        "search engine"
    ]

    this.setState({urls, tags});
  }

  render() {
    const tags = this.state.tags?.map((tag, index) =>(
        <li>
            <button>{tag}</button>
        </li>
    ))

    return (
        <div className="App">
            <ul>
                {tags}
            </ul>
        </div>
    );
  }
}

export default App;
