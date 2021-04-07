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
        <div className="container-fluid px-4 mt-4 show-info">
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
            <div className="row justify-content-center pt-3">
              
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
  }

  checkDate(i) {
    const currentDate = new Date();
    var runStart = new Date(Date.parse(i));
    var hasStarted = runStart <= currentDate;
    return(hasStarted);
  }

  filterProds(input) {
    var filtered = [];
    this.state.productions.filter( prod => {
      if (prod.role === input) {
        console.log(prod);
        filtered.push(prod);
      } else if (input === "") {
        filtered.push(prod);
      };
      return filtered;
    });
    console.log(filtered);
    this.setState({filteredProds: filtered});
    return filtered;
  }

  componentDidMount() {
    this.filterProds("");
  }

  render() {
    return (
      <div>
        {/*  H E A D I N G  */}
        <h1 className="mt-5 page-heading">Recent Projects</h1>

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