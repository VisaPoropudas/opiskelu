import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './components/Login';
import BookingPage from './components/BookingPage';

/*test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});*/

describe("Login Form", () => {
  test("User is able to submit the login form", () => {
    const username = "me@here.com";
    const password = "qwerty123";
    const handleSubmit = jest.fn();
    render(<Login onSubmit={handleSubmit} />);

    const usernameInput = screen.getByLabelText(/Username/);
    fireEvent.change(usernameInput, { target: { value: username } });

    const pwdInput = screen.getByLabelText(/Password/);
    fireEvent.change(pwdInput, { target: { value: password } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      username:"me@here.com",
      password:"qwerty123",
    });
  });

  test("User is able to submit the table booking form", () => {
    const date = "2025-04-15";
    const name = "John Doe";
    const email = "me@here.com";
    const handleSubmit = jest.fn();
    render(<BookingPage onSubmit={handleSubmit} />);

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: { value: date } });

    const nameInput = screen.getByLabelText(/Name/);
    fireEvent.change(nameInput, { target: { value: name } });

    const emailInput = screen.getByLabelText(/Email/);
    fireEvent.change(emailInput, { target: { value: email } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      date: '2025-04-15',
      name: "John Doe",
      email: "me@here.com",
      numberOfGuests: 2
    });
  });
});
