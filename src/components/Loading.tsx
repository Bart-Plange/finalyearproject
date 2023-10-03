
const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-200">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-700"></div>
      <p className="mt-2 text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
