import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Functionallity = (props) => {
  return (
    <div className="functionallity w-80 p-4">
      <img src={props.img} alt={props.title} className="max-w-full mb-4" />
      <div className="title flex flex-row-reverse justify-center items-center">
        <h3 className="ml-4 text-2xl font-bold">{props.title}</h3>
        <div className="icon relative">
          <FontAwesomeIcon
            icon={faComment}
            className="text-purple-700 text-2xl"
          />
          <span className="absolute left-1/3 top-0 text-white">
            {props.number + 1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Functionallity;