
import { render, screen } from "@testing-library/react";
import { FutureOutlook } from "../FutureOutlook";

describe("FutureOutlook", () => {
  it("renders the future outlook sections", () => {
    render(<FutureOutlook />);
    
    expect(screen.getByText("Where We're Going: The New Horizon")).toBeInTheDocument();
    expect(screen.getByText("The 2025 Shift: Integration & Automation")).toBeInTheDocument();
    expect(screen.getByText("The 2026 Evolution: Specialization & Ecosystem")).toBeInTheDocument();
  });

  it("displays future developments", () => {
    render(<FutureOutlook />);
    
    expect(screen.getByText("AI Design Integration")).toBeInTheDocument();
    expect(screen.getByText("Automated Production Systems")).toBeInTheDocument();
    expect(screen.getByText("Material-Specific Marketplaces")).toBeInTheDocument();
  });
});
