import userEvent from "@testing-library/user-event";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SingleInput from "./componrnt/SingleInput";


function App() {
  const { register, handleSubmit, reset } = useForm();
  const [checked, setChecked] = useState(false);
  let boxes = 0;
  let inputField = [];
  const [items, setItems] = useState([]);

  const onSubmit = (data) => {
    boxes = data.boxAmount;
    if (boxes > 0) {
      for (let index = 1; index <= boxes; index++) {
        inputField.push({ 'item': index, 'id': index, 'isChecked': checked });
      }
      setItems(inputField);
    }
    reset();
  };
  // console.log(items)

  const handleAllchecked = event => {
    if (event.target.checked) {
      setChecked(true)
      items?.map(item => item.isChecked = checked);
    } else {
      setChecked(false)
      items?.map(item => item.isChecked = checked);
    }
  };

  const handleChange = event => {
    let isChecked = event.target.checked;
    // let checkListValue = event.target.closest('div')
    // let v = checkListValue.find('.num-input')

    setChecked(!checked);
  };

  return (
    <div className="flex flex-col items-center bg-zinc-100  mx-auto h-screen">
      <h1 className="text-4xl text-gray-800 font-sans font-semibold my-4">Items Counter</h1>
      <div className="flex flex-col">
        <div className="flex p-2">
          <form className="block" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex mb-2">
              <div className="bg-orange-300 mr-2 flex items-center text-gray-700 rounded-sm font-semibold px-2">No of Textbox:</div>
              <div>
                <input
                  className="border-2 border-gray-300 rounded-sm h-8 px-2 text-center text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-300"
                  type="number"
                  min={1}
                  required
                  placeholder='Enter textbox number'
                  {...register("boxAmount")}
                />
              </div>
            </div>
            <button
              type="submit"
              value="Add Textbox"
              className=" active:bg-blue-600 float-right py-2 rounded-md bg-blue-500 text-white px-2 text-xs font-semibold">Add Textbox
            </button>
          </form>
        </div>
        {items.length > 0 && <div className="flex items-center mt-12">
          <label htmlFor="allChecked">
            <input
              className="accent-violet-500  w-4 h-4"
              type="checkbox"
              onChange={handleAllchecked}
              name="allChecked"
            />
          </label>
          <div className="bg-orange-300 mr-2 flex items-center text-gray-700 rounded-sm font-semibold px-2 ml-3 py-1">All check</div>
        </div>}
        <div className="flex flex-col items-start mt-2">
          {
            items?.map((item, index) => <SingleInput
              key={index}
              item={item}
              checked={checked}
              handleChange={handleChange}
            />)
          }
        </div>
      </div>
    </div>

  );
};

export default App;
