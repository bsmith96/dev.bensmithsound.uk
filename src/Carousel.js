import './App.css';
import image1 from './_images/Carousel/20-02-piratequeen-1-165.jpg';
import image2 from './_images/Carousel/19-11-theseason-2-165.jpg';
import image3 from './_images/Carousel/19-11-theseason-1-165.jpg';


const alt1 = "The Pirate Queen from the mixing desk";
const head1 = "The Pirate Queen";
const subhead1 = "The London Coliseum. February 2020"

const alt2 = "Dougal in The Season";
const head2 = "The Season";
const subhead2 = "Royal & Derngate. December 2019. Photo © Pamela Raith Photography";

const alt3 = "Dougal and Robin in The Season";
const head3 = "The Season";
const subhead3 = "Royal & Derngate. December 2019. Photo © Pamela Raith Photography";

function Carousel() {
  return (
    <div id="recentShowsCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#recentShowsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={image1} class="d-block w-100" alt={alt1} />
          <div class="carousel-caption d-none d-lg-block">
            <h5 class="carousel-title">{head1}</h5>
            <p class="carousel-desc">{subhead1}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={image2} class="d block w-100" alt={alt2} />
          <div class="carousel-caption d-none d-lg-block">
            <h5 class="carousel-title">{head2}</h5>
            <p class="carousel-desc">{subhead2}</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={image3} class="d block w-100" alt={alt3} />
          <div class="carousel-caption d-none d-lg-block">
            <h5 class="carousel-title">{head3}</h5>
            <p class="carousel-desc">{subhead3}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#recentShowsCarousel"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#recentShowsCarousel"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;