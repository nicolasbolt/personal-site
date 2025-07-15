import React from 'react'

const sponsors = [
    {
      icon: <ion-icon size='large' name="logo-javascript"></ion-icon>,
      name: 'Web Development',
    },
    {
      icon: <ion-icon size='large' name="desktop-outline"></ion-icon>,
      name: 'Web Design',
    },
    {
      icon: <ion-icon size='large' name="pencil-outline"></ion-icon>,
      name: 'Mobile Optimization',
    },
    {
      icon: <ion-icon size='large' name="layers-outline"></ion-icon>,
      name: 'Marketing',
    },
    {
      icon: <ion-icon size='large' name="globe-outline"></ion-icon>,
      name: 'SEO Optimization',
    },
  ];

const MoreInfo = () => {
    return (
        <section id='sponsors' className='container mt-10 sm:mt-12 sm:mb-24 py-8 sm:px-0 px-3 mx-auto'>
          <h2 className='text-center text-md lg:text-xl font-bold mb-2 text-primary'>
            My Skills
          </h2>
    
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8  border-4 border-customTan sm:rounded-full rounded shadow-lg py-3'>
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className='flex items-center gap-1 text-primary/80'
              >
                <span>{icon}</span>
                <h3 className='text-xl  font-bold'>{name}</h3>
              </div>
            ))}
          </div>
        </section>
      );
}

export default MoreInfo
