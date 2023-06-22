import renderer from "react-test-renderer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import RocketDetails from "../components/RocketDetails";
import myRockets from "./rocketData";

const reducer = (
  state = {
    rockets: { rocket: myRockets },
  }
) => state;

const store = configureStore({ reducer });

it("Should render Rocket details", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <RocketDetails
          name="space 1"
          description="first space"
          image={["image1", "image2"]}
          id="firstItem"
          reserved
        />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
