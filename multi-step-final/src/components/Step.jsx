import React from "react";

const stepInfo = [
  {
    id: 1,
    step: `step 1`,
    name: "your info",
  },
  {
    id: 2,
    step: `step 2`,
    name: "select plan",
  },
  {
    id: 3,
    step: `step 3`,
    name: "add-ons",
  },
  {
    id: 4,
    step: `step 4`,
    name: "summary",
  },
];
const Step = ({currentStep}) => {
  return (
    <div className="step-header">
      <section className="step-header-container">
        {stepInfo.map((info) => {
          const { id, step, name } = info;
          return (
            <article key={id} className={`step-container `}>
              <p
                className={`step-id ${id-1 === currentStep && "active-step"}`}
              >
                {id}
              </p>
              <section className='step-and-name'>
                <p className='step-no'>{step}</p>
                <p className='step-name'>{name}</p>
              </section>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Step;
