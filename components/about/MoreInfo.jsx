import React from 'react'

const MoreInfo = () => {
    return (
      <div className='bg-neutral-50 md:px-0 px-3'>
      <section id='problem' className='container py-24 sm:py-32 mx-auto'>
        <div className='bg-white border rounded-lg py-12'>
          <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
            <img
              src='/undraw_code-review.svg'
              alt=''
              className='w-[300px] object-contain rounded-lg'
            />
            <div className='bg-green-0 flex flex-col justify-between md:w-8/12'>
              <div className='pb-6'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                  <span className='bg-clip-text'>From Startups </span>
                  To Enterprise Level Apps
                </h2>
                <p className='text-xl text-muted-foreground mt-4'>
                  I have diverse experience.  I have built complete solutions for startups and I have worked on teams who have developed enterprise level applications for large amounts of users.
                </p>
              </div>

              {/* <Statistics /> */}
              <section id='statistics'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>5+</h2>
                    <p className='text-xl text-muted-foreground'>years of experience</p>
                  </div>

                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      3+
                    </h2>
                    <p className='text-xl text-muted-foreground'>languages</p>
                  </div>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      High Quality
                    </h2>
                    <p className='text-xl text-muted-foreground'>
                      code produced with code reviews
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>

      );
}

export default MoreInfo
