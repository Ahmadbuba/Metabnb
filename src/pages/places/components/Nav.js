import setting from "../../../assests/nav/setting.png";

const Nav = () => {
  const items = [
    "Resturant",
    "Cottage",
    "Castle",
    "fantastic city",
    "beach",
    "Carbins",
    "Off-grid",
    "Farm",
  ];

  const scroll = (scrollOffset) => {};

  return (
    <div>
      <ul className=" pt-16 pb-14 w-11/12 mx-auto list-none flex justify-between gap-7 items-center flex-nowrap overflow-x-scroll scrollbar-hide font-red-rose font-normal text-sm tracking-normal md:w-10/12 md:pt-28 md:pb-16">
        {items.map((item) => (
          <li key={item} className="flex-auto  max-[869px]:flex-none ">
            {item}
          </li>
        ))}
        <button className="py-0.5 px-6 rounded bg-white border-locationGray border flex justify-center items-center gap-2 mr-14">
          <img src={setting} />
          Filters
        </button>
      </ul>
    </div>
  );
};

export default Nav;
