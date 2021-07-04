import './App.css';
import image1 from './_images/Carousel/21-06-twelfthnight-2-165.jpg';
import image2 from './_images/Carousel/20-02-piratequeen-1-165.jpg';
import image3 from './_images/Carousel/19-11-theseason-2-165.jpg';
import image4 from './_images/Carousel/19-11-theseason-1-165.jpg';



const alt1 = "Twelfth Night from the mixing desk, with Qlab and R1";
const head1 = "Twelfth Night";
const subhead1 = "Racks Close, for Guildford School of Acting. June 2021";

const alt2 = "The Pirate Queen from the mixing desk";
const head2 = "The Pirate Queen";
const subhead2 = "The London Coliseum. February 2020"

const alt3 = "Dougal in The Season";
const head3 = "The Season";
const subhead3 = "Royal & Derngate. November 2019. Photo © Pamela Raith Photography";

const alt4 = "Dougal and Robin in The Season";
const head4 = "The Season";
const subhead4 = "Royal & Derngate. November 2019. Photo © Pamela Raith Photography";

function Carousel() {
  return (
    <div id="recentShowsCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block w-100" alt={alt1} />
          <div className="carousel-caption d-none d-lg-block">
            <h5 className="carousel-title">{head1}</h5>
            <p className="carousel-desc">{subhead1}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image2} className="d block w-100" alt={alt2} />
          <div className="carousel-caption d-none d-lg-block">
            <h5 className="carousel-title">{head2}</h5>
            <p className="carousel-desc">{subhead2}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image3} className="d block w-100" alt={alt3} />
          <div className="carousel-caption d-none d-lg-block">
            <h5 className="carousel-title">{head3}</h5>
            <p className="carousel-desc">{subhead3}</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={image4} className="d block w-100" alt={alt4} />
          <div className="carousel-caption d-none d-lg-block">
            <h5 className="carousel-title">{head4}</h5>
            <p className="carousel-desc">{subhead4}</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#recentShowsCarousel"  data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#recentShowsCarousel"  data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;