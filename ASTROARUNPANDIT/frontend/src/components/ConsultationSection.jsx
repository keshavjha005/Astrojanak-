import React from "react";

const ConsultationSection = () => {
  return (
    <section style={{background : 'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg3.jpg")'}} className=" py-12 flex justify-center">
      <div className="w-[80%] mt-10 flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT SIDE: 70% width */}
        <div className="w-full lg:w-[70%]">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#822f20] mb-6 leading-snug">
            Book Consultation Call From The Best Astrologer In India!
            <img
          className="mx-auto w-100 mb-10"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB2aWV3Qm94PSIwIDAgMjQwIDE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBpZD0iVmVjdG9yX1NtYXJ0X09iamVjdCIgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB4bGluazpocmVmPSJkYXRhOmltZy9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUFQQ0FZQUFBRGFrVUplQUFBSkZVbEVRVlJvZ2UyYkM1Q1ZaUm5IZjRzdXFDaVhoWW8xa2JzQnVwYXJrWm1TRTBsYVpJVmpsa1phYVZtbTJXMXl4bTVhemVRTUZtcE9ZOXJGVUNwTlRMQXlxRWJVUWgwdUNTS2dnbHhNekhCMThZWkorelRQOC8zUDJXL1ArYzZlQzRlU09PL01tZjNlKy9YL1BQL25lZDl0ZXY2bVNSUUZLMDdLaDFyeXN0SjNLczJxYjZ0OC9MWEFPNEEzQVVkZ2pBUmE5T3VqK3R1QUY0Qk5HSnVBaDRBSE1lNERObGZVVnpYanFrT2U3WUkyNjVRM0hIZ0x4bUhBUk9EZytCbjlnUUVxMndWMDZMY0JZem53TitEUHdGTlY3M0VsWmVwOVZ1dVpudEhXbmc3Z0p1Qjl3SGxZQVBWSjREbmdlU3orUGdYOFE0QjlFZGdmR0FLTUVNQkhBS014eGdKUEFIOEVmbzl4TzBUNTRyNTNIWUFQME5nckFYQm0yVjBNNFAyQWFSZ25BZThFRGdRZXhWZ1BiQXlBK2wvajZWaC9MMjhCNnRkQkNOY0RzRmgvSC91d0FMVnhOWEJidnBjR2dLdHZvT1lCL1c4QjNJUnhQdkFSWUtEaWU0ZW03UWF3SDZKKzBnNURzQUR6M2NCZHdKOHdWcVhhZHEzUkJyUURrekNPa3FhNEFWZ2dUVkxKdUtvRmhndVRid01md0lJZHJBSFdZaXlNZm5zQ2VDcHdBc1liZ1BIU2NyZGlmQlVDTkxzQ3dNNWNwbXFkbmRrc3diZ2ZXQWFzRERiVFhmWlFZQXJHWk9DNEFLMnhGVmdOdkJ6Q3N4dkF2cDQ3c0tqZHFYVytTdkhTNHlvM2owcnJWSk5XcW13dDZSbDE5a1FBdHdsVVRuOHZEekQ2QVVueVc0SSt3MlNNYVJEMGJoRndKOFkvbFRjRk9BUmpMWEF6TUJ2ajRZeStSZ28wRXpBZUFPWUdCYThmZ1BzS0NLN3B6MUVmdWJ4VEJJSUxCZUJaRWo2M3BOcDRJM0F0RnByUkJjKy82Z2hnRnc3VG93OExBQzZRaGkwczYrczRBemdWUXJBOGpNVitPRlYrRGNieHdOdkRUSUhic1JDZXkwV3B2YTErMm84dmhxQk5oTVhLa3VNcU40OUs2MVNUVnFwc0xla1pkYklBZkRURzU0SFRxdXEwMmdIOWR3QzhsNlIxV2pZdkRhcHJmS1hYTnBLNEg2b1BBMmRnakJIWXI0OURrbEJCQjhwUkdQZEEwTG01SllEZ1d2NmpPckIzQXI4RFh1cWwzOTdHbFBzK1FjQm9CZmJSWWI4NXBkVmM4RndrQUg5WFFNaXhoVk5ES01GMmpDMFNOQXQzRXNEN0F1OEdqcGRBKzNsb3grSjZmUVh1ODRCak1aYUVZSEhUdzRXcmNhWkF1UTdqUnVBWHdTcktqUUV1dzRLYUg1bktieEtyK25kRjg4aUs3MnhhcWZyVnAvczZYSUZ4YnpxeGovNjZUWEdXbkFPTFpYY1FtZ2grQUxIcHUxTndyZUtIOWxuWnRSTlNZMi9MSDRnaytDWi9IUGlndnRQQnkzMFRHQmVITGRFaVYwdWJqUUxPbFIwOEQwSWd1R1ByRXExbk9uUUd4VXMweFNDQlp6WndJdEJjNDdybWFIbVR4alZJKzVVTEw0dVdIcXJ2WEppc3NodFM4KzBxYXIyeTBLdzV6SmJBR0tRNVhxVTVwOE13cmMwbXJkVThyZDI1V3N1N3RiWWJ0TmJqdFBackM5cHAwbDc1bnFYM2E2MzJOaGVPME40L0s2YTF1NTFoTnhWbVNiZ2lRYjFZR0QwcmQ4WmNBLzhRT0J2Q0JreUN4UVpjSURweW1LVGpST1dWRHE4ZURkd2ZZMmdxZmluR04vVHRFdjhlakFzVmJ3N3RZZHdLL0FYNGVtYWIzZkY5WlhQTzBPSXV3N2dDdUFsQ1M1K09oV1BNNmUzM2dCVVoyc29GNThuQStWallocitSOW5TcXZyM2t2SW9wOUdyOTdzSTRSOXBubXlqMEx4Mjgwc0J1cjM5SUZIcUFXTWkxTWhVbVNNQlZTcUgza1paMUxmNytzUFdUOHpJdkx3aDYxanNjK0lKbyttMFljMEs3SmlEOEhCYnBDeVFFM0NaL3FjejhMd1hlcGozd3NxOG9keFlXNlc5Vy9CSk1lNW1FclFVMmQvazFya2RhcVRiTHA2OFNvM2xRZ3VsS25aZGMyQUZjbDZQUSs0VkxQNkZXWjJJQjNLTWhGdit0d0UveUM3VjdBTGd2eHBkRVd6dmpzRmg0T3BIR3VCR0xSWGtpMVlhYkRaOE9tcHZWWm5hOFZmVGFKZUpnYVpCcjVFbHRFMVVjS0tmU0hRVlVQdGVPZTdBL0dldWVlRnBkTy85QmR2cnFrbU5JdmcrUndPbkNRcnM5RHZ3VUM3QitEZmlPQUh3eDhLMEF0ZkV4NENBSWdlYk9Pd2ZFSTJYbVBFSDI1YnNDdk83b3N6QWxmaVJQY21HOVBpcnJUck5PbVJZcjVReDBqZnNaMmJIWGl5WnY2V1dPaFhHbjU2NTB2cC9LUDFCbXpSbGE1eVF0RWNvRFJlZG5saFZTV2ZHZFRTdFZ2M3k2SzViUEF2TmpqUW5xM0taMWQySHZWNWN2WnRuQXJmTFFYcHpaeGU3dnhQSndralRJQWxFVjl4eWY3aEl0dEVMNStsa0hyVjNVNXIxWWFLUExSUmM5ZjN5a0oydTdUQlQ2OFlKMjlwSm1PMFZDWnBTOHNFdmwwZmI3NXMyNmIrNlFwbTRSaUEvSFFsaU5EeVpsWVYvK09OOTgwc2ZaWVE1WlNPNDFPdFFyWks5MnlJNXUwZjNzOEdCZUNUdHdyVDRVNHpHQjR4WXhoVUs3OGlDQnUxMTI5ZnpvSjhrN1dOVDZaQ3pTZnlhR1Vvc1B3RFhSSjRBNThtZy9KeWIwYXl4OEM2WHJWN3V2OVVncjFXYjE2VFBqVEZsSzJEWHVnY01STkVXSC9sNXBpbUlhV0M3ZXMyd3pGZ0E4VGRjemZyM3hxUEljSk5QRkRFWUVaYmY4MWRSakJXMk4xblZVbTVqUWNKa0ZnM1dsOG96cVBLVDcxZjBGTUtkWkczb01yYnZOa2FLN0orcXUxVDI3RTJXRER0YlYyVE9pbTVzeFZraHpMdEY5YlhyT28yUlBIeWZxdWxGQ1lXN0tEQmlMaFNubWd1RlhNVDdMVTk1cTF6VnRma3lYczNXSEhJc0xLOXF6U3NxOGVnR2NtYmVuQTdnKzhkSnREUkM0M0NtNFhnYzQ1MUJxa2JhZUprQjF5amEvVDFyWE5XNUh5VEZhT0tmY1RKZ1JRTGJRc0lzS3kxbHhQZVNSdms1YWZyYWsrNnBlNXRHaUYxTkh5dFE2VnA3MU95UUU1dWV2ZHZ6dVBCRmdZOEtKbER4cTJWYlRPdGQ3eitwVnA1cTBVbVZyU2MrbzB3QndQZUtWdGVXZytaUzAzQnhwM1M3bDlWUCtWQ3p1Yjl2RkNyYUtobmZJQWRPc0c0SXhlaHpTWHg3ZEszdFkxK1VCakR5NEYyQmNwdWVoL3VoaW5WNmV2U0pIWUl2bzcxQnB1Mlh5RnJ0OXZpanYzVTVzM3NuaHdFdll3VFZad3FUcWVBUEFaZk1hQUs1SHZEcXQ0dGNiRjhrNTZGNVp0eW4vR2c2VzdyTE5ZYzlhMkxmRFV1K3hPd1JhdDVYSHlmWmIxOXQ0ZWdGd0xqNVdUck5INUVCN1FmMTFxYjhuOWNCaVRjcmppN3pneDhSZGVPSjFYNnlydStWMUEyRUR3R1h6R2dDdVI3eTJRemtpdk04V3p3eUhDc1FQNklYWWxyQkRFNjNuNzRCZkgvUTFlYnd4UkI3WW1mRVFvL2MrS2dFd1lnQmZsaWYrYWRtVVN6SCtydmZnZTh2K2J0VjFvcit3T2thMjhnMVllS00zWnZiUkFIQUR3TVZwL3hjQVRzZmI5Y0Iva216YlZsMC9JUy9yZXQwMy94Yml0NzNTUGlvRWNPN2I3M2pmbzU5N2swZkxTNCt1Zzdib2Z2SitMUDV4bzFaUGNxWGpxYjF1VnJ4ZWRhcEpLMVcybHZUQ09zQi9BR2hSRHBqWXVBbFFBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg=="
          alt=""
        />
          </h2>
          <p className="text-[#2E2E2E] text-justify text-xl mb-8 leading-relaxed">
            We believe astrology is pure science, and we aim to create such a
            social impact of the organization on you that science and astrology
            through its resources of the astrology chart, kundali, etc,. As we
            dive into our 50th year, we strive to build a community where we are
            a part of your daily routine right from our astrology by date of
            birth, name, time, palm reading, and face reading, to all other
            online astrology, numerology, palmistry services
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            Book Now
          </button>
        </div>

        {/* RIGHT SIDE IMAGE: 30% width */}
        <div className="w-full lg:w-[30%] flex justify-center">
          <img
            src="https://astroarunpandit.org/wp-content/uploads/2025/02/Consultation-Call-2.webp" // Replace with your actual image path
            alt="Consultation Box"
            className="rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 shadow-lg w-full max-w-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
