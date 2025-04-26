
import { render, screen } from "@testing-library/react";
import { Timeline } from "../Timeline";

describe("Timeline", () => {
  it("renders the timeline phases", () => {
    render(<Timeline />);
    
    expect(screen.getByText("The 3D Printing Timeline: Where We Are Now")).toBeInTheDocument();
    expect(screen.getByText("Phase 1: The Tinkerer Era (2009-2019)")).toBeInTheDocument();
    expect(screen.getByText("Phase 2: The Transition Period (2020-2023)")).toBeInTheDocument();
    expect(screen.getByText("Phase 3: The Golden Window (2023-Present)")).toBeInTheDocument();
  });

  it("displays key characteristics of each phase", () => {
    render(<Timeline />);
    
    // Phase 1
    expect(screen.getByText("Constant troubleshooting")).toBeInTheDocument();
    expect(screen.getByText("Manual calibration for hours")).toBeInTheDocument();
    
    // Phase 2
    expect(screen.getByText("The rise of plug-and-play printers that actually worked")).toBeInTheDocument();
    
    // Phase 3
    expect(screen.getByText("Technology Accessibility")).toBeInTheDocument();
    expect(screen.getByText("Knowledge Gap")).toBeInTheDocument();
    expect(screen.getByText("Market Readiness")).toBeInTheDocument();
  });
});
