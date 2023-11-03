import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer h-[600px] border-t-[1px] border-[#5D5D5DBA] pt-[103px] pl-[69px] flex flex-col font-sfuitext">
        <div className="flex gap-x-[50px] mb-[81px]">
          <div className="kolom-1 w-[329px] flex flex-col">
            <p className="kolom-1-head font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em] mb-[45px]">LOREM IPSUM DOLOR SIT AMET</p>
            <p className="kolom-1-konten font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              feugiat ac mauris vel consectetur.Cras fringilla ultricies rutrum.
              Ut ex nisi, porta quis aliquet quis, hendrerit ut turpis.
            </p> 
          </div>
          <div className="kolom-2 w-[169px] flex flex-col">
            <p className="kolom-2-head font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em] mb-[45px]">INFO</p>
            <div className="flex flex-col gap-y-[15px] font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">
              <Link>About Us</Link>
              <Link>Contact Us</Link>
              <Link>How To Pay</Link>
              <Link>Shipping</Link>
              <Link>FAQ</Link>
              <Link>Terms and Conditions</Link>
              <Link>Terms of Use</Link>
              <Link>Privacy Policy</Link>
            </div>
          </div>
          <div className="kolom-3 w-[95px] flex flex-col">
            <p className="kolom-3-head font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em] mb-[45px]">FIND US</p>
            <div className="flex flex-col gap-y-[15px] font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">
              <Link>Shopee</Link>
              <Link>Tokopedia</Link>
              <Link>TikTok Shop</Link>
            </div>
          </div>
          <div className="kolom-4 w-[220px] flex flex-col">
            <p className="kolom-4-head font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em] mb-[45px]">TALK TO US</p>
            <div className="flex flex-col gap-y-[15px] font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">
              <Link>ebliethos@gmail.com</Link>
              <p>Monday - Friday, 9am - 5pm</p>
            </div>
          </div>
          <div className="kolom-5 w-[286px] flex flex-col">
            <p className="kolom-5-head font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em] mb-[45px]">SIGN UP AND SAVE</p>
            <div className="flex flex-col gap-y-[15px] font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">
              <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <input type="email" placeholder="Enter your email" className="border-b-[3px] border-black w-[286px] placeholder:text-black pb-[14px]" />
            </div>
          </div>
        </div>
        <p className="text-center font-[400] text-[15px] [line-height:17.9px] [letter-spacing:0.05em]">© 2023 Elbiethos Official</p>
      </div>
    );
}

export default Footer;
