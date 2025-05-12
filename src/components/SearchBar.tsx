export default function SearchBar() {
    return (
        <div className="flex items-center justify-center mt-4">
            <input
                type="text"
                placeholder="Search for a doctor or specialty"
                className="w-1/2 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                Search
            </button>
        </div>
    );
}