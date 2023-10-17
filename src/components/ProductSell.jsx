// import React from 'react';
// import { FaSearch } from 'react-icons/fa';

// const ProductSellList = () => {
//   const products = [
//     {
//       productName: "Acer Nitro 5",
//       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
//       stock: 20,
//       price: 785,
//       totalSell: 200,
//     },
//     {
//       productName: "Playstation 5",
//       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
//       stock: 15,
//       price: 900,
//       totalSell: 150,
//     },
//     // ... add more products
//   ];

//   return (
//     <div className="overflow-x-auto style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}">

//       <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr 1fr', gap: '10px', width: '100%', marginTop: '10px', fontSize: '10px', fontWeight: 'bold' }}>
//             {/* Product Sell Section */}
//             <div style={{ gridArea: '1 / 1 / 2 / 4', padding: '15px', fontSize: '20px' }}>Product Sell</div>

//             {/* Search Section */}
//             <div style={{ gridArea: '1 / 2 / 2 / 3', display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
//               <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }}>
//                 <FaSearch className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="border border-gray-100 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300 pl-8" // Adjusted padding
//               />
//             </div>

//             {/* Last 30 Days Section */}
//             <div style={{ gridArea: '1 / 3 / 2 / 4', paddingTop: '15px'}}>
//               <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
//                 last 30 days
//                 <svg className="-mr-1 h-4 w-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
//                 </svg>
//               </button>
//             </div>


//       </div>


//       <table className="min-w-full">
//         <thead>
//           <tr>
//             <th className="text-xs  text-gray-400 font-semibold mb-2 px-4 py-2">Product Name</th>
//             <th className="text-xs  text-gray-400 font-semibold mb-2 px-4 py-2">Stock</th>
//             <th className="text-xs  text-gray-400 font-semibold mb-2 px-4 py-2">Price</th>
//             <th className="text-xs  text-gray-400 font-semibold mb-2 px-4 py-2">Total Sell</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td className="text-left px-4 py-2">
//                 <div className="flex items-center">
//                   <div className="w-12 h-12 overflow-hidden rounded-md mr-2">
//                     <img src={product.img} alt="" className="w-full h-full object-cover" />
//                   </div>
//                   {product.productName}
//                 </div>
//               </td>
//               <td className="text-center px-4 py-2">{product.stock}</td>
//               <td className="text-center px-4 py-2">{product.price}</td>
//               <td className="text-center px-4 py-2">{product.totalSell}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductSellList;

import React from 'react';
import { FaSearch } from 'react-icons/fa';

const ProductSellList = () => {
  const products = [
    {
      productName: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      stock: 20,
      price: 785,
      totalSell: 200,
    },
    {
      productName: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      stock: 15,
      price: 900,
      totalSell: 150,
    },
    // Add more products as needed
  ];

  return (
    <div className="overflow-x-auto" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '4fr 1fr 1fr', gap: '10px', width: '100%', marginTop: '10px', fontSize: '10px', fontWeight: 'bold' }}>
        {/* Product Sell Section */}
        <div style={{ gridArea: '1 / 1 / 2 / 4', padding: '15px', fontSize: '20px' }}>Product Sell</div>

        {/* Search Section */}
        <div style={{ gridArea: '1 / 2 / 2 / 3', display: 'flex', alignItems: 'center', gap: '10px', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)' }}>
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-100 rounded-md py-1 px-2 focus:outline-none focus:ring focus:border-blue-300 pl-8"
          />
        </div>

        {/* Last 30 Days Section */}
        <div style={{ gridArea: '1 / 3 / 2 / 4', paddingTop: '15px' }}>
          <button type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
            Last 30 days
            <svg className="-mr-1 h-4 w-4 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Product Table */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Product</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Total Sell</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b flex items-center">
                <img src={product.img} alt={product.productName} className="h-10 w-10 object-cover rounded-full mr-2" />
                {product.productName}
              </td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">{product.totalSell}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSellList;
