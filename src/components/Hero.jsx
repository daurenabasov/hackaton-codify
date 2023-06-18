import styles from "../style";
import { discount, robot, robot1 } from "../assets";
import ParticlesComponent from "../app/particles-layot/ParticlesBackround";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} `}
    >
      <ParticlesComponent />
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-purple-900	 rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Инвестиции</span> в твое будущее {""}
            <span className="text-white">проще</span> с нами!
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-purple-900		 ss:leading-[100.8px] leading-[75px]">
            Инвестируй и <br className="sm:block hidden" />{" "}
            <span className=" text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-900">
              {" "}
              развивайся.
            </span>{" "}
          </h1>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
         Наша команда постаралась предоставить удобную и функциональную платформу. Где смогут встретиться все граждане КР.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {/* <img src={robot1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
