const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
    },
    {
        id: 4,
      age: 17,
      name: "Karol",
    }
  ],
};

const Item = ({user}) => (
  <div>
    <h1>Uzytkownik {user.name}</h1>
    <h2>Ma {user.age}</h2>
  </div>
);

class ListItems extends React.Component {
  //    state={
  //        items:["jablko", "sliwki", "gruszka",'orange']
  //    }
  render() {
    const users = this.props.data.users;
    const Items = users.map(user => <Item key={user.id} user={user} />);

    return (
      <>
        <h1>Lesson 38/39/40 - praca z tablicami</h1>
        <ul>{Items}</ul>
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
