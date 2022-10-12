import Recenzia from "./Recenzia";
import Footer from "./Footer";
import Popis from "./Popis";

function App() {
  return (
    <>
      <section className="container text-center">
        <Popis />
        <div>
          <h1 className="text-center mt-5">Naše recenzie</h1>
          <div className="underline"></div>
        </div>
        <Recenzia />
      </section>
      <Footer />
    </>
  );
}

export default App;
