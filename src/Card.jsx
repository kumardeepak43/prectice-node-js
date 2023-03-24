import React from 'react'
import { NavLink } from 'react-router-dom'

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
                <div className='col-md-4 col-10 mx-auto'>
                  <div class="card" style="width: 18rem">
                    <img src= {props.imgsrc} class="card-img-top" alt='{props.imgsrc}' />
                    <div class="card-body">
                      <h5 className='card-title font-weight-bold'>{props.title}</h5>
                      <p class="card-text">
                        some quickly exmpale txt to build on the card title and make up th builk of the card's content.
                      </p>
                      <NavLink to=" " class="btn btn-primary">Go someWhere</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card