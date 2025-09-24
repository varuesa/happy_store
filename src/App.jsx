import { data } from "./data/data";

function App() {
  console.log(data);

  return (
    <>
      <section className="py-5">
        <div className="container text-center">
          <h1>Happy Store</h1>
          <p>Welcome to Happy Store</p>
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <h2>Products</h2>
          <ul>
        {data.map(item => {
          const {id, title} = item;
          return (
            <li key={id}>{title}</li>
          );
        })}
          </ul>
        </div>
      </section>
    </>
  );
}
export default App;
