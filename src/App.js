import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
    return (
        <div className="App">
            <h1>ciao mondo</h1>
            <Search />
            <div className="card-container">
                <Card
                    name={name}
                    gitName={gitName}
                    follower={follower}
                    createdAt={createdAt}
                    updatedAt={updatedAt}
                    img={img}
                />
            </div>
        </div>
    );
}

export default App;
