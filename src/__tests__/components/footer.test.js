import React from "react";
import { render } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footrt />", () => {
  it("renders the <Footer /> with populated data", () => {
    const { container, getByText } = render(
      <Footer>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investors Relations</Footer.Link>
            <Footer.Link href="#">Ways To Watch</Footer.Link>
            <Footer.Link href="#">Coporate Information</Footer.Link>
            <Footer.Link href="#">Netflix Originals</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Help Center</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Link href="#">Media Center</Footer.Link>
            <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Help Center</Footer.Link>
          </Footer.Column>

          <Footer.Text>Netflix Cairo, Egypt</Footer.Text>
        </Footer.Row>
      </Footer>
    );

    expect(getByText("Questions? Contact us.")).toBeTruthy();
    expect(getByText("FAQ")).toBeTruthy();
    expect(getByText("Investors Relations")).toBeTruthy();
    expect(getByText("Ways To Watch")).toBeTruthy();
    expect(getByText("Coporate Information")).toBeTruthy();
    expect(getByText("Netflix Originals")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
