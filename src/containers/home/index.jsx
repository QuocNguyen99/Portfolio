import { Summary } from './summary';
import { Technology } from './technology';
import { WorkExperience } from './workExperience';
import './index.scss';

export function Home() {
  return (
    <div className='body-container'>
      <Summary />
      <Technology />
      <WorkExperience />
    </div>
  );
}
