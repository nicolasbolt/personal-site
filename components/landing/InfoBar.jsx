import React from 'react'

const sponsors = [
    {
      icon: <ion-icon size='large' name="logo-javascript"></ion-icon>,
      name: 'Front End Web Development',
    },
    {
      icon: <ion-icon size='large' name="logo-python"></ion-icon>,
      name: 'Backend Web Development',
    },
    {
      icon: <ion-icon size='large' name="logo-amazon"></ion-icon>,
      name: 'AWS',
    },
    {
      icon: <ion-icon size='large' name="code-outline"></ion-icon>,
      name: 'Terraform',
    },
    {
      icon: <ion-icon size='large' name="analytics-outline"></ion-icon>,
      name: 'CI/CD',
    },
  ];

const MoreInfo = () => {
    return (
        <section id='sponsors' className='container pt-24 sm:py-32 py-8 mx-auto'>
          <h2 className='text-center text-md lg:text-xl font-bold mb-8 text-primary'>
            My Skills
          </h2>
    
          <div className='flex flex-wrap justify-center items-center gap-4 md:gap-8'>
            {sponsors.map(({ icon, name }) => (
              <div
                key={name}
                className='flex items-center gap-1 text-muted-foreground/60'
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
