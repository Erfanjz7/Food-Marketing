import { SearchIcon, Plus, Upload } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../../firebase"; // Make sure this path is correct

export const DivWrapperByAnima = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  
  // New food state
  const [newFood, setNewFood] = useState({
    name: "",
    mainImage: "",
    additionalImages: ["", "", "", "", ""], // 5 optional additional images
    description: "",
    ingredients: [],
    cookingDuration: "",
    difficulty: "",
    recipe: ""
  });
  
  // File upload states
  const [mainImageFile, setMainImageFile] = useState(null);
  const [additionalImageFiles, setAdditionalImageFiles] = useState([null, null, null, null, null]);
  
  // Preview states
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState(["", "", "", "", ""]);
  
  // Current ingredient being added
  const [currentIngredient, setCurrentIngredient] = useState("");
  
  // Fetch foods from Firebase
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foodCollection = collection(db, "foods");
        const foodSnapshot = await getDocs(foodCollection);
        const foodList = foodSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFoods(foodList);
        setFilteredFoods(foodList);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    };

    fetchFoods();
  }, []);
  
  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFoods(foods);
    } else {
      const filtered = foods.filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFoods(filtered);
    }
  }, [searchQuery, foods]);
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFood(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle main image file change
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setMainImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Handle additional image file change
  const handleAdditionalImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newFiles = [...additionalImageFiles];
      newFiles[index] = file;
      setAdditionalImageFiles(newFiles);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...additionalImagePreviews];
        newPreviews[index] = reader.result;
        setAdditionalImagePreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Remove additional image
  const handleRemoveAdditionalImage = (index) => {
    const newFiles = [...additionalImageFiles];
    const newPreviews = [...additionalImagePreviews];
    
    newFiles[index] = null;
    newPreviews[index] = "";
    
    setAdditionalImageFiles(newFiles);
    setAdditionalImagePreviews(newPreviews);
  };
  
  // Add ingredient to the list
  const handleAddIngredient = () => {
    if (currentIngredient.trim() !== "") {
      setNewFood(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, currentIngredient.trim()]
      }));
      setCurrentIngredient("");
    }
  };
  
  // Remove ingredient from the list
  const handleRemoveIngredient = (index) => {
    setNewFood(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };
  
  // Upload a single file to Firebase Storage
  const uploadFile = async (file, path) => {
    if (!file) return null;
    
    const storageRef = ref(storage, `food-images/${path}/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };
  
  // Add new food to Firebase
  const handleAddFood = async (e) => {
    e.preventDefault();
    
    if (!mainImageFile) {
      alert("Please upload a main image");
      return;
    }
    
    setIsUploading(true);
    
    try {
      // Upload main image
      const mainImageUrl = await uploadFile(mainImageFile, `${Date.now()}-main`);
      
      // Upload additional images (if any)
      const additionalImageUrls = [];
      
      for (let i = 0; i < additionalImageFiles.length; i++) {
        if (additionalImageFiles[i]) {
          const url = await uploadFile(additionalImageFiles[i], `${Date.now()}-additional-${i}`);
          additionalImageUrls.push(url);
        }
      }
      
      // Create food object with image URLs
      const foodData = {
        ...newFood,
        mainImage: mainImageUrl,
        additionalImages: additionalImageUrls
      };
      
      // Add to Firestore
      const foodsCollection = collection(db, "foods");
      const docRef = await addDoc(foodsCollection, foodData);
      
      // Add the new food to the state with the generated ID
      setFoods(prev => [...prev, { 
        id: docRef.id, 
        ...foodData
      }]);
      
      // Reset form and close modal
      setNewFood({
        name: "",
        mainImage: "",
        additionalImages: ["", "", "", "", ""],
        description: "",
        ingredients: [],
        cookingDuration: "",
        difficulty: "",
        recipe: ""
      });
      setMainImageFile(null);
      setMainImagePreview("");
      setAdditionalImageFiles([null, null, null, null, null]);
      setAdditionalImagePreviews(["", "", "", "", ""]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Error adding food:", error);
      alert("Error uploading images or saving data. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-[960px] items-start flex-1 grow">
      {/* Search Bar */}
      <div className="flex px-4 py-3 self-stretch w-full">
        <div className="flex items-center w-full h-12 rounded-xl bg-[#f2ede8] overflow-hidden">
          <div className="flex items-center pl-4">
            <SearchIcon className="h-6 w-6 text-[#96724f]" />
          </div>
          <Input
            className="flex-1 border-none bg-transparent h-full pl-2 pr-4 py-2 [font-family:'Epilogue',Helvetica] font-normal text-[#96724f] text-base focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Search for recipes..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Section Title with Add Button */}
      <div className="flex justify-between items-center pt-5 pb-3 px-4 w-full">
        <h2 className="[font-family:'Epilogue',Helvetica] font-bold text-[#1c140c] text-[22px] leading-7">
          Our Featured Dishes
        </h2>
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#96724f] text-white hover:bg-[#7d5e41] transition-colors"
          onClick={() => setShowAddModal(true)}
        >
          <Plus className="h-4 w-4" />
          <span className="[font-family:'Epilogue',Helvetica] font-medium text-white text-sm">
            Add Food
          </span>
        </button>
      </div>

      {/* Recipe Cards Grid */}
      <div className="flex flex-col items-start gap-3 p-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
          {filteredFoods.map((food) => (
            <Card key={food.id} className="w-full border-none shadow-none">
              <CardContent className="flex flex-col items-start gap-3 p-0 pb-3">
                <div
                  className="w-full h-[93px] rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${food.mainImage || food.image})` }}
                />
                <div className="flex flex-col items-start w-full">
                  <h3 className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-medium text-[#1c140c] text-base leading-6">
                    {food.name}
                  </h3>
                  <p className="mt-[-1.00px] [font-family:'Epilogue',Helvetica] font-normal text-[#96724f] text-sm leading-[21px]">
                    {food.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Add Food Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="[font-family:'Epilogue',Helvetica] font-bold text-[#1c140c] text-xl mb-4">
              Add New Food
            </h2>
            
            <form onSubmit={handleAddFood} className="space-y-4">
              {/* Food Name */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Name
                </label>
                <Input
                  name="name"
                  value={newFood.name}
                  onChange={handleInputChange}
                  placeholder="Enter food name"
                  required
                  className="border-2 border-[#E8DBD1]"
                />
              </div>
              
              {/* Main Food Image Upload */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Main Image *
                </label>
                <div className="flex flex-col gap-2">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#E8DBD1] rounded-lg cursor-pointer bg-[#F8F2EC] hover:bg-[#F2E8DF]">
                    {mainImagePreview ? (
                      <div className="w-full h-full flex items-center justify-center relative">
                        <img 
                          src={mainImagePreview} 
                          alt="Preview" 
                          className="max-h-full max-w-full object-contain"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                          Click to change
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 mb-2 text-[#96724f]" />
                        <p className="mb-2 text-sm text-[#96724f]">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-[#96724f]">
                          PNG, JPG or JPEG (MAX. 2MB)
                        </p>
                      </div>
                    )}
                    <input 
                      type="file" 
                      className="hidden" 
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleMainImageChange}
                      required
                    />
                  </label>
                </div>
              </div>
              
              {/* Additional Food Images */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Additional Images (Optional)
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {additionalImageFiles.map((file, index) => (
                    <div key={index} className="relative">
                      <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[#E8DBD1] rounded-lg cursor-pointer bg-[#F8F2EC] hover:bg-[#F2E8DF]">
                        {additionalImagePreviews[index] ? (
                          <div className="w-full h-full flex items-center justify-center relative">
                            <img 
                              src={additionalImagePreviews[index]} 
                              alt={`Additional ${index + 1}`} 
                              className="max-h-full max-w-full object-contain"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 flex items-center justify-center text-white transition-opacity">
                              Click to change
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-2">
                            <Upload className="w-6 h-6 mb-1 text-[#96724f]" />
                            <p className="text-xs text-[#96724f]">
                              Image {index + 1}
                            </p>
                          </div>
                        )}
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="image/png, image/jpeg, image/jpg"
                          onChange={(e) => handleAdditionalImageChange(index, e)}
                        />
                      </label>
                      {additionalImagePreviews[index] && (
                        <button
                          type="button"
                          className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                          onClick={() => handleRemoveAdditionalImage(index)}
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Food Description */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Description
                </label>
                <textarea
                  name="description"
                  value={newFood.description}
                  onChange={handleInputChange}
                  placeholder="Enter food description"
                  required
                  rows="2"
                  className="w-full rounded-lg border-2 border-[#E8DBD1] px-3 py-2"
                />
              </div>
              
              {/* Ingredients */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Ingredients
                </label>
                <div className="flex gap-2">
                  <Input
                    value={currentIngredient}
                    onChange={(e) => setCurrentIngredient(e.target.value)}
                    placeholder="Add ingredient"
                    className="border-2 border-[#E8DBD1] flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleAddIngredient}
                    className="px-3 py-2 rounded-lg bg-[#E8DBD1] hover:bg-[#D9C8BA] text-[#1C140C] font-medium"
                  >
                    Add
                  </button>
                </div>
                
                {/* List of added ingredients */}
                <div className="max-h-32 overflow-y-auto">
                  {newFood.ingredients.length > 0 ? (
                    <ul className="space-y-1 mt-2">
                      {newFood.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex justify-between items-center bg-[#F8F2EC] px-3 py-1 rounded">
                          <span>{ingredient}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveIngredient(index)}
                            className="text-red-500 hover:text-red-700"
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-400 text-sm mt-2">No ingredients added yet</p>
                  )}
                </div>
              </div>
              
              {/* Cooking Duration Dropdown */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Cooking Duration
                </label>
                <select
                  name="cookingDuration"
                  value={newFood.cookingDuration}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border-2 border-[#E8DBD1] px-3 py-2"
                >
                  <option value="">Select cooking duration</option>
                  <option value="Under an hour">Under an hour</option>
                  <option value="1-2 hours">1-2 hours</option>
                  <option value="More than 2 hours">More than 2 hours</option>
                </select>
              </div>
              
              {/* Difficulty */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Difficulty
                </label>
                <select
                  name="difficulty"
                  value={newFood.difficulty}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-lg border-2 border-[#E8DBD1] px-3 py-2"
                >
                  <option value="">Select difficulty</option>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              
              {/* Recipe Steps */}
              <div className="space-y-2">
                <label className="[font-family:'Epilogue',Helvetica] font-medium text-[#1c140c]">
                  Recipe Instructions
                </label>
                <textarea
                  name="recipe"
                  value={newFood.recipe}
                  onChange={handleInputChange}
                  placeholder="Enter recipe instructions"
                  required
                  rows="4"
                  className="w-full rounded-lg border-2 border-[#E8DBD1] px-3 py-2"
                />
              </div>
              
              {/* Form Buttons */}
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg border border-[#E8DBD1] text-[#1C140C] font-medium"
                  disabled={isUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#96724f] text-white hover:bg-[#7d5e41] font-medium disabled:bg-[#c1ab96] disabled:cursor-not-allowed"
                  disabled={isUploading}
                >
                  {isUploading ? "Uploading..." : "Save Food"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};