import home from "../../src/assests/footer/home.png";
import facebook from "../../src/assests/footer/facebook.png";
import instagram from "../../src/assests/footer/instagram.png";
import twitter from "../../src/assests/footer/twitter.png";
import name from "../../src/assests/footer/name.png";
const Footer = () => {
  return (
    <div className="w-full bg-black text-white font-red-rose font-semibold text-base">
      <div className=" max-[470px]:flex max-[470px]:flex-col max-[470px]:gap-10 w-10/12 mx-auto flex flex-row justify-between py-10 ">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex items-center justify-center">
            <img src={home} width="35" />
            <img src={name} />
          </div>
          <div className="pt-8 flex justify-center items-center gap-6">
            <img src={facebook} />
            <img src={instagram} />
            <img src={twitter} />
          </div>
          <div className="mt-6">
            <p className=" font-normal text-base">&copy; 2022 Metabnb </p>
          </div>
        </div>
        <div className=" text-start max-[400px]:col-span-2">
          <h4 className="max-[470px]:pb-2 pb-5">Community</h4>
          <p className="my-1">NFT</p>
          <p className="my-1">Tokens</p>
          <p className="my-1">Landlords</p>
          <p className="my-1">Discord</p>
        </div>
        <div className="text-start">
          <h4 className="max-[470px]:pb-2 pb-5">Places</h4>
          <p className="my-1">Castle</p>
          <p className="my-1">Farms</p>
          <p className="my-1">Beach</p>
          <p className="my-1">Learn more</p>
        </div>
        <div className=" text-start">
          <h4 className="max-[470px]:pb-2 pb-5">About us</h4>
          <p className="my-1">Road map</p>
          <p className="my-1">Creators</p>
          <p className="my-1">Career</p>
          <p className="my-1">Contact us</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
