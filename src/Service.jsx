import React from 'react'

const Card = () => {
  return (
    <>
        <div className='my-5'>
        <h1 className='taxt-center'>our Services</h1>
        </div>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>
                {
                  Sdata.map((val, ind) => {
                    return <card key={ind}
                    imgsrc={val.imgsrc} title={val.title} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card;