const News=()=>{
    return (
      <>
        <div className="bg-white w-full mt-10 flex justify-center">
          <div
            className="h-[72vh] w-[90vw]"
            style={{ backgroundColor: "rgb(243,243,243)" }}
          >
            <h1 className="px-20 py-14 text-[3.4vw] font-bold">Latest News</h1>
            <div className="flex  px-20 ">
              <div className="flex-col w-1/3">
                <div className="w-[20vw] h-[20vw] bg-white rounded-lg items-center flex justify-center">
                  <img className="w-28" src="./img/news1.png" />
                </div>
                <h2 className="font-bold text-[1.1vw] mt-5">
                  IPR CELL NEWSLETTER
                </h2>
                <h3 className="text-[rgba(101, 100, 100, 1)] mt-2">
                  Continue Reading
                </h3>
              </div>
              <div className="flex-col w-1/3">
                <div className="w-[20vw] h-[20vw] bg-white rounded-lg items-center flex justify-center">
                  <img className="w-28" src="./img/news2.png" />
                </div>
                <h2 className="font-bold text-[1.1vw] mt-5">IPR CELL COURSE</h2>
                <h3 className="text-[rgba(101, 100, 100, 1)] mt-2 hover:text-[rgba(33, 123, 244, 1)]">
                  Continue Reading
                </h3>
              </div>
              <div className="flex-col w-1/3">
                <div className="w-[20vw] h-[20vw] bg-white rounded-lg items-center flex justify-center">
                  <img className="w-56" src="./img/news3.png" />
                </div>
                <h2 className="font-bold text-[1.1vw] mt-5">
                  IMPORTANT DOWNLOADS
                </h2>
                <h3 className="text-[rgba(101, 100, 100, 1)] mt-2">
                  Continue Reading
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default News;