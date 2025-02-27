import React from 'react'

const MoreInfo = () => {
    return (
      <div className='bg-slate-50'>
      <section id='problem' className='container py-24 sm:py-32 mx-auto'>
        <div className='bg-white border rounded-lg py-12 md:w-full w-11/12 mx-auto'>
          <div className='px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
            <img
              src='/undraw_code-review.svg'
              alt=''
              className='w-[300px] object-contain rounded-lg'
            />
            <div className='bg-green-0 flex flex-col justify-between md:w-8/12'>
              <div className='pb-6'>
                <h2 className='text-3xl md:text-4xl font-bold'>
                  <span className='bg-clip-text'>Software is Hard! </span>
                </h2>
                <p className='text-xl text-muted-foreground mt-4'>
                  Stop doing manual tasks that could be automated. Make your digital presence actually lead to more customers.
                </p>
              </div>

              {/* <Statistics /> */}
              <section id='statistics'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>Low</h2>
                    <p className='text-xl text-muted-foreground'>Conversion Rates</p>
                  </div>

                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      Countless
                    </h2>
                    <p className='text-xl text-muted-foreground'>Hours Spent Doing Manual Work</p>
                  </div>
                  <div className='space-y-2 text-center'>
                    <h2 className='text-3xl sm:text-4xl font-bold '>
                      Stagnant
                    </h2>
                    <p className='text-xl text-muted-foreground'>
                      Revenue
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
