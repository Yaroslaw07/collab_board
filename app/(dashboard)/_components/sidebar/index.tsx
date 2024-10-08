import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
  return (
    <aside className="fixed z-[1] h-[calc(100vh-1.5rem)] w-[60px] shadow-sm top-3 bottom-3 bg-primary text-white flex flex-col p-3 gap-y-4 rounded-lg ml-1">
      <List />
      <NewButton />
    </aside>
  );
};
