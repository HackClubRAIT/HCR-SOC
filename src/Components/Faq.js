import "../css/faq.css";

const faqList = [
  {
    id: 1,
    question: "I am a beginner, can I participate?",
    answer:
      "Of course. If you have basic knowledge of development in any domain, you are good to go.",
  },
  {
    id: 2,
    question: "I am not a student of RAIT, can I participate?",
    answer:
      "Yes, definitely. Anyone who is willing to contribute to open-source can participate.",
  },
  {
    id: 3,
    question: "Is there any registration fees?",
    answer: "No, It is absolutely free of cost.",
  },
  {
    id: 4,
    question: "Can I register as both participant and project admin?",
    answer: "No, you can either register as a participant or project admin.",
  },
  {
    id: 5,
    question: "How will I know that I am selected?",
    answer:
      "We will be notifying all the selected participants and project mentors through email.",
  },
  {
    id: 6,
    question: "My question is not listed here.",
    answer: "If your question is not listed here, feel free to contact us.",
  },
];
const Faq = () => {
  return (
    <section class="timer-section" id="FAQ" style={{paddingTop:"10vh"}}>
      <h1 className="headings">
        FAQs
      </h1>
      <div className="container">
        <div class="timer-container">
          <ul class="timer">
            {faqList.map((faq) => (
              <li class="step2" key={faq.id}>
                <b>
                  Q{faq.id} :<em>{faq.question} </em>
                </b>
                <div class="content">
                  <p>A: {faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export default Faq;
