import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        background:
          'url("https://kamleshyadav.com/html/astrology/version-3/assets/images/bg6.jpg")',
      }}
      className=" text-[#724121] py-10 px-6 md:px-20 lg:px-40"
    >
      <div className="bg-white p-6 md:p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center  mb-8">
          Refund Policy
          <img
            className="mx-auto w-100 mt-3 mb-10"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB2aWV3Qm94PSIwIDAgMjQwIDE1Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZSBpZD0iVmVjdG9yX1NtYXJ0X09iamVjdCIgZGF0YS1uYW1lPSJWZWN0b3IgU21hcnQgT2JqZWN0IiB3aWR0aD0iMjQwIiBoZWlnaHQ9IjE1IiB4bGluazpocmVmPSJkYXRhOmltZy9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFQQUFBQUFQQ0FZQUFBRGFrVUplQUFBSkZVbEVRVlJvZ2UyYkM1Q1ZaUm5IZjRzdXFDaVhoWW8xa2JzQnVwYXJrWm1TRTBsYVpJVmpsa1phYVZtbTJXMXl4bTVhemVRTUZtcE9ZOXJGVUNwTlRMQXlxRWJVUWgwdUNTS2dnbHhNekhCMThZWkorelRQOC8zUDJXL1ArYzZlQzRlU09PL01tZjNlKy9YL1BQL25lZDl0ZXY2bVNSUUZLMDdLaDFyeXN0SjNLczJxYjZ0OC9MWEFPNEEzQVVkZ2pBUmE5T3VqK3R1QUY0Qk5HSnVBaDRBSE1lNERObGZVVnpYanFrT2U3WUkyNjVRM0hIZ0x4bUhBUk9EZytCbjlnUUVxMndWMDZMY0JZem53TitEUHdGTlY3M0VsWmVwOVZ1dVpudEhXbmc3Z0p1Qjl3SGxZQVBWSjREbmdlU3orUGdYOFE0QjlFZGdmR0FLTUVNQkhBS014eGdKUEFIOEVmbzl4TzBUNTRyNTNIWUFQME5nckFYQm0yVjBNNFAyQWFSZ25BZThFRGdRZXhWZ1BiQXlBK2wvajZWaC9MMjhCNnRkQkNOY0RzRmgvSC91d0FMVnhOWEJidnBjR2dLdHZvT1lCL1c4QjNJUnhQdkFSWUtEaWU0ZW03UWF3SDZKKzBnNURzQUR6M2NCZHdKOHdWcVhhZHEzUkJyUURrekNPa3FhNEFWZ2dUVkxKdUtvRmhndVRid01md0lJZHJBSFdZaXlNZm5zQ2VDcHdBc1liZ1BIU2NyZGlmQlVDTkxzQ3dNNWNwbXFkbmRrc3diZ2ZXQWFzRERiVFhmWlFZQXJHWk9DNEFLMnhGVmdOdkJ6Q3N4dkF2cDQ3c0tqZHFYVytTdkhTNHlvM2owcnJWSk5XcW13dDZSbDE5a1FBdHdsVVRuOHZEekQ2QVVueVc0SSt3MlNNYVJEMGJoRndKOFkvbFRjRk9BUmpMWEF6TUJ2ajRZeStSZ28wRXpBZUFPWUdCYThmZ1BzS0NLN3B6MUVmdWJ4VEJJSUxCZUJaRWo2M3BOcDRJM0F0RnByUkJjKy82Z2hnRnc3VG93OExBQzZRaGkwczYrczRBemdWUXJBOGpNVitPRlYrRGNieHdOdkRUSUhic1JDZXkwV3B2YTErMm84dmhxQk5oTVhLa3VNcU40OUs2MVNUVnFwc0xla1pkYklBZkRURzU0SFRxdXEwMmdIOWR3QzhsNlIxV2pZdkRhcHJmS1hYTnBLNEg2b1BBMmRnakJIWXI0OURrbEJCQjhwUkdQZEEwTG01SllEZ1d2NmpPckIzQXI4RFh1cWwzOTdHbFBzK1FjQm9CZmJSWWI4NXBkVmM4RndrQUg5WFFNaXhoVk5ES01GMmpDMFNOQXQzRXNEN0F1OEdqcGRBKzNsb3grSjZmUVh1ODRCak1aYUVZSEhUdzRXcmNhWkF1UTdqUnVBWHdTcktqUUV1dzRLYUg1bktieEtyK25kRjg4aUs3MnhhcWZyVnAvczZYSUZ4YnpxeGovNjZUWEdXbkFPTFpYY1FtZ2grQUxIcHUxTndyZUtIOWxuWnRSTlNZMi9MSDRnaytDWi9IUGlndnRQQnkzMFRHQmVITGRFaVYwdWJqUUxPbFIwOEQwSWd1R1ByRXExbk9uUUd4VXMweFNDQlp6WndJdEJjNDdybWFIbVR4alZJKzVVTEw0dVdIcXJ2WEppc3NodFM4KzBxYXIyeTBLdzV6SmJBR0tRNVhxVTVwOE13cmMwbXJkVThyZDI1V3N1N3RiWWJ0TmJqdFBackM5cHAwbDc1bnFYM2E2MzJOaGVPME40L0s2YTF1NTFoTnhWbVNiZ2lRYjFZR0QwcmQ4WmNBLzhRT0J2Q0JreUN4UVpjSURweW1LVGpST1dWRHE4ZURkd2ZZMmdxZmluR04vVHRFdjhlakFzVmJ3N3RZZHdLL0FYNGVtYWIzZkY5WlhQTzBPSXV3N2dDdUFsQ1M1K09oV1BNNmUzM2dCVVoyc29GNThuQStWallocitSOW5TcXZyM2t2SW9wOUdyOTdzSTRSOXBubXlqMEx4Mjgwc0J1cjM5SUZIcUFXTWkxTWhVbVNNQlZTcUgza1paMUxmNytzUFdUOHpJdkx3aDYxanNjK0lKbyttMFljMEs3SmlEOEhCYnBDeVFFM0NaL3FjejhMd1hlcGozd3NxOG9keFlXNlc5Vy9CSk1lNW1FclFVMmQvazFya2RhcVRiTHA2OFNvM2xRZ3VsS25aZGMyQUZjbDZQUSs0VkxQNkZXWjJJQjNLTWhGdit0d0UveUM3VjdBTGd2eHBkRVd6dmpzRmg0T3BIR3VCR0xSWGtpMVlhYkRaOE9tcHZWWm5hOFZmVGFKZUpnYVpCcjVFbHRFMVVjS0tmU0hRVlVQdGVPZTdBL0dldWVlRnBkTy85QmR2cnFrbU5JdmcrUndPbkNRcnM5RHZ3VUM3QitEZmlPQUh3eDhLMEF0ZkV4NENBSWdlYk9Pd2ZFSTJYbVBFSDI1YnNDdk83b3N6QWxmaVJQY21HOVBpcnJUck5PbVJZcjVReDBqZnNaMmJIWGl5WnY2V1dPaFhHbjU2NTB2cC9LUDFCbXpSbGE1eVF0RWNvRFJlZG5saFZTV2ZHZFRTdFZ2M3k2SzViUEF2TmpqUW5xM0taMWQySHZWNWN2WnRuQXJmTFFYcHpaeGU3dnhQSndralRJQWxFVjl4eWY3aEl0dEVMNStsa0hyVjNVNXIxWWFLUExSUmM5ZjN5a0oydTdUQlQ2OFlKMjlwSm1PMFZDWnBTOHNFdmwwZmI3NXMyNmIrNlFwbTRSaUEvSFFsaU5EeVpsWVYvK09OOTgwc2ZaWVE1WlNPNDFPdFFyWks5MnlJNXUwZjNzOEdCZUNUdHdyVDRVNHpHQjR4WXhoVUs3OGlDQnUxMTI5ZnpvSjhrN1dOVDZaQ3pTZnlhR1Vvc1B3RFhSSjRBNThtZy9KeWIwYXl4OEM2WHJWN3V2OVVncjFXYjE2VFBqVEZsSzJEWHVnY01STkVXSC9sNXBpbUlhV0M3ZXMyd3pGZ0E4VGRjemZyM3hxUEljSk5QRkRFWUVaYmY4MWRSakJXMk4xblZVbTVqUWNKa0ZnM1dsOG96cVBLVDcxZjBGTUtkWkczb01yYnZOa2FLN0orcXUxVDI3RTJXRER0YlYyVE9pbTVzeFZraHpMdEY5YlhyT28yUlBIeWZxdWxGQ1lXN0tEQmlMaFNubWd1RlhNVDdMVTk1cTF6VnRma3lYczNXSEhJc0xLOXF6U3NxOGVnR2NtYmVuQTdnKzhkSnREUkM0M0NtNFhnYzQ1MUJxa2JhZUprQjF5amEvVDFyWE5XNUh5VEZhT0tmY1RKZ1JRTGJRc0lzS3kxbHhQZVNSdms1YWZyYWsrNnBlNXRHaUYxTkh5dFE2VnA3MU95UUU1dWV2ZHZ6dVBCRmdZOEtKbER4cTJWYlRPdGQ3eitwVnA1cTBVbVZyU2MrbzB3QndQZUtWdGVXZytaUzAzQnhwM1M3bDlWUCtWQ3p1Yjl2RkNyYUtobmZJQWRPc0c0SXhlaHpTWHg3ZEszdFkxK1VCakR5NEYyQmNwdWVoL3VoaW5WNmV2U0pIWUl2bzcxQnB1Mlh5RnJ0OXZpanYzVTVzM3NuaHdFdll3VFZad3FUcWVBUEFaZk1hQUs1SHZEcXQ0dGNiRjhrNTZGNVp0eW4vR2c2VzdyTE5ZYzlhMkxmRFV1K3hPd1JhdDVYSHlmWmIxOXQ0ZWdGd0xqNVdUck5INUVCN1FmMTFxYjhuOWNCaVRjcmppN3pneDhSZGVPSjFYNnlydStWMUEyRUR3R1h6R2dDdVI3eTJRemtpdk04V3p3eUhDc1FQNklYWWxyQkRFNjNuNzRCZkgvUTFlYnd4UkI3WW1mRVFvL2MrS2dFd1lnQmZsaWYrYWRtVVN6SCtydmZnZTh2K2J0VjFvcit3T2thMjhnMVllS00zWnZiUkFIQUR3TVZwL3hjQVRzZmI5Y0Iva216YlZsMC9JUy9yZXQwMy94Yml0NzNTUGlvRWNPN2I3M2pmbzU5N2swZkxTNCt1Zzdib2Z2SitMUDV4bzFaUGNxWGpxYjF1VnJ4ZWRhcEpLMVcybHZUQ09zQi9BR2hSRHBqWXVBbFFBQUFBQUVsRlRrU3VRbUNDIj48L2ltYWdlPgogICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPg=="
            alt=""
          />
        </h1>

        <section className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            Astro Arun Pandit (“Astro Arun Pandit”, “We,” “Us” “Our” or
            “Company”) is committed to ensuring compliance with applicable
            privacy laws in the countries where our products are distributed.
            The protection of your personal data is of paramount importance to
            us. As such, we conduct our business in strict adherence to the data
            privacy and data security laws applicable in the respective
            jurisdiction where our products are distributed to you.
          </p>

          <p>
            This Privacy Policy is intended to inform you about the types of
            personal data we collect from you, how such personal data may be
            used and disclosed, how you may control the use of your personal
            data, and the measures we take to protect your personal data when
            you use/access the website and/or services offered on our website.
          </p>
          <p>
            This Privacy Policy is published in accordance with Rule 3(1) of the
            Information Technology (Intermediaries Guidelines) Rules, 2011 and
            Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011 which
            requires publishing of the Privacy policy for collection, use,
            storage and transfer of sensitive personal data or information.
          </p>
          <h2 className="text-2xl font-semibold text-[#800909]">
            User Consent
          </h2>
          <p className="mb-4">
            This Privacy Policy, which may be updated or amended periodically
            (without prior intimation or approval), outlines the types of
            information collected from users, including personal identification
            details, contact information, birth details, and any forecasts or
            predictions made based on the information provided. It also explains
            how such information is used in connection with the services
            provided on the Website.
          </p>
          <p className="mb-4">
            By accessing and using the Website, you acknowledge that you have
            read, understood, and expressly consent to the terms of this Privacy
            Policy. If you do not agree with any of the terms outlined herein,
            you are advised not to use this Website.
          </p>
          <p>
            Your continued use of the Website constitutes your unconditional
            consent to the collection, maintenance, use, processing, and
            disclosure of your personal and other information in accordance with
            this Privacy Policy.
          </p>
          <p>
            This Privacy Policy should be read in conjunction with the
            applicable Terms of Conditions and any other policies provided on
            the Website.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            Personal Information We Collect
          </h2>
          <p>
            When you visit the website, we automatically collect certain
            information about your device, including but not limited to
            information about your web browser, IP address, time zone, and some
            of the cookies that are installed on your device. Additionally, as
            you browse the website, we collect information about the individual
            web pages or products that you view, what websites or search terms
            referred you to the Site, and information about how you interact
            with the Site. We refer to this automatically-collected information
            as <strong>“Device Information.”</strong>
          </p>

          <b className="mt-4">
            We collect Device Information using the following technologies:
          </b>

          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              <strong>Cookies:</strong> Data files that are placed on your
              device or computer and often include an anonymous unique
              identifier. For more information about cookies, and how to disable
              cookies, visit{" "}
              <a
                href="http://www.allaboutcookies.org"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.allaboutcookies.org
              </a>
              .
            </li>
            <li>
              <strong>Log files:</strong> Track actions occurring on the Site,
              and collect data including your IP address, browser type, Internet
              service provider, referring/exit pages, and date/time stamps.
            </li>
            <li>
              <strong>Web beacons, tags, and pixels:</strong> Electronic files
              used to record information about how you browse the website.
            </li>
            <li>
              <strong>Forms:</strong> Data submitted by users through contact
              forms or other input fields on the website.
            </li>
          </ul>

          <p className="mt-4">
            Additionally, when you make a purchase or attempt to make a purchase
            through the website, we collect certain information from you,
            including your name, billing address, shipping address, payment
            information, email address, and phone number.
          </p>

          <p className="mt-4">
            For the purposes of this Privacy Policy, the term{" "}
            <strong>“Personal Information”</strong> refers to both Device
            Information and Order Information that we collect from you when you
            use our services, visit our website, or interact with our customer
            support.
          </p>

          <p className="mt-4">
            <strong>Device Information:</strong> This includes data about the
            device you use to access our website, such as device type, operating
            system, browser type, unique device identifiers, IP addresses,
            geo-location data, and any other technical information related to
            the device or network through which you access our services. This
            information helps us to optimize our website and provide a more
            personalized and seamless experience to users.
          </p>

          <p className="mt-4">
            <strong>Order Information:</strong> This includes personal details
            such as your name, address, phone number, email address, payment
            information, and any other data you provide when you place an order
            or make a purchase through our services. Order Information is used
            to process transactions, fulfill orders, provide customer support,
            and communicate with you regarding your order.
          </p>

          <p className="mt-4">
            Together, Device Information and Order Information are referred to
            as <strong>“Personal Information”</strong> in this Privacy Policy.
            We collect and process this information in accordance with
            applicable privacy laws to improve your experience with our products
            and services, to manage your orders, and to ensure the security of
            our services.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            How Do We Use Your Information?
          </h2>
          <p>
            We use the Order Information that we collect primarily to fulfill
            any orders placed through the website — including processing your
            payment, arranging for shipping, and providing you with invoices
            and/or order confirmations.
          </p>

          <p className="mt-4">
            Additionally, we may use your Order Information to:
          </p>

          <ul className="list-disc list-inside mt-2 space-y-1 ">
            <li>Communicate with you</li>
            <li>Screen orders for potential risk or fraud</li>
            <li>
              Send information, updates, or advertisements related to our
              products and services — in accordance with your preferences
            </li>
          </ul>

          <p className="mt-4">
            <strong>Advertisement:</strong> We may use your information to send
            newsletters, product and service updates, and other communications
            via email — but only if you’ve given prior consent or we’re
            otherwise permitted under applicable laws. You can always opt out by
            unsubscribing from our emails.
          </p>

          <p className="mt-4">
            <strong>Statistics & Research:</strong> We may segment data and
            create anonymous, aggregated statistics about how our products and
            services are used. These insights may be shared with third parties
            or made publicly available.
          </p>

          <p className="mt-4">
            <strong>Product/Service Improvement:</strong> We use your data to
            enhance our existing products, develop new offerings, refine
            recommendations and ads, and better understand customer preferences
            overall.
          </p>

          <p className="mt-4">
            <strong>Publishing Reviews & Content:</strong> If you post public
            reviews, comments, or other content on our site, we may link to,
            share, or display this content in other locations, including our
            advertisements.
          </p>

          <p className="mt-4">
            <strong>Device Information:</strong> We use Device Information to
            help detect fraud and security threats (especially IP addresses),
            and to analyze and optimize user experience on our website —
            including traffic patterns, page interactions, and the effectiveness
            of our marketing efforts.
          </p>

          <p className="mt-4">
            <strong>Third-Party Sharing:</strong> We may share your data with
            trusted third-party partners who support our operations — such as
            payment processors, delivery services, and marketing platforms.
            These third parties are bound by strict confidentiality and security
            agreements.
          </p>

          <p className="mt-4">
            <strong>Legal Obligations:</strong> We may disclose your information
            to comply with legal obligations, such as responding to subpoenas or
            protecting our legal rights and customer safety.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            Sharing Your Personal Information
          </h2>
          <p>
            The user hereby represents and confirms that all information
            provided to the website is authentic, accurate, current, and up to
            date. The website and its entities shall not be held responsible for
            the authenticity of any information submitted by the user. The user
            will be personally liable for any misrepresentation and shall
            indemnify the website for any breach of this provision.
          </p>

          <p className="mt-4">
            We may engage third-party service providers and individuals to
            assist us in facilitating our services — including maintenance,
            analytics, audits, marketing, and development. These third parties
            are granted limited access to your information solely for performing
            these tasks on our behalf and are contractually obligated to not
            disclose or misuse it for any other purpose.
          </p>

          <p className="mt-4">
            All approved third-party providers undergo a rigorous vetting
            process to ensure compliance with data protection regulations. They
            are bound by relevant privacy laws, confidentiality terms,
            non-disclosure agreements, and this Privacy Policy.
          </p>

          <p className="mt-4">
            In certain circumstances, we may share your Personal Information to
            comply with legal obligations — such as responding to subpoenas,
            search warrants, or other lawful requests — or to protect and
            enforce our rights and interests.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">Newsletters</h2>
          <p>
            By subscribing to our newsletter, you agree to receive email
            communications from us. The purpose of our newsletter is to keep our
            customers and visitors informed about new products, services, book
            releases, or company updates. Newsletter subscription is entirely
            optional, and you may unsubscribe at any time using the unsubscribe
            link provided in every email.
          </p>

          <h3 className="text-2xl font-semibold text-[#800909]">
            📅 Frequency
          </h3>
          <p className="mt-2">
            Newsletter issues may be sent up to 2 times per month. However, this
            frequency may vary depending on product updates or special
            announcements.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-gray-800">
            ⚖️ Limited Liability
          </h3>
          <p className="mt-2">
            We reserve the right to modify or discontinue the newsletter service
            at any time, with or without prior notice. New features or changes
            introduced to the service will be governed by the same Terms and
            Conditions.
          </p>
          <p className="mt-2">
            We also reserve the right to remove any user or visitor from our
            mailing list without prior notice, especially in cases of fake or
            suspicious registration data, or violation of our Terms and
            Conditions.
          </p>

          <h3 className="text-2xl font-semibold text-[#800909]">
            ✅ Double Opt-In
          </h3>
          <p className="mt-2">
            During the registration process, subscribers must confirm their
            email address. A confirmation email will be sent containing a
            verification link. Subscription is completed only after you click
            the confirmation link to validate your email address.
          </p>

          <h3 className="text-2xl font-semibold text-[#800909]">
            Privacy Policy
          </h3>

          <p className="mb-4">
            We will not communicate / spread / publish or otherwise share your
            address or any other personal details in any manner contrary to the
            way detailed herein..
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            DO NOT TRACK
          </h2>
          <p className="mb-4">
            Please note that we do not alter our website’s data collection and
            usage practices when we see a “Do Not Track” signal from your
            browser.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">YOUR RIGHTS</h2>
          <p className="mb-4">
            If you are a European resident, you have the right to access
            personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to
            exercise this right, please contact us through our official mail ID.
          </p>
          <p className="mb-4">
            Additionally, if you are a non-European resident we note that we are
            processing your information in order to fulfill contracts we might
            have with you (for example if you make an order through the Site),
            or otherwise to pursue our legitimate business interests listed
            above.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            DATA RETENTION
          </h2>
          <p className="mb-4">
            When you place an order through the Site, we will retain your Order
            Information in our records for the purpose of processing and
            fulfilling your order, unless and until you request us to delete
            such information. You may request the deletion of your Order
            Information at any time, subject to applicable legal obligations and
            retention requirements.
          </p>

          <p className="mb-4 font-semibold">
            Additionally, you have the right to:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-1">
            <li>
              <strong>Access Your Data:</strong> Request a copy of the personal
              data we hold about you.
            </li>
            <li>
              <strong>Rectify Inaccuracies:</strong> Request corrections to any
              inaccurate or incomplete data..
            </li>
            <li>
              <strong>Restrict Processing:</strong> Limit how your data is
              processed in certain circumstances.
            </li>
            <li>
              <strong>Data Portability:</strong> Receive your data in a
              structured, commonly used format.
            </li>
          </ul>
          <p className="mb-4">
            <strong>Exercise Your Rights:</strong>
            <br />
            To exercise any of these rights, please contact us at{" "}
            <a
              href="mailto:support@astroarunpandit.org"
              className="text-blue-600 underline"
            >
              support@astroarunpandit.org
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">
            DATA SECURITY
          </h2>
          <p className="mb-4">
            We implement robust security measures, including encryption, access
            controls, and regular security audits, to protect your data against
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">MINORS</h2>
          <p className="mb-4">
            The Website requires that the user visiting and using the services
            are above 18 years of age however some service information is
            accessible to children under the age of 18 as well. However, it is
            stressed upon that the website is not designed or intended to be
            attractive to be used by children under the age of 14 and no
            personal identifiable information of children below the age of 14 is
            collected knowingly.
          </p>
          <p className="mb-4 font-semibold uppercase">
            IF YOU ARE UNDER 14 YEARS OF AGE, PLEASE DO NOT USE ANY OF THE
            SERVICE PROVIDED BY THE WEBSITE AT ANY TIME OR IN ANY MANNER.
          </p>
          <p className="mb-4">
            If it comes to the knowledge of the concerned parent regarding
            sharing of any information of a child under the age of 14, contact
            the website immediately. We will take appropriate steps and delete
            the data from the Website’s systems.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">CHANGES</h2>
          <p className="mb-4">
            We may update this Privacy Policy periodically without prior notice
            to anyone to reflect changes in our practices, or for other
            operational, legal, or regulatory reasons. Any such updates will be
            effective upon posting on the Site, and we encourage you to review
            this Privacy Policy regularly to stay informed about how we are
            protecting your personal information.
          </p>

          <h2 className="text-2xl font-semibold text-[#800909]">CONTACT US</h2>
          <p className="mb-4">
            For more information about our privacy practices, if you have
            questions, or if you would like to make a complaint, please contact
            us by e-mail at{" "}
            <a
              href="mailto:support@astroarunpandit.org"
              className="text-blue-600 underline"
            >
              support@astroarunpandit.org
            </a>{" "}
            or by mail using the details provided below:
          </p>
          <p className="mb-4">
            Plot No. 406, Gali No. 2, Krishna Puri, Chhapeda, Kanpur, Kanpur
            Nagar, Uttar Pradesh – 208025
          </p>
          <p className="mb-4">
            <strong>Grievance Officer – Aashi Agarwal</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:support@astroarunpandit.org"
              className="text-blue-600 underline"
            >
              support@astroarunpandit.org
            </a>
          </p>
          <p className="font-bold">ASTRO ARUN PANDIT PRIVATE LIMITED</p>

          <p className="mt-10 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Astro Arun Pandit. All Rights Reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
