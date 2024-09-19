import SideNavigation from "@/app/_components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}

export default layout;
