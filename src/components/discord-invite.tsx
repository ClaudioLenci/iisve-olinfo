export function DiscordInvite() {
  const inviteUrl = "https://discord.gg/uEUt8Pa9fU";
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-md mx-auto">
      {/* Discord Logo */}
      <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-3xl font-semibold text-indigo-500">
        <span>💬</span>
      </div>

      {/* Server Information */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Entra nel nostro server discord!</h2>
        <p className="text-gray-300 mt-2">
          Server discord degli informatici del Volterra-Elia!
        </p>
      </div>

      {/* Join Button */}
      <a
        href={inviteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white font-semibold shadow-md transition duration-300"
      >
        Join Server
      </a>
    </div>
  );
}