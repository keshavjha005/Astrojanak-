import React from "react";

const calculators = [
  {
    title: "Numerology Calculator",
    desc: "With Horoscope, Kundali, And Predictions",
    img: "https://astroarunpandit.org/wp-content/uploads/2023/10/astrology_ucetki4fg2lb.svg",
    btn: "Get it Now",
  },
  {
    title: "Lucky Mob Calculator",
    desc: "With Horoscope, Kundali, And Predictions",
    img: "cal-mob.png",
    btn: "Get it Now",
  },
  {
    title: "Name Calculator",
    desc: "With Horoscope, Kundali, And Predictions",
    img: "https://astroarunpandit.org/wp-content/uploads/2023/10/Group-34892.svg",
    btn: "Get it Now",
  },
];

const CalculatorCard = ({ title, desc, img, btn }) => (
  <div className="group relative overflow-hidden hover:bg-[#F96F42] hover:text-white transition-all duration-300 rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:scale-[1.02] w-full">
    {/* Background Image on Hover */}
    <div
      className="absolute animate-spin-md inset-0 bg-cover bg-center opacity-0 group-hover:opacity-70 brightness-0 invert transition-opacity duration-300 z-0"
      style={{
        backgroundImage: `url('https://kamleshyadav.com/html/astrology/version-3/assets/images/hand_bg.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    ></div>

    {/* Foreground content */}
    <div className="relative z-10 group  group-hover:text-white group-hover:text-shadow-2xs text-[#F46333]">
      <img
        src={img}
        alt={title}
        className="w-20 mb-4 mx-auto group-hover:invert group-hover:brightness-0"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm mb-4">{desc}</p>
      <button className="bg-[#F96F42] group-hover:bg-white group-hover:text-[#724121] text-white px-5 py-2 rounded-md text-base">
        {btn}
      </button>
    </div>
  </div>
);

const CalculatorsSection = () => {
  return (
    <section style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg4.jpg")'}} className="relative py-20 bg-white overflow-hidden">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#724121] text-center mb-12">
          Free Calculators
          <img
          className="mx-auto w-100 mt-3 mb-10"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB2aWV3Qm94PSIwIDAgMjQwIDE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBpZD0iVmVjdG9yX1NtYXJ0X09iamVjdCIgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB4bGluazpocmVmPSJkYXRhOmltZy9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUFQQ0FZQUFBRGFrVUplQUFBSkZVbEVRVlJvZ2UyYkM1Q1ZaUm5IZjRzdXFDaVhoWW8xa2JzQnVwYXJrWm1TRTBsYVpJVmpsa1phYVZtbTJXMXl4bTVhemVRTUZtcE9ZOXJGVUNwTlRMQXlxRWJVUWgwdUNTS2dnbHhNekhCMThZWkorelRQOC8zUDJXL1ArYzZlQzRlU09PL01tZjNlKy9YL1BQL25lZDl0ZXY2bVNSUUZLMDdLaDFyeXN0SjNLczJxYjZ0OC9MWEFPNEEzQVVkZ2pBUmE5T3VqK3R1QUY0Qk5HSnVBaDRBSE1lNERObGZVVnpYanFrT2U3WUkyNjVRM0hIZ0x4bUhBUk9EZytCbjlnUUVxMndWMDZMY0JZem53TitEUHdGTlY3M0VsWmVwOVZ1dVpudEhXbmc3Z0p1Qjl3SGxZQVBWSjREbmdlU3orUGdYOFE0QjlFZGdmR0FLTUVNQkhBS014eGdKUEFIOEVmbzl4TzBUNTRyNTNIWUFQME5nckFYQm0yVjBNNFAyQWFSZ25BZThFRGdRZXhWZ1BiQXlBK2wvajZWaC9MMjhCNnRkQkNOY0RzRmgvSC91d0FMVnhOWEJidnBjR2dLdHZvT1lCL1c4QjNJUnhQdkFSWUtEaWU0ZW03UWF3SDZKKzBnNURzQUR6M2NCZHdKOHdWcVhhZHEzUkJyUURrekNPa3FhNEFWZ2dUVkxKdUtvRmhndVRid01md0lJZHJBSFdZaXlNZm5zQ2VDcHdBc1liZ1BIU2NyZGlmQlVDTkxzQ3dNNWNwbXFkbmRrc3diZ2ZXQWFzRERiVFhmWlFZQXJHWk9DNEFLMnhGVmdOdkJ6Q3N4dkF2cDQ3c0tqZHFYVytTdkhTNHlvM2owcnJWSk5XcW13dDZSbDE5a1FBdHdsVVRuOHZEekQ2QVVueVc0SSt3MlNNYVJEMGJoRndKOFkvbFRjRk9BUmpMWEF6TUJ2ajRZeStSZ28wRXpBZUFPWUdCYThmZ1BzS0NLN3B6MUVmdWJ4VEJJSUxCZUJaRWo2M3BOcDRJM0F0RnByUkJjKy82Z2hnRnc3VG93OExBQzZRaGkwczYrczRBemdWUXJBOGpNVitPRlYrRGNieHdOdkRUSUhic1JDZXkwV3B2YTErMm84dmhxQk5oTVhLa3VNcU40OUs2MVNUVnFwc0xla1pkYklBZkRURzU0SFRxdXEwMmdIOWR3QzhsNlIxV2pZdkRhcHJmS1hYTnBLNEg2b1BBMmRnakJIWXI0OURrbEJCQjhwUkdQZEEwTG01SllEZ1d2NmpPckIzQXI4RFh1cWwzOTdHbFBzK1FjQm9CZmJSWWI4NXBkVmM4RndrQUg5WFFNaXhoVk5ES01GMmpDMFNOQXQzRXNEN0F1OEdqcGRBKzNsb3grSjZmUVh1ODRCak1aYUVZSEhUdzRXcmNhWkF1UTdqUnVBWHdTcktqUUV1dzRLYUg1bktieEtyK25kRjg4aUs3MnhhcWZyVnAvczZYSUZ4YnpxeGovNjZUWEdXbkFPTFpYY1FtZ2grQUxIcHUxTndyZUtIOWxuWnRSTlNZMi9MSDRnaytDWi9IUGlndnRQQnkzMFRHQmVITGRFaVYwdWJqUUxPbFIwOEQwSWd1R1ByRXExbk9uUUd4VXMweFNDQlp6WndJdEJjNDdybWFIbVR4alZJKzVVTEw0dVdIcXJ2WEppc3NodFM4KzBxYXIyeTBLdzV6SmJBR0tRNVhxVTVwOE13cmMwbXJkVThyZDI1V3N1N3RiWWJ0TmJqdFBackM5cHAwbDc1bnFYM2E2MzJOaGVPME40L0s2YTF1NTFoTnhWbVNiZ2lRYjFZR0QwcmQ4WmNBLzhRT0J2Q0JreUN4UVpjSURweW1LVGpST1dWRHE4ZURkd2ZZMmdxZmluR04vVHRFdjhlakFzVmJ3N3RZZHdLL0FYNGVtYWIzZkY5WlhQTzBPSXV3N2dDdUFsQ1M1K09oV1BNNmUzM2dCVVoyc29GNThuQStWallocitSOW5TcXZyM2t2SW9wOUdyOTdzSTRSOXBubXlqMEx4Mjgwc0J1cjM5SUZIcUFXTWkxTWhVbVNNQlZTcUgza1paMUxmNytzUFdUOHpJdkx3aDYxanNjK0lKbyttMFljMEs3SmlEOEhCYnBDeVFFM0NaL3FjejhMd1hlcGozd3NxOG9keFlXNlc5Vy9CSk1lNW1FclFVMmQvazFya2RhcVRiTHA2OFNvM2xRZ3VsS25aZGMyQUZjbDZQUSs0VkxQNkZXWjJJQjNLTWhGdit0d0UveUM3VjdBTGd2eHBkRVd6dmpzRmg0T3BIR3VCR0xSWGtpMVlhYkRaOE9tcHZWWm5hOFZmVGFKZUpnYVpCcjVFbHRFMVVjS0tmU0hRVlVQdGVPZTdBL0dldWVlRnBkTy85QmR2cnFrbU5JdmcrUndPbkNRcnM5RHZ3VUM3QitEZmlPQUh3eDhLMEF0ZkV4NENBSWdlYk9Pd2ZFSTJYbVBFSDI1YnNDdk83b3N6QWxmaVJQY21HOVBpcnJUck5PbVJZcjVReDBqZnNaMmJIWGl5WnY2V1dPaFhHbjU2NTB2cC9LUDFCbXpSbGE1eVF0RWNvRFJlZG5saFZTV2ZHZFRTdFZ2M3k2SzViUEF2TmpqUW5xM0taMWQySHZWNWN2WnRuQXJmTFFYcHpaeGU3dnhQSndralRJQWxFVjl4eWY3aEl0dEVMNStsa0hyVjNVNXIxWWFLUExSUmM5ZjN5a0oydTdUQlQ2OFlKMjlwSm1PMFZDWnBTOHNFdmwwZmI3NXMyNmIrNlFwbTRSaUEvSFFsaU5EeVpsWVYvK09OOTgwc2ZaWVE1WlNPNDFPdFFyWks5MnlJNXUwZjNzOEdCZUNUdHdyVDRVNHpHQjR4WXhoVUs3OGlDQnUxMTI5ZnpvSjhrN1dOVDZaQ3pTZnlhR1Vvc1B3RFhSSjRBNThtZy9KeWIwYXl4OEM2WHJWN3V2OVVncjFXYjE2VFBqVEZsSzJEWHVnY01STkVXSC9sNXBpbUlhV0M3ZXMyd3pGZ0E4VGRjemZyM3hxUEljSk5QRkRFWUVaYmY4MWRSakJXMk4xblZVbTVqUWNKa0ZnM1dsOG96cVBLVDcxZjBGTUtkWkczb01yYnZOa2FLN0orcXUxVDI3RTJXRER0YlYyVE9pbTVzeFZraHpMdEY5YlhyT28yUlBIeWZxdWxGQ1lXN0tEQmlMaFNubWd1RlhNVDdMVTk1cTF6VnRma3lYczNXSEhJc0xLOXF6U3NxOGVnR2NtYmVuQTdnKzhkSnREUkM0M0NtNFhnYzQ1MUJxa2JhZUprQjF5amEvVDFyWE5XNUh5VEZhT0tmY1RKZ1JRTGJRc0lzS3kxbHhQZVNSdms1YWZyYWsrNnBlNXRHaUYxTkh5dFE2VnA3MU95UUU1dWV2ZHZ6dVBCRmdZOEtKbER4cTJWYlRPdGQ3eitwVnA1cTBVbVZyU2MrbzB3QndQZUtWdGVXZytaUzAzQnhwM1M3bDlWUCtWQ3p1Yjl2RkNyYUtobmZJQWRPc0c0SXhlaHpTWHg3ZEszdFkxK1VCakR5NEYyQmNwdWVoL3VoaW5WNmV2U0pIWUl2bzcxQnB1Mlh5RnJ0OXZpanYzVTVzM3NuaHdFdll3VFZad3FUcWVBUEFaZk1hQUs1SHZEcXQ0dGNiRjhrNTZGNVp0eW4vR2c2VzdyTE5ZYzlhMkxmRFV1K3hPd1JhdDVYSHlmWmIxOXQ0ZWdGd0xqNVdUck5INUVCN1FmMTFxYjhuOWNCaVRjcmppN3pneDhSZGVPSjFYNnlydStWMUEyRUR3R1h6R2dDdVI3eTJRemtpdk04V3p3eUhDc1FQNklYWWxyQkRFNjNuNzRCZkgvUTFlYnd4UkI3WW1mRVFvL2MrS2dFd1lnQmZsaWYrYWRtVVN6SCtydmZnZTh2K2J0VjFvcit3T2thMjhnMVllS00zWnZiUkFIQUR3TVZwL3hjQVRzZmI5Y0Iva216YlZsMC9JUy9yZXQwMy94Yml0NzNTUGlvRWNPN2I3M2pmbzU5N2swZkxTNCt1Zzdib2Z2SitMUDV4bzFaUGNxWGpxYjF1VnJ4ZWRhcEpLMVcybHZUQ09zQi9BR2hSRHBqWXVBbFFBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg=="
          alt=""
        />
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Side Image */}
          <div className="relative">
            <img
              src="https://kamleshyadav.com/html/astrology/version-3/assets/images/service_img2.png"
              alt="Rotating"
              className="animate-spin-slow"
            />
            <img
              src="https://kamleshyadav.com/html/astrology/version-3/assets/images/service_img1.jpg"
              alt="Foreground"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-80 md:w-60 md:h-[30rem] object-cover rounded-full shadow-lg"
            />
            {/* <img src="https://kamleshyadav.com/html/astrology/version-3/assets/images/svg/choose.svg" alt="" className="absolute bottom-0 w-30" /> */}
          </div>

          {/* Right Side Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 z-20">
            {calculators.map((item, idx) => (
              <CalculatorCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
