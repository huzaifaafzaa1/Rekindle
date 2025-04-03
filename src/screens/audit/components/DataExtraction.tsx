"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const DataExtraction = () => {
  const t = useTranslations("dataExtraction");
  const [activeTab, setActiveTab] = useState("withoutCaptain");

  return (
    <div className="bg-[var(--color-blue-bg)] md:h-screen mt-3 md:mt-20 flex gap-2 flex-col  items-center">
      {/* Tab Switcher */}
      <div className="mt-6 relative flex items-center bg-[var(--color-blue-primary)] p-1 rounded-full w-72 ">
        <div
          className={`absolute left-0 top-0 h-full w-1/2 bg-[var(--color-navy)] rounded-full transition-all duration-300 ${
            activeTab === "withCaptain" ? "translate-x-full" : ""
          }`}
        ></div>
        <button
          className={`w-1/2 text-center py-2 text-white font-medium relative z-10 ${
            activeTab === "withoutCaptain" ? "text-white" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("withoutCaptain")}
        >
          {t("buttons.withoutCaptain")}
        </button>
        <button
          className={`w-1/2 text-center py-2 text-white font-medium relative z-10 ${
            activeTab === "withCaptain" ? "text-white" : "text-gray-300"
          }`}
          onClick={() => setActiveTab("withCaptain")}
        >
          {t("buttons.withCaptain")}
        </button>
      </div>

      {/* Content Section */}
      <div className=" flex flex-col justify-center items-center">
        {activeTab === "withoutCaptain" ? (
          <p className="text-white text-center">Content for Without Captain</p>
        ) : (
          <>
          <div className="h-[60%] w-[80%] flex justify-center items-center">
            <Image
              src="/images/auditbg2.svg"
              alt=""
              height={0}
              width={0}
              className="h-[100%] w-[100%]"
            />
            </div>
            <div className="w-[90%] lg:w-[75%]">
              <hr className="border border-white w-[80%]" />
              <div className="my-2 p-2 flex flex-col md:flex-row gap-4 text-white justify-center">
                {t.raw("sections").map(
                  (section: { title: string; description: string }, index: number) => (
                    <div key={index}>
                      <h3 className="text-xl md:text-2xl font-medium">{section.title}</h3>
                      <p>{section.description}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DataExtraction;
