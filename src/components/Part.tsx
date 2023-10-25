import { CoursePart } from '../types';
import { assertNever } from '../helpers';

const Part = ({ part }: { part: CoursePart }): JSX.Element => {
  switch(part.kind) {
    case 'basic':
      return <div>
        <p><b>{part.name} {part.exerciseCount}</b></p>
        <p><i>{part.description}</i></p>
      </div>;
    case 'group':
      return <div>
        <p><b>{part.name} {part.exerciseCount}</b></p>
        <p>Group Project Count: {part.groupProjectCount}</p>
      </div>;
    case 'background':
      return <div>
        <p><b>{part.name} {part.exerciseCount}</b></p>
        <p><i>{part.description}</i></p>
        <p>{part.backgroundMaterial}</p>
      </div>;
    case 'special':
      return <div>
        <p><b>{part.name} {part.exerciseCount}</b></p>
        <p><i>{part.description}</i></p>
        <p>requirements: { part.requirements.join(', ') }</p>
      </div>;
    default:
      return assertNever(part);
  }
};

export default Part;