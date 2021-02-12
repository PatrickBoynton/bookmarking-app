import './App.css';
import {Component} from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // isToggled: false,
        bookmarks: [],
        filter: null,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
      const bookmarks = [
          {tag: "search engine", url: "https://google.com"},
          {tag: "social media", url: "https://facebook.com"},
          {tag: "reference", url: "https://wikipedia.org"},
          {tag: "social media", url: "https://instagram.com"},
      ]

      this.setState({bookmarks});
  }

  // handleClick(index) {
  //     this.setState({urls: this.state.bookmarks[index].urls.map(url => url)});
  //     console.log(this.state.urls)
  // }

  render() {

     const tags = this.state.bookmarks.map(bookmark => bookmark.tag);
     const uniqueTags = Array.from(new Set(tags));
     const tagsHTML = uniqueTags.map((tag, index) => (
         <button key={index} onClick={() => this.setState({filter: tag})}>{tag}</button>
     ));

    const bookmarks = this.state.bookmarks
        .filter(bookmark => this.state.filter ? bookmark.tag === this.state.filter : 9)
        .map((bookmark, index) =>
        <li key={index}>
            <p>{bookmark.url}</p>
        </li>);
    return (
        <div className="App">
            <nav>
                {tagsHTML}
            </nav>
            <ul>
                {bookmarks}
            </ul>
        </div>
    );
  }
}

export default App;
