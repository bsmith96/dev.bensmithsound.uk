import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import {prods} from './Production.list.json';


class Productions extends React.Component {
  constructor() {
    super();
    this.state = {prods};
  }
  render() {
    const { prods } = this.state;
    return (
      <div>
        {/*  H E A D I N G  */}
        <h1 class="mt-5 page-heading">Recent Projects</h1>

        {/*  L O O P  T H R O U G H  P R O D U C T I O N S  */}
        {prods.reverse().map(prod => (
        <div class="container-fluid px-4 mt-3 show-info">
          <div class="row gx-5 align-items-center position-relative">

            {/*  L E F T  C O L U M N  */}
            <div class="col-md-3 gy-4">

              {/*  S H O W  I M A G E  */}
              <figure class="figure">
                <img src={ "images/show-posters/" + prod.prodPoster } alt={ prod.altText } class="figure-img img-fluid rounded shadow"/>
              </figure>
            </div>

            {/*  C E N T R E  C O L U M N  */}
            <div class="col-sm gy-3">

              {/*  T I T L E - C A R D  I N F O  */}
              <p class="show-info-name">{prod.prodName}</p>
              <p class="show-info-role"><strong>{prod.prodRole}</strong> | {prod.prodVenue}<br />{prod.prodProducer}</p>
              <p class="show-info-creatives">{prod.prodDirector}<br />{prod.prodSoundDesigner}</p>
              <p class="show-info-readmore">
                <a
                  data-bs-toggle="collapse"
                  href={"#" + prod.prodCollapseId}
                  role="button"
                  aria-expanded="false"
                  aria-controls={prod.prodCollapseId}
                  class="stretched-link"
                >
                  Read more...
                </a>
              </p>
            </div>

            {/*  R I G H T  C O L U M N  */}
            <div class="col-sm-2">
              <p class="show-info-date">{prod.prodDate}</p>
            </div>
          </div>

          {/*  C O L L A P S E D  I N F O  */}
          <div
            class="collapse"
            id={prod.prodCollapseId}
          >
            <div class="row justify-content-center pt-3">
              
              {/*  L E F T  C O L U M N  ( F O R  S P A C I N G )  */}
              <div class="col-md-3"></div>

              {/*  C E N T R E  C O L U M N  */}
              <div class="col-md-6 mb-2 show-info-desc">

                {/*  W R I T I N G  C R E D I T S  L O O P  */}
                {prod.prodWriters !== undefined && 
                  <p class="show-info-creatives">
                    {prod.prodWriters.map(writers =>(
                      <span>{writers.credit}<br /></span>
                    ))}
                  </p>
                }

                {/*  D E S C R I P T I O N  F I R S T  P A R A G R A P H  */}
                <p class="lead">{prod.prodDescLead}</p>

                {/*  D E S C R I P T I O N  L O O P  */}
                {prod.prodDescRest.map(desc => (
                  <p>{desc.text}</p>
                ))}

                {/*  V I D E O  ( I N  C E N T R E  C O L U M N )  */}
                <div>
                  {prod.prodMainVideo.map(video => (
                    <div>
                      {video.url &&
                        <div class="ratio ratio-16x9 mt-5 mb-2">
                          <Iframe
                            width={video.width}
                            height={video.height}
                            url={video.url}
                            title={video.title}
                            frameborder={video.frameborder}
                            allow={video.allow}
                            allowfullscreen
                            className="embedded-video"
                          />
                        </div>
                      }
                    </div>
                  ))}
                </div>
              </div>

              {/*  R I G H T  C O L U M N  */}
              <div class="col-md-3 mb-2 show-info-sidebar">

                {/*  Q U O T E S  A N D  S T I C K Y  L O O P  */}
                {prod.prodQuotes.map(quote => (
                <div>
                  {!quote.acw || quote.cw
                    ? <figure class="sticky sticky-b">
                      <blockquote class="blockquote">{quote.text}</blockquote>
                      {quote.source && 
                      <figcaption class="blockquote-footer text-end">
                        <cite title={quote.source}>{quote.source}</cite>
                      </figcaption>
                      }
                    </figure>
                    : <figure class="sticky sticky-a">
                    <blockquote class="blockquote">{quote.text}</blockquote>
                    {quote.source &&
                    <figcaption class="blockquote-footer text-end">
                      <cite title={quote.source}>{quote.source}</cite>
                    </figcaption>
                    }
                    </figure>
                  }
                </div>
              ))}

              {/*  V I D E O  ( R I G H T  C O L U M N )  */}
              {prod.prodVideo.map(video => (
                <div>
                  {video.url &&
                    <div class="ratio ratio-16x9 mt-5 mb-2">
                      <Iframe
                        width={video.width}
                        height={video.height}
                        url={video.url}
                        title={video.title}
                        frameborder={video.frameborder}
                        allow={video.allow}
                        allowfullscreen className="embedded-video"
                      />
                    </div> }
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

export default Productions;