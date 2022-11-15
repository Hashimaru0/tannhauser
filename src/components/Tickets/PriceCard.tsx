import Checkmark from "../../svgs/checkmark.svg";

const PriceCard = ({
  seatClass,
  desc,
  price,
  benefits,
}: {
  seatClass: string;
  desc: string;
  price: number;
  benefits: string[];
}) => {
  return (
    <div className="text-white w-[17rem] h-[29rem] border-[0.2rem] border-white rounded-2xl backdrop-blur-sm">
      <div className="text-3xl text-center mt-5">{seatClass}</div>
      <div className="text-xs text-center opacity-70 h-[6rem] mt-4 px-5">
        {desc}
      </div>
      <div className="flex justify-center mt-2">
        <button
          style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
          className="bg-[#4883B9] rounded py-2 px-5 text-center hover:scale-[1.05] transition shadow"
        >
          BUY TICKET
        </button>
      </div>
      <div className="text-4xl text-center font-bold mt-6">${price}*</div>
      <div className="mt-5 flex flex-col gap-2">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex ml-[3rem]">
            <img src={Checkmark} alt="Checkmark" />
            <div className="ml-3 text-sm opacity-70">{benefit}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceCard;
