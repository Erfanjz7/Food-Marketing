import React, { useState, useEffect } from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../../firebase"; // Make sure this path is correct

export const DepthFrameWrapperByAnima = () => {
  // State for user categories
  const [userCategories, setUserCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);

  // Data for filter options
  const mealTimes = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const prepTimes = ["Under 1 hour", "1-2 hours", "Over 2 hours"];
  const advancedFilters = ["Gluten-Free", "Dairy-Free", "Nut-Free"];

  // Fetch user categories from Firebase
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesCollection = collection(db, "categories");
        const categorySnapshot = await getDocs(categoriesCollection);
        const categoryList = categorySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }));
        setUserCategories(categoryList);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Add new category to Firebase
  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!newCategory.trim()) return;
    
    try {
      const categoriesCollection = collection(db, "categories");
      const docRef = await addDoc(categoriesCollection, {
        name: newCategory.trim()
      });
      
      setUserCategories([...userCategories, { id: docRef.id, name: newCategory }]);
      setNewCategory("");
      setShowAddCategory(false);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <aside className="flex flex-col w-80 h-[695px] items-start">
      <header className="flex flex-col items-start pt-4 pb-2 px-4 w-full">
        <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px]">
          Filter Recipes
        </h2>
      </header>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Meal Time
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select meal time" />
            </SelectTrigger>
            <SelectContent>
              {mealTimes.map((time) => (
                <SelectItem key={time} value={time.toLowerCase()}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Preparation Time
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select prep time" />
            </SelectTrigger>
            <SelectContent>
              {prepTimes.map((time) => (
                <SelectItem key={time} value={time.toLowerCase().replace(" ", "_")}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
        <div className="flex-col min-w-40 flex-1 grow flex items-start">
          <div className="flex flex-col items-start pb-2 w-full">
            <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
              Food Category
            </label>
          </div>
          <Select>
            <SelectTrigger className="w-full h-[53px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {userCategories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-between w-full px-4 py-3 border-b border-[#E8DBD1]">
        <span className="font-['Epilogue'] font-medium text-[#1C140C] text-base leading-6">
          Categories
        </span>

        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg border-2 border-[#E8DBD1] bg-[#F8F2EC] hover:bg-[#F0E4D9] transition-colors"
          onClick={() => setShowAddCategory(!showAddCategory)}
        >
          <span className="font-['Epilogue'] font-medium text-[#1C140C] text-base leading-6">
            Add
          </span>
          <span className="text-[#1C140C] font-bold text-lg">+</span>
        </button>
      </div>

      {showAddCategory && (
        <div className="flex flex-col px-4 py-3 w-full">
          <form onSubmit={handleAddCategory} className="flex flex-col gap-2">
            <input
              type="text"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              placeholder="Enter category name"
              className="w-full h-[40px] px-3 py-2 rounded-lg border-2 border-[#E8DBD1]"
            />
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-[#E8DBD1] hover:bg-[#D9C8BA] text-[#1C140C] font-medium"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowAddCategory(false);
                  setNewCategory("");
                }}
                className="px-3 py-2 rounded-lg border border-[#E8DBD1] text-[#1C140C] font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="flex flex-col items-start pt-4 pb-2 px-4 w-full">
        <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px]">
          Advanced Filters
        </h2>
      </div>

      <div className="flex flex-col items-start px-4 py-0 w-full">
        {advancedFilters.map((filter) => (
          <div key={filter} className="flex items-start gap-3 px-0 py-3 w-full">
            <Checkbox
              id={filter.toLowerCase()}
              className="w-5 h-5 rounded border-2 border-solid border-[#e8dbd1]"
            />
            <label
              htmlFor={filter.toLowerCase()}
              className="font-['Epilogue',Helvetica] font-normal text-[#1c140c] text-base leading-6 whitespace-nowrap"
            >
              {filter}
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};