import './App.css';

function SiteHeader() {
  return (
    <div className="container-fluid header">
      <div className="row pt-3 pb-2 justify-content-center align-items-center">
        <div className="col-lg-3">
          <p className="header-title display-4">Ben Smith</p>
        </div>
        <div className="col-lg-4">
          <p className="header-subtitle">Theatre Sound Engineer and Designer</p>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;