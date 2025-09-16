import React from "react";
import {
  UserCheck,
  PhoneCall,
  HeartHandshake,
  CalendarDays,
  ScrollText,
  Star,
  CircleDollarSign,
  Gem,
} from "lucide-react";

const services = [
  {
    title: "Personalized Kundali",
    description:
      "10+ years Career, Business, Money, Health, Love, Marriage Prediction Report.",
    icon: UserCheck,
  },
  {
    title: "Consultation Call",
    description: "Personalized guidance on life, love, career, business, money",
    icon: PhoneCall,
  },
  {
    title: "Couple Kundali",
    description: "Kundali Milan Horoscope Matching for Marriage",
    icon: HeartHandshake,
  },
  {
    title: "Numerology Prediction",
    description: "Insights and predictions based on your numbers.",
    icon: CalendarDays,
  },
  {
    title: "Horoscope",
    description: "Daily, weekly, and yearly horoscope reports and predictions.",
    icon: ScrollText,
  },
  {
    title: "Panchang",
    description: "Daily Panchang with tithi, nakshatra, yoga, and more.",
    icon: Star,
  },
  {
    title: "Name & Mobile No Report",
    description: "Personalized reports based on your name and mobile number.",
    icon: CircleDollarSign,
  },
  {
    title: "Buy Gemstones",
    description: "Explore our diverse collection of astrological gemstones.",
    icon: Gem,
  },
];

const OurServices = () => {
  return (
    <section
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")',
        backgroundColor: "white",
        backgroundPosition: "top",
      }}
      className="pt-12 pb-20"
    >
      <h2 className="text-4xl font-bold text-center text-[#724121] mb-10">
        Our Services
        <img
          className="mx-auto w-100 mt-3 mb-10"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB2aWV3Qm94PSIwIDAgMjQwIDE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBpZD0iVmVjdG9yX1NtYXJ0X09iamVjdCIgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB4bGluazpocmVmPSJkYXRhOmltZy9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUFQQ0FZQUFBRGFrVUplQUFBSkZVbEVRVlJvZ2UyYkM1Q1ZaUm5IZjRzdXFDaVhoWW8xa2JzQnVwYXJrWm1TRTBsYVpJVmpsa1phYVZtbTJXMXl4bTVhemVRTUZtcE9ZOXJGVUNwTlRMQXlxRWJVUWgwdUNTS2dnbHhNekhCMThZWkorelRQOC8zUDJXL1ArYzZlQzRlU09PL01tZjNlKy9YL1BQL25lZDl0ZXY2bVNSUUZLMDdLaDFyeXN0SjNLczJxYjZ0OC9MWEFPNEEzQVVkZ2pBUmE5T3VqK3R1QUY0Qk5HSnVBaDRBSE1lNERObGZVVnpYanFrT2U3WUkyNjVRM0hIZ0x4bUhBUk9EZytCbjlnUUVxMndWMDZMY0JZem53TitEUHdGTlY3M0VsWmVwOVZ1dVpudEhXbmc3Z0p1Qjl3SGxZQVBWSjREbmdlU3orUGdYOFE0QjlFZGdmR0FLTUVNQkhBS014eGdKUEFIOEVmbzl4TzBUNTRyNTNIWUFQME5nckFYQm0yVjBNNFAyQWFSZ25BZThFRGdRZXhWZ1BiQXlBK2wvajZWaC9MMjhCNnRkQkNOY0RzRmgvSC91d0FMVnhOWEJidnBjR2dLdHZvT1lCL1c4QjNJUnhQdkFSWUtEaWU0ZW03UWF3SDZKKzBnNURzQUR6M2NCZHdKOHdWcVhhZHEzUkJyUURrekNPa3FhNEFWZ2dUVkxKdUtvRmhndVRid01md0lJZHJBSFdZaXlNZm5zQ2VDcHdBc1liZ1BIU2NyZGlmQlVDTkxzQ3dNNWNwbXFkbmRrc3diZ2ZXQWFzRERiVFhmWlFZQXJHWk9DNEFLMnhGVmdOdkJ6Q3N4dkF2cDQ3c0tqZHFYVytTdkhTNHlvM2owcnJWSk5XcW13dDZSbDE5a1FBdHdsVVRuOHZEekQ2QVVueVc0SSt3MlNNYVJEMGJoRndKOFkvbFRjRk9BUmpMWEF6TUJ2ajRZeStSZ28wRXpBZUFPWUdCYThmZ1BzS0NLN3B6MUVmdWJ4VEJJSUxCZUJaRWo2M3BOcDRJM0F0RnByUkJjKy82Z2hnRnc3VG93OExBQzZRaGkwczYrczRBemdWUXJBOGpNVitPRlYrRGNieHdOdkRUSUhic1JDZXkwV3B2YTErMm84dmhxQk5oTVhLa3VNcU40OUs2MVNUVnFwc0xla1pkYklBZkRURzU0SFRxdXEwMmdIOWR3QzhsNlIxV2pZdkRhcHJmS1hYTnBLNEg2b1BBMmRnakJIWXI0OURrbEJCQjhwUkdQZEEwTG01SllEZ1d2NmpPckIzQXI4RFh1cWwzOTdHbFBzK1FjQm9CZmJSWWI4NXBkVmM4RndrQUg5WFFNaXhoVk5ES01GMmpDMFNOQXQzRXNEN0F1OEdqcGRBKzNsb3grSjZmUVh1ODRCak1aYUVZSEhUdzRXcmNhWkF1UTdqUnVBWHdTcktqUUV1dzRLYUg1bktieEtyK25kRjg4aUs3MnhhcWZyVnAvczZYSUZ4YnpxeGovNjZUWEdXbkFPTFpYY1FtZ2grQUxIcHUxTndyZUtIOWxuWnRSTlNZMi9MSDRnaytDWi9IUGlndnRQQnkzMFRHQmVITGRFaVYwdWJqUUxPbFIwOEQwSWd1R1ByRXExbk9uUUd4VXMweFNDQlp6WndJdEJjNDdybWFIbVR4alZJKzVVTEw0dVdIcXJ2WEppc3NodFM4KzBxYXIyeTBLdzV6SmJBR0tRNVhxVTVwOE13cmMwbXJkVThyZDI1V3N1N3RiWWJ0TmJqdFBackM5cHAwbDc1bnFYM2E2MzJOaGVPME40L0s2YTF1NTFoTnhWbVNiZ2lRYjFZR0QwcmQ4WmNBLzhRT0J2Q0JreUN4UVpjSURweW1LVGpST1dWRHE4ZURkd2ZZMmdxZmluR04vVHRFdjhlakFzVmJ3N3RZZHdLL0FYNGVtYWIzZkY5WlhQTzBPSXV3N2dDdUFsQ1M1K09oV1BNNmUzM2dCVVoyc29GNThuQStWallocitSOW5TcXZyM2t2SW9wOUdyOTdzSTRSOXBubXlqMEx4Mjgwc0J1cjM5SUZIcUFXTWkxTWhVbVNNQlZTcUgza1paMUxmNytzUFdUOHpJdkx3aDYxanNjK0lKbyttMFljMEs3SmlEOEhCYnBDeVFFM0NaL3FjejhMd1hlcGozd3NxOG9keFlXNlc5Vy9CSk1lNW1FclFVMmQvazFya2RhcVRiTHA2OFNvM2xRZ3VsS25aZGMyQUZjbDZQUSs0VkxQNkZXWjJJQjNLTWhGdit0d0UveUM3VjdBTGd2eHBkRVd6dmpzRmg0T3BIR3VCR0xSWGtpMVlhYkRaOE9tcHZWWm5hOFZmVGFKZUpnYVpCcjVFbHRFMVVjS0tmU0hRVlVQdGVPZTdBL0dldWVlRnBkTy85QmR2cnFrbU5JdmcrUndPbkNRcnM5RHZ3VUM3QitEZmlPQUh3eDhLMEF0ZkV4NENBSWdlYk9Pd2ZFSTJYbVBFSDI1YnNDdk83b3N6QWxmaVJQY21HOVBpcnJUck5PbVJZcjVReDBqZnNaMmJIWGl5WnY2V1dPaFhHbjU2NTB2cC9LUDFCbXpSbGE1eVF0RWNvRFJlZG5saFZTV2ZHZFRTdFZ2M3k2SzViUEF2TmpqUW5xM0taMWQySHZWNWN2WnRuQXJmTFFYcHpaeGU3dnhQSndralRJQWxFVjl4eWY3aEl0dEVMNStsa0hyVjNVNXIxWWFLUExSUmM5ZjN5a0oydTdUQlQ2OFlKMjlwSm1PMFZDWnBTOHNFdmwwZmI3NXMyNmIrNlFwbTRSaUEvSFFsaU5EeVpsWVYvK09OOTgwc2ZaWVE1WlNPNDFPdFFyWks5MnlJNXUwZjNzOEdCZUNUdHdyVDRVNHpHQjR4WXhoVUs3OGlDQnUxMTI5ZnpvSjhrN1dOVDZaQ3pTZnlhR1Vvc1B3RFhSSjRBNThtZy9KeWIwYXl4OEM2WHJWN3V2OVVncjFXYjE2VFBqVEZsSzJEWHVnY01STkVXSC9sNXBpbUlhV0M3ZXMyd3pGZ0E4VGRjemZyM3hxUEljSk5QRkRFWUVaYmY4MWRSakJXMk4xblZVbTVqUWNKa0ZnM1dsOG96cVBLVDcxZjBGTUtkWkczb01yYnZOa2FLN0orcXUxVDI3RTJXRER0YlYyVE9pbTVzeFZraHpMdEY5YlhyT28yUlBIeWZxdWxGQ1lXN0tEQmlMaFNubWd1RlhNVDdMVTk1cTF6VnRma3lYczNXSEhJc0xLOXF6U3NxOGVnR2NtYmVuQTdnKzhkSnREUkM0M0NtNFhnYzQ1MUJxa2JhZUprQjF5amEvVDFyWE5XNUh5VEZhT0tmY1RKZ1JRTGJRc0lzS3kxbHhQZVNSdms1YWZyYWsrNnBlNXRHaUYxTkh5dFE2VnA3MU95UUU1dWV2ZHZ6dVBCRmdZOEtKbER4cTJWYlRPdGQ3eitwVnA1cTBVbVZyU2MrbzB3QndQZUtWdGVXZytaUzAzQnhwM1M3bDlWUCtWQ3p1Yjl2RkNyYUtobmZJQWRPc0c0SXhlaHpTWHg3ZEszdFkxK1VCakR5NEYyQmNwdWVoL3VoaW5WNmV2U0pIWUl2bzcxQnB1Mlh5RnJ0OXZpanYzVTVzM3NuaHdFdll3VFZad3FUcWVBUEFaZk1hQUs1SHZEcXQ0dGNiRjhrNTZGNVp0eW4vR2c2VzdyTE5ZYzlhMkxmRFV1K3hPd1JhdDVYSHlmWmIxOXQ0ZWdGd0xqNVdUck5INUVCN1FmMTFxYjhuOWNCaVRjcmppN3pneDhSZGVPSjFYNnlydStWMUEyRUR3R1h6R2dDdVI3eTJRemtpdk04V3p3eUhDc1FQNklYWWxyQkRFNjNuNzRCZkgvUTFlYnd4UkI3WW1mRVFvL2MrS2dFd1lnQmZsaWYrYWRtVVN6SCtydmZnZTh2K2J0VjFvcit3T2thMjhnMVllS00zWnZiUkFIQUR3TVZwL3hjQVRzZmI5Y0Iva216YlZsMC9JUy9yZXQwMy94Yml0NzNTUGlvRWNPN2I3M2pmbzU5N2swZkxTNCt1Zzdib2Z2SitMUDV4bzFaUGNxWGpxYjF1VnJ4ZWRhcEpLMVcybHZUQ09zQi9BR2hSRHBqWXVBbFFBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg=="
          alt="decorative divider"
        />
      </h2>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
          >
            <service.icon className="mx-auto text-[#724121] mb-4" size={40} />
            <h3 className="text-xl font-semibold text-[#724121] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
  
};

export default OurServices;
