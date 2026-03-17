const SideBarContent = ({ data, onMenuClick, activeMenu }) => {
  return (
    <>
      {data.map((item) => {
        const isActive = activeMenu === item.name; // compute before returning JSX
        return (
          <div
            key={item.id}
            className={`w-[287px] flex gap-4 items-center rounded-[10px] md:pl-[18px] pl-[14px] py-[16px] cursor-pointer ${
              isActive ? "bg-blue-100" : "hover:bg-gray-200"
            }`}
            onClick={() => onMenuClick(item.name)}
          >
            <div className="w-[20px]">
              <img src={item.icon} alt={item.name} />
            </div>
            <div className="w-[100px]">
              <p className="capitalize font-instrument font-medium md:text-[14px] leading-[24px] tracking-[-0.31px] text-[#585858]">
                {item.name}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SideBarContent;