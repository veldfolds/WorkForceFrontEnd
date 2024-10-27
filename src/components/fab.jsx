import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

export const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/employees/create'); // Navigate to the employee creation form
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-8
        right-8
        w-10
        h-10
        flex
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        shadow-lg
        hover:bg-blue-700
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
        transition
        ease-in-out
        duration-200"
      >
      <FaPlus className="h-4 w-4 font-thin" />
    </button>
  );
};
