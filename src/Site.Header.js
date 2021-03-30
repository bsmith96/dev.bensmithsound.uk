import './App.css';

function SiteHeader() {
  return (
    <div class="container-fluid header">
      <div class="row pt-3 pb-2 justify-content-center align-items-center">
        <div class="col-lg-2">
          <p class="header-title">Ben Smith</p>
        </div>
        <div class="col-lg-4">
          <p class="header-subtitle">Theatre Sound Engineer and Designer</p>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;