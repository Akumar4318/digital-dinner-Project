import React, { useEffect, useState } from "react";
import { getAllitems } from "../../Services/Operations/menuItems";
import Loader from "./common/Loader";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
 

  useEffect(() => {
    const getAlldata = async () => {
      try {
        const result = await getAllitems();
       
       
        setMenuItems(result.data);
      } catch (error) {
        console.log("Failed to fetch menu items:", error);
      }
    };

    getAlldata();
  }, []);

  return (
    <div className="min-h-screen px-4 md:px-10 py-6 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Our Menu
      </h2>

      {menuItems.length === 0 ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menuItems.map((item) => (
            <MenuCard
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              isAvailable={item.isAvailable}
              imageUrl={item.imageUrl}
              categoryName={item.category.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
