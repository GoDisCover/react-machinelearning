import React, { useState } from 'react'
import https from '../../../utils/http'

export default function FormRPS({
   setHasil
}) {
    const [file, setFile] = useState()
    const handleChange = (e) =>{
        setFile(e.target.files[0])
    }
    
    const handleSumbit = async(e) => {
        e.preventDefault()
        try{
            // setIsloading(true)
            const formData = new FormData()
            formData.append("file",file)
            const response = await https.post("/predict-rps",formData)
            setHasil({
                predict : response.data.data.prediction,
                probab : response.data.data.probability
            })
            console.log(response.data.data)
            
        }
        catch (error){
            console.log(error)
        }
    }
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input onChange={handleChange} type="file"/>
        <button type="submit">NIGGER</button>
      </form>
    </div>
  )
}
