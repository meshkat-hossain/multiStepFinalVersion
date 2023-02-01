import { useState } from "react";
import "./App.css";
import Step from "./components/Step";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import Thanks from "./components/Thanks";
import { useEffect } from "react";

function App() {
  const [index, setIndex] = useState(0);

  // PERSONAL INFO STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(["", "", ""]);

  const [personalDetails, setPersonalDetails] = useState(true);
  const [plan, setPlan] = useState(false);
  const [addOn, setAddOn] = useState(false);
  const [summary, setSummary] = useState(false);
  const [thanks, setThanks] = useState(false);

  const nextStep = () => {
    setIndex(index+1)
  };


  const swtichStep = () => {
    switch (index) {
      case 1:
        setPersonalDetails(false);
        setPlan(true);
        setAddOn(false);
        setSummary(false);
        setThanks(false);
        break;
      case 2:
        setPersonalDetails(false);
        setPlan(false);
        setAddOn(true);
        setSummary(false);
        setThanks(false);
        break;
      case 3:
        setPersonalDetails(false);
        setPlan(false);
        setAddOn(false);
        setSummary(true);
        setThanks(false);
        break;
      case 4:
        setPersonalDetails(false);
        setPlan(false);
        setAddOn(false);
        setSummary(false);
        setThanks(true);
        break;
      default:
        setPersonalDetails(true);
        setPlan(false);
        setAddOn(false);
        setSummary(false);
        setThanks(false);
        break;
    }
  };

useEffect( () => {
  swtichStep()
})

  return (
    <div className="App">
      <Step currentStep={index} />
      <article className="displays">
        {personalDetails && (
          <PersonalInfo
            name={name}
            email={email}
            phone={phone}
            setName={(e) => setName(e.target.value)}
            setEmail={(e) => setEmail(e.target.value)}
            setPhone={(e) => setPhone(e.target.value)}
          />
        )}
        {plan && <SelectPlan />}
        {addOn && <AddOns />}
        {summary && <Summary />}
        {thanks && <Thanks />}
      </article>

      <section
        className={`next-and-back  ${index > 3 && "hide-next-and-back"} `}
      >
        <button
          className={`back-btn ${index === 0 && "hide-back-btn"}`}
          onClick={() => setIndex(index - 1)}
        >
          Go Back
        </button>
        <button
          onClick={nextStep}
          className={`next-btn ${index > 2 && "change-next-btn"}`}
        >
          {`${index > 2 ? "Confirm" : "Next Step"}`}{" "}
        </button>
      </section>
    </div>
  );
}

export default App;
