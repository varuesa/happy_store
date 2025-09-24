import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Hero from "./components/modules/Hero";
import ProductGrid from "./components/modules/ProductGrid";
import { data } from "./data/data";

function App() {
  return (
    <>
      <Header />
      <main className="mt-5">
        <Hero />
        <ProductGrid data={data} />
      </main>
      <Footer />
    </>
  )
}

export default App