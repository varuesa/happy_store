import { useState } from "react";

const Hero = () => {
  const [like, setLike] = useState(0);

  return (
    <article className="px-4 py-5 my-5 text-center">
      <div className="container">
        <h1 className="display-5 fw-bold text-body-emphasis">Happy Store 🛒</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to Happy Store, a simple e-commerce website built with React and Bootstrap. 🚀
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button className="btn btn-primary px-4 gap-3">Products</button>
            <button
              className="btn btn-outline-secondary px-4"
              onClick={() => setLike(like + 1)}
            >
              Like ({like})
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Hero;