import { CoursePart } from '../types';
import Part from './Part';

const Content = ({ parts }: { parts: CoursePart[] }): JSX.Element => {
  return(
    <>
      { 
        parts.map( (part, index) => {
          return <Part part={part} key={index} />;
        })
      }
    </>
  );
};

export default Content;