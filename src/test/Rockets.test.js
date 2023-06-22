import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import axios from "axios";
import myRockets from "./rocketData";
import Rockets from "../components/Rockets";

jest.mock("axios");

const reducer = (
  state = {
    rockets: { rocket: myRockets },
  }
) => state;

const store = configureStore({ reducer });

describe("Testing the Rocket Component", () => {
  it("Test the rockets data", () => {
    axios.get.mockResolvedValue({ data: myRockets });
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Rockets />
          </Provider>
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
