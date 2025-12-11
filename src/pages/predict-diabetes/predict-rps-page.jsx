import { useState } from "react"
import FormRPS from "./components/form-rps"

function PredictDiabetesPage() {
    const [hasil, setHasil] = useState({
        predict : "",
        probab : ""
    })
    const [isloading, setIsloading] = useState(false)
    if (isloading) {
        <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
    }
    return (
        <div className="min-h-screen bg-slate-400 flex items-center justify-center">
            <div className="bg-black-100 flex items-center justify-center">
                <div className="bg-white p-5 rounded-3xl max-w-6xl">
                    <FormRPS setHasil={setHasil}></FormRPS>
                </div>
                <div className="p-5">
                    hasil prediksi : {hasil.predict} {hasil.probab}
                </div>
            </div>
        </div>
    )
}

export default PredictDiabetesPage