import React from "react";
import { render, screen } from "@testing-library/react";
import Restaurants from "./restaurants";
import { restaurants } from "../../fixtures";

describe("Restaurant", () => {
  it("should render correct div element", () => {
    render(<Restaurants restaurants={restaurants} />);
    expect(screen.getByTestId("RESTAURANTS")).toBeInTheDocument();
  });

  it('should render all restaurants with data-testid="RESTAURANT_NAVIGATION"', () => {
    render(<Restaurants restaurants={restaurants} />);
    expect(screen.getAllByTestId("RESTAURANT_NAVIGATION")).toHaveLength(
      restaurants.length,
    );
  });
});
