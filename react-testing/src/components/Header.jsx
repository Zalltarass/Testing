const Header = ({page = "" }) =>{
    return (
        <>
        <div className="h-[193px] w-full border-b-2 border-[color:#00000080] text-[#B52225] flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-[700] [letter-spacing:0.205em] [line-height:60px] h-[37px]">EBLIETHOS</h1>
          <h1 className="text-[40px] font-[400] [letter-spacing:0.21em] [line-height:60px]">INDONESIA</h1>
        </div>
        {page &&(
            <h1 className="text-center mt-[20px] text-[40px] font-[500] [line-height:60px] font-poppins">
                {page}
            </h1>
        )}
        </>
    )
}

export default Header;