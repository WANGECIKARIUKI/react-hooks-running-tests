import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";


test( "display the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
