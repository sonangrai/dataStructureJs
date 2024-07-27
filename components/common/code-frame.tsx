function CodeFrame({ data }: any) {
  return (
    <div className="max-h-[80dvh] overflow-y-auto">
      <div className="whitespace-pre bg-slate-600 p-2 text-white my-4 text-[14px]">
        {atob(data["content"])}
      </div>
    </div>
  );
}

export default CodeFrame;
