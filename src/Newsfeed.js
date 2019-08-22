import React, { Component } from "react";
import News from "./component/News"
export default class Test extends Component {
  componentDidMount = () => {
    this.props.GetNew();
  };
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.UserData &&
          this.props.UserData.articles&&
          this.props.UserData.articles.map(news => {
            return (
              <div>
                <News
                image={news.urlToImage}
                title={news.title}
                content={news.content}/>
              </div>
            );
          })}
      </div>
    );
  }
}
