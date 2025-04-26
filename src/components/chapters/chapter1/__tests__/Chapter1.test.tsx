
import { render, screen, fireEvent } from "@testing-library/react";
import Chapter1 from "@/pages/Chapter1";
import { BrowserRouter } from "react-router-dom";

describe("Chapter1", () => {
  const renderWithRouter = (component: React.ReactNode) => {
    return render(
      <BrowserRouter>
        {component}
      </BrowserRouter>
    );
  };

  it("renders the initial section", () => {
    renderWithRouter(<Chapter1 />);
    
    expect(screen.getByText("The Gateway to Entrepreneurial Success")).toBeInTheDocument();
    expect(screen.getByText(/In business, the biggest profits/)).toBeInTheDocument();
  });

  it("navigates between sections", () => {
    renderWithRouter(<Chapter1 />);
    
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    
    expect(screen.getByText("The 3D Printing Timeline")).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByText("Common Misconceptions")).toBeInTheDocument();
  });

  it("disables previous button on first section", () => {
    renderWithRouter(<Chapter1 />);
    
    const prevButton = screen.getByText("Previous");
    expect(prevButton).toBeDisabled();
  });

  it("handles navigation to all sections", () => {
    renderWithRouter(<Chapter1 />);
    
    const nextButton = screen.getByText("Next");
    
    // Navigate through all sections
    const sections = [
      "The Gateway to Entrepreneurial Success",
      "The 3D Printing Timeline",
      "Common Misconceptions",
      "The New Horizon",
      "Self-Assessment"
    ];

    sections.forEach((sectionTitle, index) => {
      if (index < sections.length - 1) {
        fireEvent.click(nextButton);
      }
    });
  });
});
