import { useMemo } from 'react';

export function WorkExperience() {
  const listEx = useMemo(
    () => [
      {
        label: 'Samsung Electronics HCMC CE Complex',
        time: 'February 2023 – Present',
        content: [
          'Technologies: Android Framework, Kotlin, Coroutine, MVVM, LiveData, ViewModel, Retrofit,  BLE, Socket',
          'Team size: 14',
          'Responsibility: Implement features, refactor code from Java to Kotlin, maintain, and optimize flow send images with high resolution to TV, fix bugs, write bridges between native and web',
          'Description: Plugin App for SmartThing App using control image display in Samsung TV',
        ],
      },
      {
        label: 'BAP IT CO., JSC',
        time: 'Mar 2022 – Feb 2024',
        content: [
          'Managing team members and overseeing task process within the project.',
          'Working with team on design, development and release application.',
          'Design RESTful API.',
          'Initiating the project and constructing common components for the project, based on UI libraries.',
          'Supporting the company in seeking new technologies for integration with blockchain interactions.',
          'Maintaining legacy projects.',
        ],
      },
      {
        label: 'CMC GLOBAL',
        time: 'Jul 2020 – Feb 2022',
        content: [
          'Learning technologies from industry leaders.',
          'Working with team on design, development and release application.',
          'Building UI based on design.',
          'Integrating APIs with backend (BE) teams.',
          'Maintaining legacy projects.',
        ],
      },
      {
        label: 'TRI KHAI TECHNOLOGIES',
        time: 'Jul 2019 – Oct 2019',
        content: ['Joining the compnay in the role of an intern.'],
      },
    ],
    [],
  );
  return (
    <div id='work-experience' className='experience-container'>
      <div className='experience-container__title'> Work Experience</div>
      {listEx.map((item, index) => (
        <div key={index} className='experience-container__box'>
          <div className='experience-container__box--header'>
            <div className='experience-container__box--header-company'>{item.label}</div>
            <div className='experience-container__box--header-year'>{item.time}</div>
          </div>
          <div className='experience-container__box--content'>
            {item.content.map((jtem, jdex) => (
              <div key={jdex} className='experience-container__box--content-child'>
                {jtem}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
