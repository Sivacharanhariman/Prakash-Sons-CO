import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../app";

describe("App", () => {
  it("renders the Prakash landing page", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /quality mutton supply for weddings, parties, restaurants, and hotels/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /whatsapp now/i })).toBeInTheDocument();
  });
});
