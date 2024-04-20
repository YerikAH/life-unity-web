import { ArrowLongUpIcon } from "@heroicons/react/24/outline";

export const ButtonScrollTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={handleClick}
      className="transtion-all hover:opacity-100 active:95 opacity-75 fixed bottom-8 right-8 w-12 h-12 grid place-items-center rounded-md bg-yellow-600"
    >
      <ArrowLongUpIcon className="text-white w-6 h-6" strokeWidth={3} />
    </button>
  );
};
