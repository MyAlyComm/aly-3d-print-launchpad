
import { render, screen } from "@testing-library/react";
import { Misconceptions } from "../Misconceptions";

describe("Misconceptions", () => {
  it("renders the misconceptions section title", () => {
    render(<Misconceptions />);
    
    expect(screen.getByText("Common Misconceptions: The Stained Glass Effect")).toBeInTheDocument();
  });

  it("displays all misconceptions and their realities", () => {
    render(<Misconceptions />);
    
    const myths = [
      "It's too late to start a 3D printing business",
      "You need technical expertise to succeed",
      "The profit margins aren't sustainable",
      "You need dozens of printers to make real money",
      "It's just a hobby, not a real business",
      "The electricity cost is so high"
    ];

    myths.forEach(myth => {
      expect(screen.getByText(`Myth: ${myth}`)).toBeInTheDocument();
    });
  });
});
