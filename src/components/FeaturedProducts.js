import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsBuildingAdd,
  BsFillCpuFill,
  BsFillMotherboardFill,
} from "react-icons/bs";
import { CgSmartphoneRam } from "react-icons/cg";
import { FiMonitor } from "react-icons/fi";
import { ImPower } from "react-icons/im";
import { LuHardDrive } from "react-icons/lu";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ products }) => {
  const router = useRouter();
  const { query } = router;

  const categories = [
    {
      id: 1,
      name: "CPU/Processor",
      link: "/",
      logo: <BsFillCpuFill />,
    },
    {
      id: 2,
      name: "Motherboard",
      link: "/",
      logo: <BsFillMotherboardFill />,
    },
    {
      id: 3,
      name: "RAM",
      link: "/",
      logo: <CgSmartphoneRam />,
    },
    {
      id: 4,
      name: "Power Supply Unit",
      link: "/",
      logo: <ImPower />,
    },
    {
      id: 5,
      name: "Storage Device",
      link: "/",
      logo: <LuHardDrive />,
    },
    {
      id: 6,
      name: "Monitor",
      link: "/",
      logo: <FiMonitor />,
    },
    {
      id: 7,
      name: "Other",
      link: "/",
      logo: <BsBuildingAdd />,
    },
  ];

  return (
    <div>
      {/* Featured Category */}
      <section>
        <div className="mx-auto  max-w-7xl my-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold p-1">Featured Category</h2>
            <p>Get Your Desired Product from Featured Category!</p>
          </div>

          <div className="my-10 grid grid-cols-4 mx-2 gap-4 lg:grid-cols-7 ">
            {categories?.map((category) => {
              const { id, name, logo } = category || {};
              return (
                <button
                  key={id}
                  onClick={() =>
                    router.push({
                      pathname: "/products",
                      query: { category: name },
                    })
                  }
                  className={`flex flex-col justify-center items-center p-5 rounded-md border text-2xl shadow-md hover:text-[#EE4B23] duration-300 ${
                    name === query?.category && "text-[#EE4B23]"
                  }`}
                >
                  {logo}
                  <p className="font-bold text-sm p-1 ">{name}</p>
                </button>
              );
            })}
          </div>

          {/* <div className="bg-white">
            <div className="px-2 ">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products?.map((product) => (
                  <ProductCard key={product?.id} product={product} />
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="mx-auto  max-w-7xl my-14">
          <div className="text-center">
            <h2 className="text-2xl font-bold p-1">Featured Products</h2>
            <p>Check & Get Your Desired Product!</p>
          </div>

          <div className="bg-white">
            <div className="px-2 ">
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <Link href={"/products"}>
              <button
                className="px-6 py-3 bg-gray-600 hover:bg-black duration-300 rounded-md text-white font-bold"
                style={{ backgroundColor: "#081621" }}
              >
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
