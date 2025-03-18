import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    avatar: "/icons/stefanwesley.svg",
    avatarPlay: "/icons/blueplay.svg",
    text: "“Our biggest client contacted us through Bark and we’ll continue to bring on new clients through the platform.” ",
    name: "Stefan Wesley",
    designation: "Sigma Digital",
    color: "blue", // Define color for HR
  },
  {
    avatar: "/icons/leanneosbourne.svg",
    avatarPlay: "icons/yellowplay.svg",
    text: "“We get 22% of our clients through Bark. They are coming to us and we can choose who we want to take on.” ",
    name: "Leanne Osbourne",
    designation: "Paradigm Cleaning Solution",
    color: "yellow",
  },
  {
    avatar: "/icons/richardgray.svg",
    avatarPlay: "icons/greenplay.svg",
    text: " “Bark has been far the most effective website I’ve used. It gives me a solid flow of potential work.” ",
    name: "Richard Gray",
    designation: "Rugfoot Photography",
    color: "green",
  },
];

const CustomerSuccessStories = () => {
  return (
    <div className="mt-20 border-2">
      <div className="text-center my-4">
        <h1 className="text-[32px] font-semibold my-2">Customer success stories</h1>
        <p className="text-[var(--color-light-slate)]">See what other small businesses have to say about Bark</p>
      </div>

      <div className="flex justify-center items-center gap-6 ">
        {testimonials.map((item, index) => (
          <div key={index} className="p-6 my-2 flex flex-col justify-center items-center rounded-[10px] border">
            <div className="relative ">
              <Avatar className="h-[80px] w-[80px]">
                <AvatarImage src={item.avatar} />
                <AvatarFallback>{item.name}</AvatarFallback>
              </Avatar>
              <Avatar className="absolute bottom-0 right-0">
                <AvatarImage src={item.avatarPlay} />
                <AvatarFallback>play icon</AvatarFallback>
              </Avatar>
            </div>
            <p className="my-4 w-[265px] text-center text-[var(--color-dark-slate)]">{item.text}</p>
            <hr className={`mt-4 w-48 border ${item.color === "blue" ? "border-[var(--color-blue)]" : 
             item.color === "yellow" ? "border-[var(--color-yellow)]" : 
             "border-[var(--color-green)]"}`} 
            />
            <p className="mt-2 text-[var(--color-dark-slate)]">{item.name}</p>
            <p className="text-sm text-[var(--color-light-slate)]">{item.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerSuccessStories;
