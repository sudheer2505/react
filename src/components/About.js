import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const info = {
    name: "Sudheer Kumar",
    location: "Hyderabad",
    contact: "sudheer@gmail.com",
  };
  return (
    <div>
      About page
      <User info={info} />
      {/* <UserClass name={"Sudheer Kumar"} location={"Hyderabad"} /> */}
    </div>
  );
};

export default About;
