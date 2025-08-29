import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm.js";
import { fetchAPI, submitAPI } from "../api";

// ✅ mock api functions
jest.mock("../api");

describe("BookingForm Component", () => {
  beforeEach(() => {
    fetchAPI.mockReturnValue(["17:00", "18:00", "19:00"]);
    submitAPI.mockReturnValue(true);
  });

  test("renders static text (labels)", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
  });

  test("initializeTimes loads available times on mount", () => {
    render(<BookingForm />);
    const option = screen.getByText("17:00");
    expect(option).toBeInTheDocument();
  });

  test("updateTimes changes available times when date changes", () => {
    fetchAPI.mockReturnValueOnce(["17:00"]).mockReturnValueOnce(["20:00"]);

    render(<BookingForm />);
    const dateInput = screen.getByLabelText("Choose date");

    // Change date
    fireEvent.change(dateInput, { target: { value: "2025-08-25" } });

    const updatedOption = screen.getByText("20:00");
    expect(updatedOption).toBeInTheDocument();
  });

  test("submits form with correct data", () => {
    render(<BookingForm />);

    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByDisplayValue("Make Your Reservation"));

    expect(submitAPI).toHaveBeenCalledWith(
      expect.objectContaining({
        time: "18:00",
        guests: "4",
        occasion: "Anniversary",
      })
    );
  });
});
