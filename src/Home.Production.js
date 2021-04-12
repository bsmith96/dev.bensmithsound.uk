import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import {prods} from './Production.list.json';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prod: props,
      collapsed: true,
      message: "Read more...",
      moving: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const readMore = 'Read more...';
    const readLess = 'Read less...';

    e.preventDefault();

    if (this.state.moving === false) {

      if (this.state.collapsed) {
        this.setState(state => ({
          message: readLess
        }));
      } else {
        this.setState(state => ({
          message: readMore
        }));
      };

      this.setState(state => ({
        collapsed: !state.collapsed
      }));

      this.setState(state => ({
        moving: true
      }))
      setTimeout(() => {  this.setState(state => ({
        moving: false
      })); }, 350);

    }

  }
  
  
  render() {
    const prod = this.props;
    return(
      <div className="container-fluid">
        <div className="container-fluid px-4 mb-4 show-info">
          <div className="row gx-5 align-items-center position-relative">

            {/*  L E F T  C O L U M N  */}
            <div className="col-md-3 gy-4">

              {/*  S H O W  I M A G E  */}
              <figure className="figure">
                <img src={ "images/show-posters/" + prod.poster } alt={ prod.altText } className="figure-img img-fluid rounded shadow"/>
              </figure>
            </div>

            {/*  C E N T R E  C O L U M N  */}
            <div className="col-sm gy-3">

              {/*  T I T L E - C A R D  I N F O  */}
              <p className="show-info-name">{prod.showName}</p>
              <p className="show-info-role"><strong>{prod.role}</strong> | {prod.venue}<br />{prod.producer}</p>
              <p className="show-info-creatives">{prod.director}<br />{prod.soundDesigner}</p>
              <p className="show-info-readmore">
                <a
                  data-bs-toggle="collapse"
                  href={"#" + prod.collapseId}
                  role="button"
                  aria-expanded="false"
                  aria-controls={prod.collapseId}
                  className="stretched-link text-decoration-none text-reset"
                  onClick={ this.handleClick }
                >
                  <small><i className={this.state.collapsed ? 'bi-caret-down-fill' : 'bi-caret-up-fill'} /></small> { this.state.message }
                </a>
              </p>
            </div>

            {/*  R I G H T  C O L U M N  */}
            <div className="col-sm-2">
              <p className="show-info-date">{prod.dateString}</p>
            </div>
          </div>

          {/*  C O L L A P S E D  I N F O  */}
          <div
            className="collapse"
            id={prod.collapseId}
          >
            <div className="row gx-5 justify-content-center pt-3">
              
              {/*  L E F T  C O L U M N  ( F O R  S P A C I N G )  */}
              <div className="col-md-3"></div>

              {/*  C E N T R E  C O L U M N  */}
              <div className="col-md-6 mb-2 show-info-desc">

                {/*  W R I T I N G  C R E D I T S  L O O P  */}
                {prod.writers !== undefined && 
                  <p className="show-info-creatives">
                    {prod.writers.map(writers =>(
                      <span>{writers.credit}<br /></span>
                    ))}
                  </p>
                }

                {/*  D E S C R I P T I O N  F I R S T  P A R A G R A P H  */}
                <p className="lead">{prod.descLead}</p>

                {/*  D E S C R I P T I O N  L O O P  */}
                {prod.descRest.map(desc => (
                  <p>{desc.text}</p>
                ))}

                {/*  V I D E O  ( I N  C E N T R E  C O L U M N )  */}
                <div>
                  {prod.mainVideo.map(video => (
                    <div>
                      {video.url &&
                        <div className="ratio ratio-16x9 mt-5 mb-2">
                          <Iframe
                            width={video.width}
                            height={video.height}
                            url={video.url}
                            title={video.title}
                            frameborder={video.frameborder}
                            allow={video.allow}
                            allowFullScreen
                            className="embedded-video"
                          />
                        </div>
                      }
                    </div>
                  ))}
                </div>
              </div>

              {/*  R I G H T  C O L U M N  */}
              <div className="col-md-3 mb-2 show-info-sidebar">

                {/*  Q U O T E S  A N D  S T I C K Y  L O O P  */}
                {prod.quotes.map(quote => (
                <div>
                  {!quote.acw || quote.cw
                    ? <figure className="sticky sticky-b">
                      <blockquote className="blockquote">{quote.text}</blockquote>
                      {quote.source && 
                      <figcaption className="blockquote-footer text-end">
                        <cite title={quote.source}>{quote.source}</cite>
                      </figcaption>
                      }
                    </figure>
                    : <figure className="sticky sticky-a">
                    <blockquote className="blockquote">{quote.text}</blockquote>
                    {quote.source &&
                    <figcaption className="blockquote-footer text-end">
                      <cite title={quote.source}>{quote.source}</cite>
                    </figcaption>
                    }
                    </figure>
                  }
                </div>
              ))}

              {/*  V I D E O  ( R I G H T  C O L U M N )  */}
              {prod.sideVideo.map(video => (
                <div>
                  {video.url &&
                    <div className="ratio ratio-16x9 mt-5 mb-2">
                      <Iframe
                        width={video.width}
                        height={video.height}
                        url={video.url}
                        title={video.title}
                        frameborder={video.frameborder}
                        allow={video.allow}
                        allowFullScreen 
                        className="embedded-video"
                      />
                    </div> }
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
}


class Productions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productions: prods,
      filteredProds: [],
      collapsed: true,
      message: "Read more..."
    };
    this.handleChangeRole = this.handleChangeRole.bind(this);
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }

  checkDate(i) {
    const currentDate = new Date();
    var runStart = new Date(Date.parse(i));
    var hasStarted = runStart <= currentDate;
    return(hasStarted);
  }

  filterProdsByRole(input) {
    var filtered = [];
    this.state.productions.filter( prod => {
      var role = ""
      if (prod.role === "Sound Operator") {
        role = "Sound No. 1";
      } else {
        role = prod.role;
      }
      if (role.includes(input)) {
        filtered.push(prod);
      } else if (input === "") {
        filtered.push(prod);
      };
      return filtered;
    });
    this.setState({filteredProds: filtered});
    return filtered;
  }

  filterProdsBySearch(input) {
    var filtered = [];
    this.state.productions.filter( prod => {
      var writersStr = "";
      var descStr = "";
      prod.writers.map(writers => {
        writersStr = writersStr + writers.credit;
        return null;
      });
      prod.descRest.map(paragraph => {
        descStr = descStr + paragraph.text;
        return null;
      });

      if (
        prod.role.toLowerCase().includes(input.toLowerCase()) ||
        prod.showName.toLowerCase().includes(input.toLowerCase()) ||
        prod.descLead.toLowerCase().includes(input.toLowerCase()) ||
        prod.director.toLowerCase().includes(input.toLowerCase()) ||
        prod.soundDesigner.toLowerCase().includes(input.toLowerCase()) ||
        prod.venue.toLowerCase().includes(input.toLowerCase()) ||
        prod.producer.toLowerCase().includes(input.toLowerCase()) ||
        writersStr.toLowerCase().includes(input.toLowerCase()) ||
        descStr.toLowerCase().includes(input.toLowerCase())
      ) {
        filtered.push(prod);
      } else if (input === "") {
        filtered.push(prod);
      }
      return filtered
    });
    this.setState({filteredProds: filtered});
    return filtered
  }

  componentDidMount() {
    this.filterProdsByRole("");
  }

  handleChangeRole(e) {
    this.filterProdsByRole(e.target.value);
  }

  handleChangeSearch(e) {
    this.filterProdsBySearch(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-end">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              {/*  H E A D I N G  */}
              <h1 className="mt-3 page-heading-2 display-5">Recent Projects</h1>
            </div>
            <div className="col-md-3 d-none d-lg-block">
              <input className="mt-4 form-control" placeholder="Filter productions" onChange={this.handleChangeSearch}></input>
            </div>
          </div>
        </div>


        {/*  L O O P  T H R O U G H  P R O D U C T I O N S  */}
        {this.state.filteredProds.reverse().map(prod => {
        if( this.checkDate(prod.date.runStart) && prod.shown ) {
        return (
          <Entry
            poster={prod.poster}
            altText={prod.altText}
            showName={prod.showName}
            role={prod.role}
            venue={prod.venue}
            producer={prod.producer}
            director={prod.director}
            soundDesigner={prod.soundDesigner}
            dateString={prod.dateString}
            writers={prod.writers}
            collapseId={prod.collapseId}
            descLead={prod.descLead}
            descRest={prod.descRest}
            mainVideo={prod.mainVideo}
            sideVideo={prod.sideVideo}
            quotes={prod.quotes}
          ></Entry>
        )} else {
          return(null)
        }})}
      </div>
    );
  }
}

export default Productions;