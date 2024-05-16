import React from 'react'
import ChinhSach_1 from "../images/policy1.webp"

const ChinhSachItem = () => {
    return (
        <div className='row'>
            <div className='col-4'>
                <img src={policy1} className='img-fluid' alt='ChinhSach_1'/>
            </div>
            <div className='col-8'>
                <p className='p-0 m-0'><strong>Miễn phí vận chuyển</strong></p>
            </div>
        </div>
    )
}
export default ChinhSachItem;