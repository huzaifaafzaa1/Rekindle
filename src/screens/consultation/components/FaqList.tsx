import Image from "next/image";

const faqs = [
  "How quickly can you start?",
  "What does unlimited design mean?",
  "How long do designs take to complete?",
  "How do I know which plan is right for me?",
  "Is there a minimum commitment?",
  "Is this subscription good value for money?",
  "What billing options are there?",
  "Who will my designer be?",
  "What sort of growth can I expect to see?",
  "What if I already have a design team?",
];

const FaqList = () => {
  return (
    <div className="bg-blue-50 py-8">
      <h2 className="text-center text-2xl md:text-4xl font-semibold mb-8">Frequently asked questions</h2>
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <div key={index} className="w-[90%] lg:w-[75%] mx-auto flex justify-between p-4 items-center bg-white cursor-pointer">
            <p className="text-gray-800">{faq}</p>
            <div className="h-[15px] w-[15px] flex justify-center items-center">
              <Image src="/icons/arrowdown1.svg" alt="Expand" height={15} width={15} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;
