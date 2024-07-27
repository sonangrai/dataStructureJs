const fetchFrame = async (dir: string) => {
  const response = await fetch(
    `https://api.github.com/repos/sonangrai/dataStructureJs/contents/app/${dir}/logic.ts`
  );
  return response;
};

export default fetchFrame;
