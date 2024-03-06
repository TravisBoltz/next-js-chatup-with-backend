import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";


const Selector = ({ onCountrySelect }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  useEffect(() => {
    onCountrySelect(selected);
  }, [selected, onCountrySelect]);

  return (
    <div className="w-full  px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-white transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-royalBlue invalid:ring-red-400 focus:invalid:outline-none">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-darkGrey w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-royalBlue"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-transparent mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-Lgrey ring-1 ring-gray-300 rounded-xl">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-royalBlue w-full p-2 bg-Lgrey  outline-none"
          />
        </div>
        {countries?.map((country) => (
          <li
            key={country?.name}
            className={`p-2 text-sm hover:bg-Lgrey hover:text-darkGrey hover: rounded-xl
            ${
              country?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-gold ring-1  ring-gray-300 rounded-xl text-darkGrey"
            }
            ${
              country?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(country?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {country?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;