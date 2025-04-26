
import { render, screen } from "@testing-library/react";
import { ArbitrageIntro } from "../ArbitrageIntro";

describe("ArbitrageIntro", () => {
  it("renders the main heading and content", () => {
    render(<ArbitrageIntro />);
    
    expect(screen.getByText("ARBITRAGE WINDOWS - THE TIMELINES OF OPPORTUNITY")).toBeInTheDocument();
    expect(screen.getByText(/In business, the biggest profits/)).toBeInTheDocument();
    expect(screen.getByText(/I call these "Arbitrage Windows."/)).toBeInTheDocument();
  });

  it("displays the list of arbitrage window conditions", () => {
    render(<ArbitrageIntro />);
    
    expect(screen.getByText("A technology becomes accessible to average people")).toBeInTheDocument();
    expect(screen.getByText("But knowledge about how to leverage it remains limited")).toBeInTheDocument();
    expect(screen.getByText("And the market hasn't yet been flooded with competitors")).toBeInTheDocument();
  });
});
