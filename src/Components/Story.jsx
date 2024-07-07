const Story = () => {
  return (
    <div className="bg-white py-4 rounded-lg shadow-md mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Stories</h2>
        <div className="flex space-x-4 overflow-x-auto">
          {/* Exemple de stories */}
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/story1.jpg" alt="Story" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Story 1</div>
            </div>
          </div>
          <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full" src="/story2.jpg" alt="Story" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Story 2</div>
            </div>
          </div>
          {/* Ajoutez d'autres stories ici */}
        </div>
      </div>
    </div>
  );
};

export default Story;
