import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../Services/Operations/menuItems";
import Loader from "./common/Loader";
import { Link } from "react-router-dom";

const Category = () => {
  const [category, setCategory] = useState([]);
 

 

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await getAllCategories();
        setCategory(response.data);
      
      } catch (error) {
        console.log("Failed to fetch category");
        console.error(error.message);
      }
    };

    getAllData();
  }, []);

  return (
    <div className="min-h-[150px] py-6 px-4 md:px-10 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        Browse by Categories
      </h2>

      {category.length === 0 ? (
        <div className="flex justify-center items-center min-h-[100px]">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {category.map((item) => (
            <Link
              key={item._id}
              to={`/items/category/${item._id}`}
              className="px-4 py-2 bg-blue-100 text-blue-800 font-medium rounded-full shadow-md hover:bg-blue-200 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
