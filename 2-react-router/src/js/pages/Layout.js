import React from "react";
import { Link, withRouter } from "react-router-dom";

class Layout extends React.Component {
  navigate = () => {
    console.log(this.props.history);
    this.props.history.push("/");
    // this.props.history.replace("/"); // 履歴を残したくない場合に利用
  }

  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/archives/some-other-articles" class="btn btn-warning">archives (some other articles)</Link>
        <Link to="/archives"><button class="btn btn-danger">archives</button></Link>
        <Link to="/settings/main"><button class="btn btn-success">settings</button></Link>
        <Link to="/settings/extra"><button class="btn btn-success">settings (extra)</button></Link>
        <button class="btn btn-info" onClick={this.navigate}>featured</button>
      </div>
    );
  }
}

export default withRouter(Layout);
