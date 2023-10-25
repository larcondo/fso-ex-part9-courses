interface ContentProps {
  name: string;
  exerciseCount: number;
}

const Content = ({ parts }: { parts: ContentProps[] }): JSX.Element => {
  return(
    <>
      { 
        parts.map( part => {
          return <p key={part.name}>{part.name} {part.exerciseCount}</p>;
        })
      }
    </>
  );
};

export default Content;