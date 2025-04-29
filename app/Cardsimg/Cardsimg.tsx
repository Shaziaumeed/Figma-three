import Image from 'next/image';
const Cardsimg = () => {
  return (
    <section className="bg-[#F7EDFF] py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          Lorem ipsum dolor sit amet us on
        </h2>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          @ambrosiaglobal <span className="text-teal-500">@ambrosiaglobal</span>
        </h2>
        <p>
          Lorem ipsum dolor sit <span className="text-[#9B37AE]">@ambrosiaglobal</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
          {/* Product 1 */}
         
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 1"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
           
          </div>

          {/* Product 2 */}
        
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 2"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
           
          </div>

          {/* Product 3 */}
          
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 3"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
          
          </div>

          {/* Product 4 */}
        
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 4"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
           
          </div>

          {/* Product 5 */}
        
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 5"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
          
          </div>

          {/* Product 6 */}
          
            <div className="w-full">
              <Image
                src="/imges/img11.jpg"
                alt="Product 6"
                width={500}
                height={500}
                layout="responsive"
                objectFit="cover"
                className="rounded"
              />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardsimg;

