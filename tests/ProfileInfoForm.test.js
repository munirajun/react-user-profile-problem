import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import UserProfileInfo from "../components/ProfileInfoForm";
import {
  initialState,
  UserProfileContext,
} from "../contexts/UserProfileContext";

const mockDispatchFn = jest.mock();

test("renders user info form", () => {
  const mockContextValue = { state: initialState, dispatch: mockDispatchFn };

  render(
    <UserProfileContext.Provider value={mockContextValue}>
      <BrowserRouter>
        <UserProfileInfo />
      </BrowserRouter>
    </UserProfileContext.Provider>
  );
  const nameInput = screen.getByText("Name");
  const surnameInput = screen.getByText("Surname");
  const topicSelectBox = screen.getByLabelText("Topic");
  const submitButton = screen.getByText("Submit");
  expect(nameInput).toBeInTheDocument();
  expect(surnameInput).toBeInTheDocument();
  expect(topicSelectBox).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  fireEvent.change(topicSelectBox, { target: { value: "Other" } });

  const otherTopicTextInput = screen.getByText("Other Topic");
  expect(otherTopicTextInput).toBeInTheDocument();
});
