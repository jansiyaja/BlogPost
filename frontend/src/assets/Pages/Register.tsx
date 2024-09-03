
import { Box, Card, Text, Button } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function Register() {
  return (
    <Box className="h-[100vh] bg-gradient-to-br from-purple-200 to-indigo-200">
      <div className="container mx-auto px-6 py-8">
        <Card className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <Text size="4" weight="bold" className="mb-6 text-center space-y-3 ">
            Welcome
          </Text>
          
          <form className="space-y-6">
            <div>
              <Text as="label" htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
               UserName
              </Text>
              <input type="text"  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <Text as="label" htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </Text>
              <input type="email" id="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <div>
              <Text as="label" htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </Text>
              <input type="password" id="password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-lg transition-colors duration-300 ease-in-out w-full">
              Sign In
            </Button>
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
