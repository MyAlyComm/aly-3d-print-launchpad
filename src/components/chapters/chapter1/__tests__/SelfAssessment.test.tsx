
import { render, screen, fireEvent } from "@testing-library/react";
import { SelfAssessment } from "../SelfAssessment";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

// Mock the hooks
jest.mock("@/hooks/use-toast", () => ({
  useToast: jest.fn()
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn()
}));

describe("SelfAssessment", () => {
  const mockToast = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useToast as jest.Mock).mockReturnValue({ toast: mockToast });
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all assessment questions", () => {
    render(<SelfAssessment />);
    
    expect(screen.getByText("Chapter 1 Self-Assessment: Your Arbitrage Advantage")).toBeInTheDocument();
    expect(screen.getByText(/What existing skills do you have/)).toBeInTheDocument();
    expect(screen.getByText(/What misconceptions about 3D printing/)).toBeInTheDocument();
  });

  it("handles form submission", () => {
    render(<SelfAssessment />);
    
    const textareas = screen.getAllByRole("textbox");
    textareas.forEach(textarea => {
      fireEvent.change(textarea, { target: { value: "Test response" } });
    });

    const completeButton = screen.getByText("Complete Chapter");
    fireEvent.click(completeButton);

    expect(mockToast).toHaveBeenCalledWith({
      title: "Chapter 1 Completed!",
      description: "You're ready to continue to Chapter 2."
    });
    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });
});
