const ProduckItem = ({imgUrl, name, discount, price}) => {
    return (
      <div className="produk-item w-[347px] h-[490px] font-inter">
        <div className="produk-img relative h-[400.88px]">
          <img
            src={imgUrl}
            alt="Gambar Produk"
            className="w-full h-full"
          />
          <p className="absolute bottom-0 right-0 left-0 bg-[#B52225] text-white font-[600] text-[24px] text-center">
            {name}
          </p>
        </div>
        <div className="produk-harga flex flex-col items-center">
          <div className="harga-sebenarnya relative text-center w-[209px] text-black/50 font-[500] text-[32px] [line-height:38.73px]">
            IDR {discount}
            <div className="w-full absolute top-[50%] bottom-[50%] border-[3px] border-black/50"></div>
          </div>
          <p className="harga-diskon text-center w-fit text-black font-[500] text-[32px] [line-height:38.73px]">
            IDR {price}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProduckItem;