

const page = () => {
  return (
    <div>
        <section className="p-6 bg-gray-100 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Common Git Commands</h2>
      <ul className="space-y-3">
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git init</code> - Initialize a new Git repository
        </li>
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git clone &lt;repo-url&gt;</code> - Clone an existing repository
        </li>
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git add .</code> - Stage all changes for commit
        </li>
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git commit -m "message"</code> - Commit staged changes with a message
        </li>
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git push origin main</code> - Push changes to the main branch
        </li>
        <li className="p-3 bg-white rounded-xl shadow-sm">
          <code className="text-blue-600 font-mono">git pull origin main</code> - Pull the latest changes from the main branch
        </li>
      </ul>
    </section>
    </div>
  );
};

export default page;