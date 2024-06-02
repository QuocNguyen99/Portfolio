import { useMemo } from 'react';

export function WorkExperience() {
  const listEx = useMemo(
    () => [
      {
        label: 'Samsung Electronics HCMC CE Complex',
        time: 'February 2023 – Present',
        content: [
          'Responsibility: Requirements analysis, convert code from Java to Kotlin, maintain, and implement features like connect socket, send data by BLE, image processing,...',
          'Technologies: Android XML and Composr, Kotlin, Coroutine, MVVM, LiveData, Flow, ViewModel, Retrofit, BLE, Socket, JavaScript',
          'Team size: 18',
          'Description: Plugin App for SmartThing App using in Samsung device',
        ],
      },
      {
        label: 'Wee Digital',
        time: 'August 2022 – December 2022',
        content: [
          'Responsibility: Working with team on design, development new feature like digital wallet and release application.',
          'Working with team on design, development and release application.',
          'Team size: 4',
          'Description: Like a digital wallet but user can use face for scan and pay',
        ],
      },
      {
        label: 'FPT Software',
        time: 'May 2021 – August 2022',
        content: [
          'Learning technologies from industry leaders.',
          'Responsibility: Implement new features with health equipment like data communication between mobile and device, chart and fix bugs',
          'Team size: 10',
          'Description: Application for storing and analyzing data based on medical devices',
        ],
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
