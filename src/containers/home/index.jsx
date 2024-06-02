import { Summary } from './summary';
import { Technology } from './technology';
import { WorkExperience } from './workExperience';
import './index.scss';
import { Project } from './project';

export function Home() {
  return (
    <div className='body-container'>
      <Summary />
      <Technology />
      <Project />
      <WorkExperience />
    </div>
  );
}
