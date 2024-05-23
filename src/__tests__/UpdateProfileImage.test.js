import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import UpdateProfileImage from "../components/UpdateProfileImage";
import { UserProfileContext } from "../contexts/UserProfileContext";

const mock = new MockAdapter(axios);

mock
  .onGet("https://api.unsplash.com/photos/random")
  .reply(200, { description: "Test", urls: { small: null } });

const mockDispatchFn = jest.mock();

test("fetches profile image for selection/rejection", async () => {
  const mockContextValue = {
    state: { name: "Test", surname: "Test", topic: "Test" },
    dispatch: mockDispatchFn,
  };

  render(
    <UserProfileContext.Provider value={mockContextValue}>
      <BrowserRouter>
        <UpdateProfileImage />
      </BrowserRouter>
    </UserProfileContext.Provider>
  );

  const imgTag = await screen.findByTestId("image-for-selection");
  expect(imgTag).toHaveAttribute("alt", "Test");
});
