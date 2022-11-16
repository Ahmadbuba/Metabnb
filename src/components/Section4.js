import seven from "../../src/assests/section3/image 7.png";
import eight from "../../src/assests/section3/image 8.png";
import nine from "../../src/assests/section3/image 9.png";
import frame from "../../src/assests/section3/Frame.png";

const Section4 = () => {
  return (
    <div className="bg-purple font-red-rose text-white p-12">
      <div className="w-11/12 mx-auto flex flex-col items-center justify-center md:flex md:flex-row md:justify-between md:gap-16 md:py-24 md:flex-auto md:w-10/12">
        <div className="sm:px-16">
          <h3 className=" pb-10  font-bold text-3xl md:text-5xl">
            Metabnb NFTs
          </h3>
          <div className="pb-10 font-normal text-lg">
            Discover our NFT gift card collection. Loyal customers gets amazing
            gift cards which we traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </div>
          <button
            type="button"
            className=" bg-white font-normal text-base text-purple px-10 py-2 rounded"
          >
            Learn more
          </button>
        </div>
        <div className="sm:px-3 md: flex-auto">
          <img src={frame} width="2000" />
          {/* <img src={seven} width="300" className="absolute top-24 left-28" /> */}
          {/* <img src={eight} className="absolute" /> */}
        </div>
      </div>
    </div>
  );
};

export default Section4;
