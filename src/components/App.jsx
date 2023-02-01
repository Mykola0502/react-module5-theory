import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
// import { NotFound } from 'pages/NotFound';
import { ProductDetails } from 'pages/ProductDetails';
import { Mission } from 'components/Mission';
import Team from 'components/Team';
import Reviews from 'components/Reviews';

// import { Container, Header, Logo, Link } from './App.styled';
import { SharedLayout } from './SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          {/* <Route path="mission" element={<Mission />} /> */}
          {/* <Route path="team" element={<Team />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:productId" element={<ProductDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

// import { Routes, Route } from 'react-router-dom';
// // import styled from 'styled-components';
// import { Home } from 'pages/Home';
// import { About } from 'pages/About';
// import { Products } from 'pages/Products';
// import { NotFound } from 'pages/NotFound';
// import { ProductDetails } from 'pages/ProductDetails';
// import Mission from 'components/Mission';
// import Team from 'components/Team';
// import Reviews from 'components/Reviews';
// import { SharedLayout } from 'components/SharedLayout';

// import { Container, Header, Logo, Link } from './App.styled';

// // const StyledLink = styled(NavLink)`
// //   color: black;

// //   &.active {
// //     color: orange;
// //   }
// // `;

// export const App = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </Logo>
//         <nav>
//           <Link to="/" end>
//             Home
//           </Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </Header>

//       <Routes>
//         <Route path="/" element={<SharedLayout />} />
//         <Route index element={<Home />} />
//         <Route path="/about" element={<About />}>
//           {/* <Route path="mission" element={<Mission />} />
//           <Route path="team" element={<Team />} />
//           <Route path="reviews" element={<Reviews />} /> */}
//         </Route>
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:productId" element={<ProductDetails />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Container>
//   );
// };
