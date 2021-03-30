import React from 'react';
import './App.css';
import Iframe from 'react-iframe';
import {prods} from './ProductionsList.json';


class Productions extends React.Component {
  constructor() {
    super();
    this.state = {prods};
  }
  render() {
    const { prods } = this.state;
    return (
      <div>
        <h1 class="mt-5 page-heading">Recent Projects</h1>
        {prods.reverse().map(prod => (
        <div class="container-fluid px-4 mt-3 show-info">
          <div class="row gx-5 align-items-center position-relative">
            <div class="col-md-3 gy-4">
              <figure class="figure">
                <img src={ "images/show-posters/" + prod.prodPoster } alt={ prod.altText } class="figure-img img-fluid rounded shadow"/>
              </figure>
            </div>
            <div class="col-sm gy-3">
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
            <div class="col-sm-2">
              <p class="show-info-date">{prod.prodDate}</p>
            </div>
          </div>
          <div
            class="collapse"
            id={prod.prodCollapseId}
          >
            <div class="row justify-content-center pt-3">
              <div class="col-md-3"></div>
              <div class="col-md-6 mb-2 show-info-desc">
                {prod.prodWriters !== undefined && 
                  <p class="show-info-creatives">
                    {prod.prodWriters.map(writers =>(
                      <span>{writers.credit}<br /></span>
                    ))}
                  </p>
                }
                <p class="lead">{prod.prodDescLead}</p>
                {prod.prodDescRest.map(desc => (
                  <p>{desc.text}</p>
                ))}
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
              <div class="col-md-3 mb-2 show-info-sidebar">
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

/*function Production() {
  return (
  <div id="0000showname" class="container-fluid px-4 mt-3 show-info">
    <div class="row gx-5 align-items-center position-relative">
      <div class="col-md-3 gy-4">
        <figure class="figure">
            <img src="./images/show-posters/" class="figure-img img-fluid rounded shadow" alt="Show Name show poster" />
        </figure>
      </div>
      <div class="col-sm gy-3">
        <p class="show-info-name">Show Name</p>
        <p class="show-info-role"><strong>Show Role</strong> | Venue</p>
        <p class="show-info-creatives">Directed by Director<br />Sound Design by Sound Designer</p>
        <p class="show-info-readmore">
          <a data-bs-toggle="collapse" href="#showNameDesc" role="button" aria-expanded="false" aria-controls="showNameDesc" class="stretched-link">
            Read more...
          </a>
        </p>
      </div>
      <div class="col-sm-2">
        <p class="show-info-date">Date</p>
      </div>
    </div>
    <div class="collapse" id="showNameDesc" data-bs-parent="#all-projects">
      <div class="row justify-content-center pt-3">
        <div class="col-md-3"></div>
        <div class="col-md-6 mb-2 show-info-desc">
          <p class="show-info-creatives">Writing credits</p>
          <p class="lead"></p>
          <p></p>
        </div>
        <div class="col-md-3 mb-2 show-info-sidebar">
          <div class="ratio ratio-16x9 mt-5 mb-2">
            Video embed iframe here add class="embedded-video"
          </div>
          <figure class="sticky sticky-a">
            <blockquote class="blockquote">"Quote One"</blockquote>
            <figcaption class="blockquote-footer text-end">
              <cite title="The Source">The Source</cite>
            </figcaption>
          </figure>
          <figure class="sticky sticky-b">
            <blockquote class="blockquote">"Quote Two"</blockquote>
            <figcaption class="blockquote-footer text-end">
              <cite title="Another Source">Another Source</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
  );
}*/

//export default Production;