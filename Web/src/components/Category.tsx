import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

function Category() {
  const [activeCategory, setActiveCategory] = useState("Groceries");

  const categories = [
    "Groceries",
    "Honeywell Flour",
    "Animal Feeds",
    "Flour",
    "Noodles",
    "Salt",
    "Semolina",
    "Semovita",
    "Spageti",
  ];

  return (
    <section className="container-x flex justify-between mb-4">
      {categories.map((category, index) => {
        const isActive = category == activeCategory;
        const activeClass = isActive
          ? { backgroundColor: "green", color: "white" }
          : { backgroundColor: "#f0fdf4", color: "gray" };
        const activeIcon = isActive ? "white" : "gray";
        return (
          <div
            style={activeClass}
            onClick={() => setActiveCategory(category)}
            key={index}
            className={
              "rounded-full  text-white w-fit flex items-center gap-1 px-3 py-2 bg-green-600 cursor-pointer font-semibold"
            }
          >
            <p>{category}</p>
            <IoIosArrowDown color={activeIcon} />
          </div>
        );
      })}
    </section>
  );
}

export default Category;
