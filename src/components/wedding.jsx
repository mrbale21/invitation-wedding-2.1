import { FaMapLocation } from "react-icons/fa6";

function Wedding() {
  return (
    <>
      <div className=" max-w-md w-full py-8 bg-[url(assets/image/bg-wedding.webp)] bg-fixed sm:bg-contain bg-cover bg-center text-secondary">
        <div className="pt-2 px-4">
          <div className="min-w-full h-[500px] bg-accent shadow shadow-black border border-secondary rounded-t-full grid place-items-center pb-2">
            {/* respsei */}
            <div className="flex flex-col justify-start items-center text-center pt-7">
              <div className="flex flex-col justify-center items-center text-primary">
                <h1
                  data-aos="fade-right"
                  className="font-cal-sans text-2xl pr-18"
                >
                  SAVE
                </h1>
                <h2
                  data-aos="fade-left"
                  className="font-breathing text-2xl pl-4"
                >
                  The Date
                </h2>
              </div>
              <div
                data-aos="zoom-out"
                className="flex flex-col justify-center items-center text-center"
              >
                <h1
                  data-aos="zoom-out"
                  className="font-sacramento text-3xl font-semibold text-primary pt-8 pb-4"
                >
                  Akad Nikah & Resepsi
                </h1>

                <div className="flex justify-center items-center h-28 my-4">
                  <h1
                    data-aos="fade-right"
                    className="font-charm text-xl font-semibold"
                  >
                    JULI
                  </h1>
                  <div className="h-full w-0.5 bg-gray-400 mx-4" />
                  <div data-aos="zoom-out" className="flex flex-col gap-2">
                    <h2 className="font-charm text-xl font-semibold">Minggu</h2>
                    <h1 className="font-cal-sans font-bold text-5xl text-primary">
                      6
                    </h1>
                    <h5 className="font-cal-sans text-xs">
                      09.000 WIB - selesai
                    </h5>
                  </div>
                  <div className="h-full w-0.5 bg-gray-400 mx-4" />
                  <h2
                    data-aos="fade-left"
                    className="font-cal-sans text-xl font-semibold"
                  >
                    2025
                  </h2>
                </div>
                <div
                  data-aos="zoom-out"
                  className="font-cal-sans text-sm flex flex-col justify-center items-center"
                >
                  <h2>Tempat :</h2>

                  <p>Kediaman Mempelai Wanita</p>
                  <p className="text-[10px]">
                    Kp. Hambalang Rt 08/03, Desa Hambalang, <br /> Kec.
                    Citeureup, Kab. Bogor.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/85ci29yCuyNB9eF59"
                    className="flex justify-center items-center text-sm font-cal-sans p-1 px-2 bg-primary text-accent hover:border rounded-sm gap-2 w-32 mt-6"
                  >
                    <FaMapLocation /> <p>Open Map</p>
                  </a>
                </div>
              </div>
            </div>

            {/* <div
              data-aos="zoom-out"
              className="text-center w-1/2 h-0.5 bg-gray-400 "
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wedding;
