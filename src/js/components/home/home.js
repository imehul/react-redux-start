import React from 'react';
import {} from 'react-bootstrap';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log('did mount');
    console.log(this.props);
    if ( this.props.newsstockList.newsstockList.length === 0 ) {
      this.props.getNewsstockList(this.props.newsstockList.pageNumber);
    }
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  onScroll(){
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)) {
      if(!this.props.newsstockList.isLoading){
        console.log(this.props.newsstockList.pageNumber);
        this.props.getNewsstockList(this.props.newsstockList.pageNumber);
      }
    }
  }

  render(){
    return(
      <div>
      <div>
        <ul id="rig">
        {this.props.newsstockList.newsstockList.map(function(n,i){
          return(
          <li key={i}>
            <a className="rig-cell pointer">
            {n.media[0].s3MediaVideoThumbnailPresigned ? <video className="rig-img" src={n.media[0].s3MediaPreviewPreSigned}></video> : <img className="rig-img" src={n.media[0].s3MediaPreviewPreSigned} />}
            </a>
          </li>
        )
      })}
        </ul>
      </div>
      </div>
    );
  }
}

export default Home;
