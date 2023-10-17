// import React from 'react';
// import { FaBox, FaUsers, FaDollarSign, FaBullhorn, FaQuestionCircle, FaCaretDown, FaArrowRight, FaProductHunt } from 'react-icons/fa';

// const Dashboard = () => {
//   const sectionStyle = {
//     padding: '10px',
//     marginBottom: '10px',
//     cursor: 'pointer',
//     position: 'relative',
//     color: 'white',
//     transition: 'background 0.3s ease', // Add transition for a smooth effect
//   };

//   const nameSectionStyle = {
//     padding: '10px',
//     marginTop: 'auto',
//     display: 'flex',
//     alignItems: 'center',
//     background: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: '8px',
//     position: 'relative',
//     color: 'white',
//     transition: 'background 0.3s ease', // Add transition for a smooth effect
//   };

//   const photoStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.axh1xIcOZbwPl1gQFQ4rxgHaFM&pid=Api&P=0&h=180")', // Replace with the actual URL
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     marginRight: '10px',
//   };

//   const arrowStyle = {
//     position: 'absolute',
//     right: '10px',
//   };

//   const handleHover = (event) => {
//     const section = event.currentTarget;
//     const arrow = section.querySelector('.arrow');

//     if (arrow) {
//       arrow.style.display = 'inline-block';
//     }

//     // Add light transparency background when hovering over a section
//     section.style.background = 'rgba(255, 255, 255, 0.2)';
//   };

//   const handleLeave = (event) => {
//     const section = event.currentTarget;
//     const arrow = section.querySelector('.arrow');

//     if (arrow) {
//       arrow.style.display = 'none';
//     }

//     // Restore the original background when leaving the section
//     section.style.background = '';
//   };

//   return (
//     <div style={{ background: 'blue', height: '100vh', overflowY: 'auto' }}>

       

//       <div className='bg-slate-950 text-white min-h-screen flex flex-col'>

//       <div
//             style={{ ...sectionStyle, fontWeight: 'bold', fontSize: '24px' }}
//             className='flex items-center'
//         >
//             <FaBox className='mr-2' />
//             Dashboard
            
//         </div>
        
//         <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaBox className='mr-2' />
//           Dashboard
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div>

//         {/* <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaBox className='mr-2' />
//           Products
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div> */}

//     <div
//       style={sectionStyle}
//       className='flex items-center'
//       onMouseEnter={handleHover}
//       onMouseLeave={handleLeave}
//     >
//       <FaProductHunt className='mr-2' /> {/* New icon for "Products" */}
//       Products
//       <FaArrowRight className='arrow' style={arrowStyle} />
//     </div>


//         <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaUsers className='mr-2' />
//           Customer
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div>

//         <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaDollarSign className='mr-2' />
//           Income
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div>

//         <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaBullhorn className='mr-2' />
//           Promote
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div>

//         <div
//           style={sectionStyle}
//           className='flex items-center'
//           onMouseEnter={handleHover}
//           onMouseLeave={handleLeave}
//         >
//           <FaQuestionCircle className='mr-2' />
//           Help
//           <FaArrowRight className='arrow' style={arrowStyle} />
//         </div>

//         <div style={nameSectionStyle}>
//           <div style={photoStyle}></div>
//           <div>
//             <h2 className="text-lg font-bold">Virat Kohli</h2>
//             <p>Product Manager</p>
//           </div>
//           <div className="ml-auto">
//             <FaCaretDown />
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
import { FaBox, FaUsers, FaDollarSign, FaBullhorn, FaQuestionCircle, FaCaretDown, FaArrowRight, FaProductHunt } from 'react-icons/fa';

const Dashboard = () => {
  const sectionStyle = {
    padding: '10px',
    marginBottom: '10px',
    cursor: 'pointer',
    position: 'relative',
    color: 'white',
    transition: 'background 0.3s ease', // Add transition for a smooth effect
  };

  const nameSectionStyle = {
    padding: '10px',
    marginTop: 'auto',
    display: 'flex',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    position: 'relative',
    color: 'white',
    transition: 'background 0.3s ease', // Add transition for a smooth effect
  };

  const photoStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.axh1xIcOZbwPl1gQFQ4rxgHaFM&pid=Api&P=0&h=180")', // Replace with the actual URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginRight: '10px',
  };

  const arrowStyle = {
    position: 'absolute',
    right: '10px',
  };

  const handleHover = (event) => {
    const section = event.currentTarget;
    const arrow = section.querySelector('.arrow');

    if (arrow) {
      arrow.style.display = 'inline-block';
    }

    // Add light transparency background when hovering over a section
    section.style.background = 'rgba(255, 255, 255, 0.2)';
  };

  const handleLeave = (event) => {
    const section = event.currentTarget;
    const arrow = section.querySelector('.arrow');

    if (arrow) {
      arrow.style.display = 'none';
    }

    // Restore the original background when leaving the section
    section.style.background = '';
  };

  return (
    <div style={{ background: 'blue', height: '100vh', overflowY: 'auto' }}>
      <div className='bg-slate-950 text-white min-h-screen flex flex-col'>
        <div
          style={{ padding: '15px', fontSize: '20px', fontWeight: 'bold' }}
        >
          Dashboard
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaBox className='mr-2' />
          Dashboard
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaProductHunt className='mr-2' />
          Products
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaUsers className='mr-2' />
          Customer
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaDollarSign className='mr-2' />
          Income
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaBullhorn className='mr-2' />
          Promote
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div
          style={sectionStyle}
          className='flex items-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <FaQuestionCircle className='mr-2' />
          Help
          <FaArrowRight className='arrow' style={arrowStyle} />
        </div>

        <div style={nameSectionStyle}>
          <div style={photoStyle}></div>
          <div>
            <h2 className="text-lg font-bold">Virat Kohli</h2>
            <p>Product Manager</p>
          </div>
          <div className="ml-auto">
            <FaCaretDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
