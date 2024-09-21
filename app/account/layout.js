import SideNavigation from "@/app/_components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-5 h-full">
      <SideNavigation />
      <div className="col-span-4 ">{children}</div>
    </div>
  );
}

export default layout;
