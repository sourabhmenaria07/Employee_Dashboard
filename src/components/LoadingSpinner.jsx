export default function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="text-center py-20">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      <p className="mt-4 text-gray-600 text-lg">{message}</p>
    </div>
  );
}
