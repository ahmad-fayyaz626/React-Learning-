// Dynamic Routing : It is a way to create routes that can handle dynamic parameters in the URL. This allows us to create routes that can display different content based on the parameters passed in the URL. For example, we can create a route for a user profile page that takes a user ID as a parameter and displays the profile information for that user.
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to About Page
      </h1>
    </div>
  );
};

export default About;
