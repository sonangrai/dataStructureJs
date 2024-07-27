"use client";
function CodeFrame({ data }: any) {
  return (
    <div>
      <div className="whitespace-pre bg-black text-white p-2">
        {atob(data["content"])}
      </div>
    </div>
  );
}

export default CodeFrame;
