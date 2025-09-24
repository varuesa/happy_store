import Header from "./components/Header";
import { data } from "./data/data";

function App() {
  console.log(data);

  return (
    <>
      <Header />
      <main>
        <section className="py-5">
          <div className="container text-center">
            <h1>Happy Store</h1>
            <p>Welcome to Happy Store</p>
          </div>
        </section>
        <section className="py-4">
          <div className="container">
            <h2>Products</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {data.map((item) => {
                const {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                } = item;
                return (
                  <div className="col" key={id}>
                    <div className="card">
                      <img
                        src={image}
                        className="card-img-top object-fit-contain"
                        alt={title}
                        height={200}
                      />
                      <div className="card-body">
                        <h4 className="card-title">
                          {title} <span className="h6">{rating.rate} ⭐</span>
                        </h4>
                        <h5 className="card-subtitle mb-2 text-body-secondary">
                          {category}
                        </h5>
                        <p className="card-text">
                          {description.slice(0, 128)}...
                        </p>
                        <h5>${price}</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
