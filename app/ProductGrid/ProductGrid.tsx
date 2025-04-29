import Image from 'next/image';

const ProductGrid = () => {
  return (
    <section className="bg-[#F7EDFF] py-12 px-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Shop the Ambrosia Global
        </h2>
        <button className="bg-[#9837AE] text-white font-bold px-6 py-3 rounded-md mb-8 hover:bg-purple-800 transition">
          Buy All Products
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {/* Product 1 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img14.jpg"
                alt="Ambrosia Cellular Rejuvenation Complex"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              Ambrosia Cellular Rejuvenation Complex
            </p>
          </div>

          {/* Product 2 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img15.jpg"
                alt="AmbroBiome Intestinal Support Complex"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              AmbroBiome Intestinal Support Complex
            </p>
          </div>

          {/* Product 3 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img17.webp"
                alt="Vegan Protein Vanilla + Superfruits"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              Vegan Protein Vanilla + Superfruits
            </p>
          </div>

          {/* Product 4 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img19.webp"
                alt="Celestial Coffee Regular"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              Celestial Coffee Regular
            </p>
          </div>

          {/* Product 5 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img18.webp"
                alt="Cucumber Daily Cleanser"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              Cucumber Daily Cleanser
            </p>
          </div>

          {/* Product 6 */}
          <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <div className="w-28 h-28 relative mb-3">
              <Image
                src="/imges/img16.jpg"
                alt="Ambrosia Cellular Rejuvenation Complex"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <p className="text-sm font-medium text-[#9837AE] text-center">
              Ambrosia Cellular Rejuvenation Complex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
