import React from "react";
import { render } from "@testing-library/react";
import { Form } from "../../components";

jest.mock("react-router-dom");

describe("<Form />", () => {
  let container, getByText, queryByText, getByPlaceholderText;
  let error = null;

  it("renders the <Form /> component with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>
        {error && <Form.Error>Email is already taken</Form.Error>}
        <Form.Base>
          <Form.Input placeholder="Email address" onChange={() => {}} />
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Password"
            onChange={() => {}}
          />
          <Form.Submit disabled type="submit">
            Sign In
          </Form.Submit>
        </Form.Base>
        <Form.Text>
          New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.SubText>This page is protected by Google.</Form.SubText>
      </Form>
    );
    expect(getByText("This page is protected by Google.")).toBeTruthy();
    expect(getByText("Sign In Now")).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("Sign In").disabled).toBeTruthy();
    expect(getByPlaceholderText("Email address")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Form /> with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Email is already taken</Form.Error>
        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText("Email is already taken")).toBeTruthy();
    expect(queryByText("Sign In").disabled).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
