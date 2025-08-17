export default function Auth() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Login / Signup</h1>
        <form className="flex flex-col gap-4 w-80">
          <input type="email" placeholder="Email" className="p-2 border rounded"/>
          <input type="password" placeholder="Password" className="p-2 border rounded"/>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    );
  }
  