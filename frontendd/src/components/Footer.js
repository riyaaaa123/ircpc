const Footer=()=>{
return (
  <>
    <div className="mt-28">
      <hr />
      <div className="mt-16 flex mb-16 justify-between">
        <img src="./img/logo.png" className="ml-14 w-[17vw] h-12" />

        <div className=" flex gap-20 mr-20 ">
          <div className="flex-col">
            <h1 className="font-semibold">About</h1>
            <h2 className="mt-8 rgba(26, 25, 30, 0.5)">About Us</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Statistics</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Entrepreneurship</h2>
          </div>
          <div className="flex-col">
            <h1 className="font-semibold">Partnerships</h1>
            <h2 className="mt-8 rgba(26, 25, 30, 0.5)">R&D Partnerships</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Tech Transfer</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Innovation</h2>
          </div>
          <div className="flex-col">
            <h1 className="font-semibold">Latest News</h1>
            <h2 className="mt-8 rgba(26, 25, 30, 0.5)">NewsLetter</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Courses</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Downloads</h2>
          </div>
          <div className="flex-col">
            <h1 className="font-semibold">Social Media</h1>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Twitter</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Facebook</h2>
            <h2 className="mt-4 rgba(26, 25, 30, 0.5)">Instagram</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className=" mt-4 justify-between flex flex-wrap mb-6">
        <h6 className="ml-14 text-[rgba(140,140,140,1)]">IPR Cell,IITR 2023</h6>
        <div className="mr-20 text-[rgba(140,140,140,1)] flex gap-8 ">
          <h6 className="">English</h6>
          <h6 className="">Hindi</h6>
        </div>
      </div>
    </div>
  </>
);
}
export default Footer;