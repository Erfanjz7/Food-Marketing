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
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons for collapsible sections

export const DepthFrameWrapperByAnima = () => {
  // State for user categories
  const [userCategories, setUserCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategory, setShowAddCategory] = useState(false);
  
  // State for collapsible sections on mobile
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [advancedExpanded, setAdvancedExpanded] = useState(false);

  // Data for filter options
  const mealTimes = ["Breakfast", "Lunch", "Dinner", "Snack"];
  const prepTimes = ["Under 1 hour", "1-2 hours", "Over 2 hours"];
  const advancedFilters = ["بدون شکر", "بدون لبنیات", "بدون مغز"];

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

  //mapping mealtime from eng to per
  const mealTimeNameMap = {
    breakfast: "صبحانه",
    lunch: "ناهار",
    dinner: "شام",
    snack: "دسر",
    // اگر خواستی باز اضافه کن
  };


  //mapping preperationtime from eng to per
  const prepTimeNameMap = {
    "Under 1 hour": "کمتر از 1 ساعت",
    "1-2 hours": "1 الی 2 ساعت",
    "Over 2 hours": "بیشتر از 2 ساعت",
    // اگر خواستی باز اضافه کن
  };
  

  return (
    <aside className="flex flex-col w-full md:w-80 h-auto md:h-[695px] items-start border md:border-none rounded-lg md:rounded-none shadow-sm md:shadow-none mb-4 md:mb-0 mr-0">
      {/* Mobile collapsible header */}
      <div 
        className="flex md:hidden items-center justify-between w-full p-4 cursor-pointer"
        onClick={() => setFiltersExpanded(!filtersExpanded)}
      >
        <h2 className="font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px]">
          Filter Recipes
        </h2>
        {filtersExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>

      {/* Desktop header - always visible on desktop */}
      <header className="hidden md:flex flex-col items-start pt-4 pb-2 px-4 w-full">
        <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px] rtl">
          دسته بندی غذا ها
        </h2>
      </header>

      {/* Filter content - collapsible on mobile */}
      <div className={`flex flex-col w-full ${filtersExpanded ? 'flex' : 'hidden md:flex'}`}>
        <div className="flex flex-wrap max-w-full md:max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full">
          <div className="flex-col min-w-full md:min-w-40 flex-1 grow flex items-start">
            <div className="flex flex-col items-start pb-2 w-full">
              <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6 rtl">
                وعده
              </label>
            </div>
            <Select>
              <SelectTrigger className="w-full h-[45px] md:h-[53px] rtl">
                <SelectValue placeholder="وعده غذا رو انتخاب کن" />
              </SelectTrigger>
              <SelectContent>
              {mealTimes.map((time) => (
                <SelectItem key={time} value={time.toLowerCase()}>
                  {mealTimeNameMap[time.toLowerCase()] || time}
                </SelectItem>
              ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap max-w-full md:max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full rtl">
          <div className="flex-col min-w-full md:min-w-40 flex-1 grow flex items-start">
            <div className="flex flex-col items-start pb-2 w-full">
              <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
                مدت زمان آماده سازی
              </label>
            </div>
            <Select>
              <SelectTrigger className="w-full h-[45px] md:h-[53px] rtl">
                <SelectValue placeholder="زمان آماده سازی رو انتخاب کن" />
              </SelectTrigger>
              <SelectContent>
              {prepTimes.map((time) => (
                <SelectItem key={time} value={time.toLowerCase().replace(/\s/g, "_")}>
                  {prepTimeNameMap[time] || time}
                </SelectItem>
              ))}

              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap max-w-full md:max-w-[480px] items-end gap-[16px_16px] px-4 py-3 w-full rtl">
          <div className="flex-col min-w-full md:min-w-40 flex-1 grow flex items-start">
            <div className="flex flex-col items-start pb-2 w-full">
              <label className="w-full font-['Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
                دسته بندی غذا
              </label>
            </div>
            <Select>
              <SelectTrigger className="w-full h-[45px] md:h-[53px] rtl">
                <SelectValue placeholder="یه دسته بندی رو انتخاب کن" />
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
            دسته بندی ها
          </span>

          <button
            className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-2 rounded-lg border-2 border-[#E8DBD1] bg-[#F8F2EC] hover:bg-[#F0E4D9] transition-colors"
            onClick={() => setShowAddCategory(!showAddCategory)}
          >
            <span className="font-['Epilogue'] font-medium text-[#1C140C] text-sm md:text-base leading-6">
              اضافه کردن دسته بندی 
            </span>
            <span className="text-[#1C140C] font-bold text-lg">+</span>
          </button>
        </div>

        {showAddCategory && (
          <div className="flex flex-col px-4 py-3 w-full">
            <form onSubmit={handleAddCategory} className="flex flex-col gap-2 rtl">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="اسم دسته بندی رو وارد کن"
                className="w-full h-[40px] px-3 py-2 rounded-lg border-2 border-[#E8DBD1]"
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg bg-[#E8DBD1] hover:bg-[#D9C8BA] text-[#1C140C] font-medium text-sm md:text-base"
                >
                  ثبت
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddCategory(false);
                    setNewCategory("");
                  }}
                  className="px-3 py-2 rounded-lg border border-[#E8DBD1] text-[#1C140C] font-medium text-sm md:text-base"
                >
                  انصراف
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Advanced Filters section */}
        <div 
          className="flex items-center justify-between w-full pt-4 pb-2 px-4 cursor-pointer md:cursor-default"
          onClick={() => setAdvancedExpanded(!advancedExpanded)}
        >
          <h2 className="w-full font-['Epilogue',Helvetica] font-bold text-[#1c140c] text-lg leading-[23px] rtl">
            فیلتر های پیشرفته
          </h2>
          <div className="md:hidden">
            {advancedExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>

        <div className={`flex flex-col items-start px-4 py-0 w-full rtl ${advancedExpanded ? 'flex' : 'hidden md:flex'}`}>
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
      </div>
    </aside>
  );
};