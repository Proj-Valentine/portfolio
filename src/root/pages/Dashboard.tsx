
const Dashboard = () => {
  return (
    <div className="pl-10 ml-20">
      <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 h-screen">
        <div className="relative inset-0 shadow-2xl backdrop-filter backdrop-blur-lg bg-opacity-75"></div>
        <div className="relative inset-0 flex shadow-2xl items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-bold text-gray-800">
              Glassmorphism Example
            </h1>
            <p className="text-gray-700">
              This is a simple glassmorphism effect using Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
