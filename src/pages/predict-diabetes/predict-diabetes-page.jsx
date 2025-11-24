import FormPredict from "./components/form-predict"

function PredictDiabetesPage() {
    return (
        <div className="min-h-screen bg-slate-400 flex items-center justify-center">
            <div className="bg-amber-100 flex items-center justify-center">
                <div className="bg-white p-5 rounded-3xl max-w-6xl">
                    <FormPredict/>
                </div>
                <div className="p-5">
                    <img src="https://media.tenor.com/I9qt03YKkjQAAAAe/monkey-thinking.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default PredictDiabetesPage