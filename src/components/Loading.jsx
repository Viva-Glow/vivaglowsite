import React from 'react'
import '../css/spinner.css'
import { RiseLoader} from 'react-spinners'

const Loading = () => {


    return (
        <div className='spinner'>
           
            <RiseLoader

 color="#CCB892" />
  
        </div>
       
    )
}

export default Loading