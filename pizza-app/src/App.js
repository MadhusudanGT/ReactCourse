import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <PizzaList />
    </div>
  );
}

function Header() {
  const style = {
    color: "red",
    fontsize: "50px",
    fontTransform: "uppercase",
    alignItems: "center",
  };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function PizzaList() {
  return (
    <section className="pizza-list">
      {pizzaData.map((pizza, index) => (
        <Pizza key={index} pizza={pizza} />
      ))}
    </section>
  );
}

function Pizza({ pizza }) {
  return (
    <div>
      <img src={pizza.photoName} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p>{pizza.ingredients}</p>
      <p>{pizza.soldOut ? "SOLD OUT" : <p>${pizza.price} €</p>} </p>
    </div>
  );
}

export default App;
