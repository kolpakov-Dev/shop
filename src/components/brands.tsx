import brandImg1 from "./../assets/img/brand_01.png";
import brandImg2 from "./../assets/img/brand_02.png";
import brandImg3 from "./../assets/img/brand_03.png";
import brandImg4 from "./../assets/img/brand_04.png";
const Brands = () => {
  return (
    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Brands</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-3 p-md-5">
                  <a href="#">
                    <img
                      className="img-fluid brand-img"
                      src={brandImg1}
                      alt="Brand Logo"
                    />
                  </a>
                </div>
                <div className="col-3 p-md-5">
                  <a href="#">
                    <img
                      className="img-fluid brand-img"
                      src={brandImg2}
                      alt="Brand Logo"
                    />
                  </a>
                </div>
                <div className="col-3 p-md-5">
                  <a href="#">
                    <img
                      className="img-fluid brand-img"
                      src={brandImg3}
                      alt="Brand Logo"
                    />
                  </a>
                </div>
                <div className="col-3 p-md-5">
                  <a href="#">
                    <img
                      className="img-fluid brand-img"
                      src={brandImg4}
                      alt="Brand Logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
