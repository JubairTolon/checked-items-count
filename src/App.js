import { useState } from "react";
import { useForm } from "react-hook-form";
import SingleInput from "./componrnt/SingleInput";


function App() {
  const { register, handleSubmit, reset } = useForm();
  const [boxes, setBoxes] = useState(0);
  const inputField = [];
  const [isSubscribed, setIsSubscribed] = useState(false);


  const onSubmit = (data) => {
    setBoxes(data.boxAmount);
    reset();
  };

  if (boxes > 0) {
    for (let index = 1; index <= boxes; index++) {
      inputField.push('item' + index)
    }
  };
  console.log(inputField);


  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setIsSubscribed(current => !current);
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
        {inputField.length > 0 && <div className="flex items-center mt-12">
          <label htmlFor="allChecked">
            <input
              className="accent-violet-500  w-4 h-4"
              type="checkbox"
              value={isSubscribed}
              onChange={handleChange}
              name="allChecked"
            />
          </label>
          <div className="bg-orange-300 mr-2 flex items-center text-gray-700 rounded-sm font-semibold px-2 ml-3 py-1">All check</div>
        </div>}
        <div className="flex flex-col items-start mt-2">
          {
            inputField.map((item, index) => <SingleInput key={index} item={item} />)
          }
        </div>
      </div>
    </div>

  );
};

export default App;
