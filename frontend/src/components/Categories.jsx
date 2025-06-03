import React from "react";

function Categories() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["JavaScript", "React", "Node.js", "MongoDB", "UI/UX", "DevOps"].map(
            (cat) => (
              <span
                key={cat}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
              >
                {cat}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Categories;
