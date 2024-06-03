import { useMemo } from 'react';

export function Technology() {
  const listSkill = useMemo(
    () => [
      {
        label: 'Android XML',
        score: 1,
        type: 'Advanced',
      },
      {
        label: 'Android Compose',
        score: 0.8,
        type: 'Advanced',
      },
      {
        label: 'Kotlin, Java',
        score: 0.9,
        type: 'Advanced',
      },
      {
        label: 'JavaScript',
        score: 0.6,
        type: 'Regular',
      },
      {
        label: 'SQL, Room Database, Realm',
        score: 0.7,
        type: 'Advanced',
      },
    ],
    [],
  );
  const otherSkills = useMemo(
    () => [
      'AndroidX',
      'Android Compose',
      'Android XML',
      'Firebase',
      'Socket',
      'Bluetooth low energy ',
      'Coroutine',
      'Live data',
      'Flow',
      'Retrofit',
      'RoomDB',
      'MapBox',
      'MongoDB',
      'Nodejs(Expressjs)',
      'More...',
    ],
    [],
  );

  const handleMore = (more) => {
    if (more !== 'More...') return;
    const pdfUrl = './HuynhQuocNguyen.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'HuynhQuocNguyen.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='technologies' className='technology-container'>
      <div className='technology-container__title'>Technologies</div>
      {listSkill.map((item, index) => (
        <div key={index} className='technology-container__title--item'>
          <div className='technology-container__title--item-head'>
            <span className='technology-container__title--item-head-label'>{item.label}</span>
            <div
              style={{ width: `calc(100% * ${item.score})` }}
              className='technology-container__title--item-head-line'
            ></div>
          </div>
          <span className='technology-container__title--item-type'>{item.type}</span>
        </div>
      ))}
      <div className='technology-container__more'>Additional technologies and skills</div>
      <div className='technology-container__sub'>
        {otherSkills.map((item, index) => (
          <div key={index} className='technology-container__sub--item' onClick={() => handleMore(item)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
