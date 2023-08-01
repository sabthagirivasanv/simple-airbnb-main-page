import Navbar from './components/Navbar';
import Card from "./components/Card";
import data from "./data"
import Hero from "./components/Hero";

function App() {
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="card--list">{convertDataIntoCards()}</section>
      </div>
  )
}


function convertDataIntoCards() {
    return data.map(each => {
        return (
            <Card
                key={each.id}
                {...each}
            />)
    });
}

export default App;
