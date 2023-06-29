import { render, screen, fireEvent } from "@testing-library/react";
import Input from ".";

test("renders Input component with label, placeholder, and name attributes", () => {
  const labelText = "Username";
  const placeholder = "Enter your username";
  const name = "username";

  render(
    <Input labelText={labelText} placeholder={placeholder} name={name} />
  );

  const inputElement = screen.getByLabelText(labelText);
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute("placeholder", placeholder);
  expect(inputElement).toHaveAttribute("name", name);
});

test("calls onChange callback when input value changes", () => {
  const onChangeMock = jest.fn();
  const labelText = "Username";
  const placeholder = "Enter your username";
  const name = "username";

  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      onChange={onChangeMock}
    />
  );

  const inputElement = screen.getByLabelText(labelText);
  const inputValue = "testuser";

  fireEvent.change(inputElement, { target: { value: inputValue } });

  expect(onChangeMock).toHaveBeenCalledTimes(1);
});

test("sets required attribute if 'required' prop is true", () => {
  const labelText = "Username";
  const placeholder = "Enter your username";
  const name = "username";
  const required = true;

  render(
    <Input
      labelText={labelText}
      placeholder={placeholder}
      name={name}
      required={required}
    />
  );

  const inputElement = screen.getByLabelText(labelText);
  expect(inputElement).toHaveAttribute("required");
});
