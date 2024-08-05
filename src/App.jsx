import "./App.css";

const Heading = () => {
  return <h1>React Playground</h1>;
};

const name = "Alice Smith";
const Greeting = () => {
  return <h1>Hello, {name}!</h1>;
};

const ExternalLink = () => {
  const url = "https://www.reactexamples.com";
  return (
    <a href={url} target="_blank">
      Visit React Examples
    </a>
  );
};

const Avatar = () => {
  const imageUrl = "https://via.placeholder.com/200";
  return (
    <div>
      <img src={imageUrl} alt="placeholder" />
    </div>
  );
};

const UserInfo = () => {
  const user = {
    name: "Alice Smith",
    age: 28,
    email: "alice.smith@example.com",
    bio: "Passionate about React and building innovative web applications.",
  };

  return (
    <div>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Age:</strong> {user.age}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Heading />
      <Greeting />
      <ExternalLink />
      <Avatar />
      <UserInfo />
    </div>
  );
}
