import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste React Web Series</h2>
        <UserClass name={"AK (class)"} location={"Dehadun (class)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is namaste React Web Series</h2>
//       {/* <User name={"AK (function)"} /> */}
//       <UserClass name={"AK (class)"} location={"Dehadun (class)"} />
//     </div>
//   );
// };
export default About;
