export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-3 flex flex-col gap-y-4">
      <div className="bg-background rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Elipsis</div>
      </div>
      <div className="bg-background rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-3 px-1.5 flex flex-col gap-y-4 bg-background h-[360px] w-[52px] shadow-md rounded-md" />
  );
};