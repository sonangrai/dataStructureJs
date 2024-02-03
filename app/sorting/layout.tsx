import InputField from "./bubble/component/InputField";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10">
      <InputField />
      {children}
    </div>
  );
}

export default layout;
