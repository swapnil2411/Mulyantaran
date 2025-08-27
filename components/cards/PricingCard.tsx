// import { CheckIcon, CircleIcon, CrossIcon } from "@/public/svgs/icons";

//   const PricingCard = ({ plan }: { plan: PricingPlan }) => (
//     <div className={`w-full max-w-[350px] min-h-[494px] p-[30px_20px] flex items-center rounded-[30px] ${
//       plan.isHighlighted 
//         ? 'bg-gradient-to-b from-[rgba(255,255,255,0.10)] via-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.06)] backdrop-blur-[44px] border border-white/10'
//         : 'bg-gradient-to-b from-[rgba(255,255,255,0.10)] via-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.06)] backdrop-blur-[25px] border border-white/10'
//     }`}>
//       <div className="w-full flex flex-col gap-6 md:gap-2">
    
//         <div className="flex flex-col gap-[30px]">
       
//           <div className="flex items-center gap-[10px]">
//             <CircleIcon isGolden={plan.isHighlighted} />
//             <div className="flex flex-col gap-3 md:gap-4">
//               <h3 className="text-white text-lg md:text-[22px] font-bold leading-tight md:leading-[41px]">
//                 {plan.name}
//               </h3>
//               <p className="text-[#B3B3B3] text-sm md:text-base font-normal leading-tight md:leading-[26px]">
//                 Billed monthly
//               </p>
//             </div>
//           </div>

   
//           <div className="flex items-end gap-[6px]">
//             <div className="text-white text-4xl md:text-[60px] font-normal leading-tight md:leading-[72px] tracking-[-1.2px]">
//               <span className="font-normal">$</span>
//               <span className="font-bold">{plan.price}</span>
//             </div>
//             <div className="text-white/80 text-sm md:text-lg font-normal leading-tight md:leading-[31px] pb-1">
//               / per month
//             </div>
//           </div>

         
//           <button className={`h-[48px] md:h-[52px] px-6 py-3 md:py-[18px] flex items-center justify-center rounded-2xl text-white text-base md:text-lg font-normal leading-[26px] transition-all hover:scale-105 ${
//             plan.isHighlighted
//               ? 'bg-gradient-to-b from-[#edd3a0] to-[#4c3f29] border border-[#332A19] shadow-[0_24px_45px_-48px_rgba(207,184,138,0.20)] hover:shadow-lg'
//               : 'bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.00)] border border-white/10 hover:bg-white/15'
//           }`}>
//             Get Started
//           </button>
//         </div>

//    l
//         <div className="min-h-[140px] md:min-h-[179px]  flex flex-col gap-4 md:gap-5">
//           <h4 className="text-white text-xl md:text-2xl font-normal leading-tight md:leading-[36px]">
//             What you will get
//           </h4>
//           <div className="flex flex-col gap-3 md:gap-5">
//             {plan.features.map((feature, index) => (
//               <div key={index} className="flex items-center gap-[10px]">
//                 {feature.included ? <CheckIcon /> : <CrossIcon />}
//                 <span className={`text-sm md:text-base font-normal leading-normal ${
//                   feature.included ? 'text-white/80' : 'text-[#5B5757]'
//                 }`}>
//                   {feature.text}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   export default PricingCard;