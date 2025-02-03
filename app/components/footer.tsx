import Image from "next/image";
import { LogoOftalmogia2 } from "../lib/images";
import Link from "next/link";

export default function Footer() {
  return (
    // <footer className="footer-section-wrapper bg-white print:hidden">
    //   <div className="container max-w-screen-x mx-auto md:px-6 pt-[56px]">
    //     <div className="w-full flex flex-col items-center mb-[50px]">
    //       <div className="mb-[40px]">
    //         <a href="/">
    //           <Image width="152" height="36" src="/assets/logo.svg" alt="logo" />
    //         </a>
    //       </div>
    //       <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
    //     </div>

    //     <div className="lg:flex justify-between mb-[50px]">
    //       <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
    //         <h1 className="text-[18] font-medium text-[#2F2F2F] mb-5">About Us</h1>
    //         <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
    //           We know there are a lot of threa developers our but we pride into
    //           a firm in the industry.
    //         </p>
    //       </div>
    //       <div className="flex-1 lg:flex">
    //         <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
    //           <div className="mb-5">
    //             <h6 className="text-[18] font-medium text-[#2F2F2F]">Feature</h6>
    //           </div>
    //           <div>
    //             <ul className="flex flex-col space-y-4 ">
    //               <li>
    //                 <a href="/about">
    //                   <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                     About Us
    //                   </span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/terms-condition">
    //                   <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                     Terms Condition
    //                   </span>
    //                 </a>
    //               </li>
    //               <li>
    //                 <a href="/all-products">
    //                   <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                     Best Products
    //                   </span>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
    //           <div>
    //             <div className="mb-5">
    //               <h6 className="text-[18] font-medium text-[#2F2F2F]">
    //                 General Links
    //               </h6>
    //             </div>
    //             <div>
    //               <ul className="flex flex-col space-y-4 ">
    //                 <li>
    //                   <a href="/blogs">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       Blog
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="/tracking-order">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       Tracking Order
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="/become-saller">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       Become Seller
    //                     </span>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
    //           <div>
    //             <div className="mb-5">
    //               <h6 className="text-[18] font-medium text-[#2F2F2F]">Helpful</h6>
    //             </div>
    //             <div>
    //               <ul className="flex flex-col space-y-4 ">
    //                 <li>
    //                   <a href="/flash-sale">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       Flash Sale
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="/faq">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       FAQ
    //                     </span>
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="/about">
    //                     <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
    //                       Support
    //                     </span>
    //                   </a>
    //                 </li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
    //       <div className="flex lg:space-x-5 justify-between items-center mb-3">
    //         <div className="flex space-x-5 items-center">
    //           <a href="#">
    //             <svg
    //               width="16"
    //               height="16"
    //               viewBox="0 0 16 16"
    //               fill="none"
    //               className="fill-current text-qgray hover:text-qblack"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M12.1016 4.90039C12.6538 4.90039 13.1016 4.45268 13.1016 3.90039C13.1016 3.34811 12.6538 2.90039 12.1016 2.90039C11.5493 2.90039 11.1016 3.34811 11.1016 3.90039C11.1016 4.45268 11.5493 4.90039 12.1016 4.90039Z"></path>
    //               <path d="M8 12C5.8 12 4 10.2 4 8C4 5.8 5.8 4 8 4C10.2 4 12 5.8 12 8C12 10.2 10.2 12 8 12ZM8 6C6.9 6 6 6.9 6 8C6 9.1 6.9 10 8 10C9.1 10 10 9.1 10 8C10 6.9 9.1 6 8 6Z"></path>
    //               <path d="M12 16H4C1.9 16 0 14.1 0 12V4C0 1.9 1.9 0 4 0H12C14.1 0 16 1.9 16 4V12C16 14.1 14.1 16 12 16ZM4 2C3.1 2 2 3.1 2 4V12C2 13 3 14 4 14H12C12.9 14 14 12.9 14 12V4C14 3.1 12.9 2 12 2H4Z"></path>
    //             </svg>
    //           </a>
    //           <a href="#">
    //             <svg
    //               width="10"
    //               height="16"
    //               viewBox="0 0 10 16"
    //               fill="none"
    //               className="fill-current text-qgray hover:text-qblack"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z"></path>
    //             </svg>
    //           </a>
    //           <a href="#">
    //             <svg
    //               width="16"
    //               height="12"
    //               viewBox="0 0 16 12"
    //               fill="none"
    //               className="fill-current text-qgray hover:text-qblack"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path d="M15.8 2.8C15.6 1.5 15 0.6 13.6 0.4C11.4 8.9407e-08 8 0 8 0C8 0 4.6 8.9407e-08 2.4 0.4C1 0.6 0.3 1.5 0.2 2.8C0 4.1 0 6 0 6C0 6 0 7.9 0.2 9.2C0.4 10.5 1 11.4 2.4 11.6C4.6 12 8 12 8 12C8 12 11.4 12 13.6 11.6C15 11.3 15.6 10.5 15.8 9.2C16 7.9 16 6 16 6C16 6 16 4.1 15.8 2.8ZM6 9V3L11 6L6 9Z"></path>
    //             </svg>
    //           </a>
    //         </div>
    //         <span className="sm:text-base text-[10px] text-qgray font-light">
    //           ©2022
    //           <a
    //             href="https://quomodosoft.com/"
    //             target="_blank"
    //             rel="noreferrer"
    //             className="font-medium text-qblack mx-1"
    //           >
    //             Quomodosoft
    //           </a>
    //           All rights reserved
    //         </span>
    //       </div>
    //       <div className="">
    //         <a href="#">
    //           <Image
    //             width="318"
    //             height="28"
    //             src="/assets/payment-getways.png"
    //             alt="payment-getways"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer className="pt-20 lg:pb-20 pb-5 px-0 bg-white">
      <div className="lg:max-w-[1320px] w-full mx-auto relative ss:px-3 xs:px-0">

        {/* sofa img */}
        <div className="absolute -top-[200px] z-[1] right-0 xs:overflow-x-hidden">
          <img src="assets/muebles/mueble_base.png" alt="Image" className="max-w-[380px] h-auto align-middle md:translate-x-0 xs:translate-x-1/4" />
        </div>

        <div className="flex flex-wrap mt-0 -mx-3 gap-x-6 gap-y-0 pt-24 xs:mx-2 lg:mx-2">
          <div className="w-[66.67%] max-w-full px-[0.75rem] xs:w-full">
            <div className="mt-0 mb-20 relative z-[2]">
              <h3 className="flex items-center text-footer text-lg font-medium mt-6 lg:mt-0 mb-2 leading-[1.2]">
                <span className="mr-1">
                  <img src="assets/envelope-outline.svg" alt="Image" className="max-w-[380px] h-auto align-middle" />
                </span>
                <span>Subscríbete a las últimas noticias</span>
              </h3>

              <form action="#" className="flex flex-wrap mt-0 -mx-3">
                <div className="w-auto px-2">
                  <input type="text" className="h-[50px] rounded-[10px] font-serif block w-full py-[0.375rem] px-[0.75rem] text-base font-normal leading-[1.5] text-imputFootr bg-white bg-clip-padding border border-solid border-borderInputFooter appearance-none m-0" placeholder="Ingresa tu nombre" />
                </div>
                <div className="w-auto  px-2 xxs:pt-3 ss:pt-0">
                  <input type="email" className="h-[50px] rounded-[10px] font-serif block w-full py-[0.375rem] px-[0.75rem] text-base font-normal leading-[1.5] text-imputFootr bg-white bg-clip-padding border border-solid border-borderInputFooter appearance-none m-0" placeholder="Ingresa tu correo" />
                </div>
                <div className="w-auto  px-2 xxs:pt-3 ss:pt-0">
                  <button className="rounded-[10px] bg-footer border-footer font-semibold py-3 px-[30px] text-white inline-block leading-[1.5] text-center align-middle border border-solid border-transparent text-base">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-0 -mx-3 lg:mx-2 xs:mx-2 mb-12">
          <div className="lg:w-[33.33%] px-3 w-full">
            <div className="mb-6 footer-logo-wrap ">
              <a href="#" className="text-4xl font-medium text-footer">Los Chasquis<span>.</span></a>
            </div>

            <p className="mb-6 mt-0 text-sm leading-7">Con una dedicación incomparable a la calidad y un compromiso constante con la perfección, nos enorgullece ser la principal elección para quienes buscan muebles personalizados de la más alta calidad y distinción</p>

            <ul className="pl-0 list-none mt-0 mb-4">
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-iconsFoot text-footer rounded-[50%]"><i className="bi bi-facebook"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-iconsFoot text-footer rounded-[50%]"><i className="bi bi-twitter"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-iconsFoot text-footer rounded-[50%]"><i className="bi bi-instagram"></i></a>
              </li>
              <li className="m-[2px] inline-block">
                <a href="#" className="w-10 h-10 text-center leading-10 inline-block bg-iconsFoot text-footer rounded-[50%]"><i className="bi bi-linkedin"></i></a>
              </li>
            </ul>
          </div>

          <div className="lg:w-[66.67%] max-w-full px-[1.5rem] w-full ">
            <div className="flex flex-wrap lg:mt-[66px] mt-8 lg:-mx-3 mx-0 links-wrap">
              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="/nosotros" className="text-primary">Nosotros</Link></li>
                  <li className="mb-[10px]"><Link href="/services" className="text-primary">Servicios</Link></li>
                  <li className="mb-[10px]"><Link href="/blog" className="text-primary">Blog</Link></li>
                  <li className="mb-[10px]"><Link href="/contact" className="text-primary">Contactanos</Link></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="#" className="text-primary">Soporte</Link></li>
                  <li className="mb-[10px]"><Link href="#" className="text-primary">Clientes</Link></li>
                  <li className="mb-[10px]"><Link href="https://api.whatsapp.com/send?phone=51917584018&text=Hola%2c%20podría%20brindarme%20más%20información%20sobre%20el%20servicio%20que%20brinda.%0AGracias%2e" target='_blank' className="text-primary">Chat</Link></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><a href="#" className="text-primary">Trabajos</a></li>
                  <li className="mb-[10px]"><a href="#" className="text-primary">Nuestro equipo</a></li>
                  <li className="mb-[10px]"><a href="#" className="text-primary">Especialistas</a></li>
                  <li className="mb-[10px]"><a href="#" className="text-primary">Politicas</a></li>
                </ul>
              </div>

              <div className="flex basis-auto lg:w-1/4 w-1/2">
                <ul className="pl-0 list-none mt-0 mb-4">
                  <li className="mb-[10px]"><Link href="/shop" className="text-primary">Muebles</Link></li>
                  <li className="mb-[10px]"><Link href="/shop" className="text-primary">Sillas</Link></li>
                  <li className="mb-[10px]"><Link href="/shop" className="text-primary">General</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-wychoose border-t -mx-3 lg:mx-1 xs:mx-0">
          <div className="flex flex-wrap mt-0 mx-0 lg:mx-2 pt-6">
            <div className="flex basis-auto lg:w-1/2 w-full px-6 lg:px-3">
              <p className="mb-2 lg:text-left text-center mt-0">Copyright ©2023. All Rights Reserved. — Designed by  <a href="#">Rahamsis C.G.</a> Distributed By <a href="#">SysoftIntegra</a></p>
            </div>

            <div className="flex basis-auto lg:w-1/2 w-full text-right px-6 lg:px-3 justify-center lg:justify-end">
              <ul className="pl-0 list-none mt-0 mb-4 inline-flex lg:ml-auto">
                <li className="mr-6"><a href="#" className="text-primary">Terms &amp; Conditions</a></li>
                <li><a href="#" className="text-primary">Privacy Policy</a></li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}