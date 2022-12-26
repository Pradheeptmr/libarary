const Category = (props) => {
    // Handle book price:
    const bookPrice = `$${parseFloat(props.price).toFixed(2)}`;
  
    return (
      <div className="category w-72 border-2 rounded-xl bg-zinc-100 border-amber-600">
        <img src={props.img} alt={props.title} className="w-full h-1/2" />
        <div className="content flex justify-center items-center">
          <div className="text">
            <h2 className="text-2xl font-bold text-teal-700 px-2 mt-2">
              {props.title}
            </h2>
            <p className="text-gray-600 px-2 my-2">{props.description}</p>
            <div className="numbers flex justify-between mb-2">
              <p className="bg-indigo-200 text-blue-600 w-fit font-bold p-2 mr-2 rounded-r-full">
                {props.date}
              </p>
              <span className="bg-indigo-200 text-blue-600 w-fit font-bold p-2 rounded-l-full">
                {bookPrice}
              </span>
            </div>
            <p className="font-bold bg-indigo-200 text-blue-600 w-fit px-4 rounded-b-xl mx-auto">
              {props.author}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Category;