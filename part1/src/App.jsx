const Hello = (props) => {
  //* Para manipular el objeto props
  //* Podemos almacenar en variables sus valores
  // const name = props.name;
  // const age = props.age;

  //* También podemos usar destructuring assignment
  const { name, age } = props;

  // (La misma función de la branch anterior pero con una sintáxis más compacta)
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>So you were probably born in {bornYear()};</p>
    </div>
  );
};

//* Si llevamos el destructuring un paso más allá, podemos usarlo directamente como parámetro
const Bye = ({ name, greetings }) => {
  return (
    <div>
      Bye {name}, {greetings}
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Bye name="Nikola" greetings="nice to meet you" />
      <Bye name="Aaron" greetings="have a nice trip" />
    </div>
  );
};

export default App;
