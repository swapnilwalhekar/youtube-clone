import React, { useContext } from "react";
import { categories } from "./../utils/constants";
import LeftNavMenuItems from "./LeftNavMenuItems";
import { Context } from "./../context/contextApi";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } =
    useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
        mobileMenu ? "translate-x-0" : ""
      }`}
    >
      <div className="flex px-5 flex-col">
        {categories.map((category, index) => {
          return (
            <>
              <LeftNavMenuItems
                key={index}
                text={category.type === "home" ? "Home" : category.name}
                icon={category.icon}
                action={() => {
                  clickHandler(category.name, category.type);
                  navigate("/");
                }}
                className={
                  selectedCategory === category.name ? "bg-white/[0.15]" : ""
                }
              />
              {category.divider && <hr className="my-5 border-white/[0.2]" />}
            </>
          );
        })}
        <hr className=" my-5 border-white/[0.2]" />
        <div className="flex justify-center text-white/[80%] text-[12px]">
          Clone by: Swapnil W.
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
