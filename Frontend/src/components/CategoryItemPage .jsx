import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAllitems } from "../../Services/Operations/menuItems";
import Loader from "./common/Loader";
import MenuCard from "./MenuCard";

const CategoryItemPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await getAllitems();
        const items = response.data || [];
        setAllItems(items);

        if (categoryId) {
          const filtered = items.filter(
            (item) => item.category._id === categoryId
          );
          setFilteredItems(filtered);
        } else {
          setFilteredItems(items); // show all if no categoryId in URL
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching items:", err);
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  const handleReset = () => {
    navigate("/"); // remove categoryId from URL
  };

  return (
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-700">
          {categoryId ? "Filtered Items" : "All Menu Items"}
        </h1>
        {categoryId && (
          <button
            onClick={handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Reset Filter
          </button>
        )}
      </div>

      {loading ? (
        <Loader />
      ) : filteredItems.length === 0 ? (
        <p className="text-gray-500">No items found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MenuCard
              key={item._id}
              _id={item._id}
              name={item.name}
              description={item.description}
              imageUrl={item.imageUrl}
              price={item.price}
              isAvailable={item.isAvailable}
              categoryName={item.category?.name}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryItemPage;
