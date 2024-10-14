import { useNavigate } from 'react-router-dom';

export const FloatingActionButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create'); // Navigate to the employee creation form
  };

  return (
    <button
      onClick={handleClick}
      className="
        fixed
        bottom-8
        right-8
        w-16
        h-16
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
        duration-200
      "
    >
      <svg
        className="w-8 h-8 mx-auto"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 5v14m-7-7h14" />
      </svg>
    </button>
  );
};
