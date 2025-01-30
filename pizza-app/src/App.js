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
  const pizzas = pizzaData;
  return (
    <section className="pizza-list">
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        "We're still working on our menu. Please come back later :"
      )}
    </section>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <div>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredients}</p>
      <p>{pizzaObj.soldOut ? "SOLD OUT" : <p>${pizzaObj.price} €</p>} </p>
    </div>
  );
}

export default App;
