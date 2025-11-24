function FormPredict() {
    return <div className="grid-cols-2 grid gap-5">
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Pregnancies</legend>
            <input type="number" max={10} min={0} class="input" placeholder="Pregnancies" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Glucose</legend>
            <input type="number" class="input" placeholder="Glucose" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">BloodPressure</legend>
            <input type="number" class="input" placeholder="BloodPressure" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">SkinThickness</legend>
            <input type="number" class="input" placeholder="SkinThickness" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Insulin</legend>
            <input type="number" class="input" placeholder="Insulin" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">BMI</legend>
            <input type="number" class="input" placeholder="BMI" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">DiabetesPedigreeFunction</legend>
            <input type="number" class="input" placeholder="DiabetesPedigreeFunction" />
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Age</legend>
            <input type="number" class="input" placeholder="Age" />
        </fieldset>

        <button className="btn btn-neutral mt-4">Submit</button>
    </div>
}

export default FormPredict