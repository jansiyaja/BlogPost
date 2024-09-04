import { Box, Card, Text, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { useState } from 'react';
import axios from 'axios';

interface IuserRegister {
  username: string;
  email: string;
  password: string;
 
}
interface IErrorState {
  username?: string;
  email?: string;
  password?: string;
  general?: string;
}

const Register: React.FC = () => {
  const [register, setRegister] = useState<IuserRegister>({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState<Partial<IErrorState>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear the error message when the user starts typing
    });
  }

  const validateInputs = () => {
    let tempErrors: Partial<IuserRegister> = {};

    if (!register.username) tempErrors.username = "Username is required";
    if (!register.email) tempErrors.email = "Email is required";
    if (!register.password) tempErrors.password = "Password is required";
    else if (register.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) return;

    try {
      const response = await axios.post('http://localhost:3000/users/register', register);
      console.log('Response from backend:', response.data);
      
      setRegister({ username: "", email: "", password: "" });
      setErrors({});
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error.includes('email')) {
          setErrors((prev) => ({ ...prev, email: "User with this email already exists" }));
        } else {
          setErrors((prev) => ({ ...prev, general: error.response.data.error }));
        }
      } else {
        console.error('Error message:', error.message);
      }
    }
  }

  return (
    <Box className="h-[100vh] bg-gradient-to-br from-purple-200 to-indigo-200">
      <div className="container mx-auto px-6 py-8">
        <Card className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <Text size="4" weight="bold" className="mb-6 text-center space-y-3">
            Welcome
          </Text>
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <Text as="label" htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
                UserName
              </Text>
              <input
                type="text"
                name="username"
                value={register.username}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.username && <Text className="text-red-500 text-sm mt-1">{errors.username}</Text>}
            </div>

            <div>
              <Text as="label" htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </Text>
              <input
                type="email"
                name="email"
                value={register.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>}
            </div>

            <div>
              <Text as="label" htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </Text>
              <input
                type="password"
                name="password"
                value={register.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.password && <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>}
            </div>

            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition-colors duration-300 ease-in-out w-full"
              type="submit"
            >
              Sign In
            </Button>

            {errors.general && <Text className="text-red-500 text-center mt-3">{errors.general}</Text>}
          </form>

          <div className="mt-4 flex justify-between items-center">
            <Text as="span" className="text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="#" className="text-purple-600 hover:text-purple-800 underline">
                Sign Up
              </a>
            </Text>

            <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
              Forgot Password?
            </a>
          </div>
        </Card>
      </div>
    </Box>
  );
}

export default Register;
