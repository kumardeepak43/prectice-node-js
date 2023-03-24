import React from 'react'

const Common = () => {
  return (
    <div>
    <section id='header' className='d-flex align-item-center'>
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row'>
          <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
          <h1> {props.name} <strong className='brand-name'>Dk Niwas</strong></h1>
          <h2 className='may-3'>
            we are Telented devloper making website
          </h2>
          <div className='mt-03'>
            <NavLink to={props.visit} className='btn-get-started'>{props.btname}
            </NavLink>
          </div>
          </div>
          <div className='col-lg-6 order-lg-2 header-img'>
            <img src= {NavLink} className="imgage-fluid" alt='home imge' />
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>
</div>
  )
}

export default Common;