interface IProps {
  title: string;
  description: string;
}

function Article(props: IProps) {
  return (
    <div>
      <h2 className="text-blue-600 text-[24px] font-semibold">
        {"# "}
        {props.title}
      </h2>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  );
}

export default Article;
