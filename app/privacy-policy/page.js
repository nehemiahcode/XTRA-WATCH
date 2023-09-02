import Heading from "../components/Heading";
import Typography from "../components/Typography";
import Container from "../components/layout/Container";

export default function Policy() {
  return (
    <Container>
      <section className=" w-full px-4 py-5 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <Heading style={" text-center font-bold text-3xl"}>
          Privacy Policy
        </Heading>
        <Typography style={" text-center py-3"}>
          Your data is protected and respected.
        </Typography>
        <div className=" lg:w-[50%] w-[97%]    sm:w-[80%] md:w-[70%] mx-auto py-5">
          <Heading style={" font-semibold py-3 text-2xl"}>
            Collection of non-personal information
          </Heading>
          <Typography style={"text-[0.98rem] md:text-base leading-loose "}>
            When you visit the Website our servers automatically record
            information that your browser sends. This data may include
            information such as your device&apos;s IP address, browser type and
            version, operating system type and version, language preferences or
            the webpage you were visiting before you came to our Website, pages
            of our Website that you visit, the time spent on those pages,
            information you search for on our Website, access times and dates,
            and other statistics.
          </Typography>
        </div>

        <div className=" lg:w-[50%] w-[97%] sm:w-[80%] md:w-[70%] mx-auto py-5">
          <Heading style={" font-semibold  py-3  text-2xl"}>
            Information transfer and storage
          </Heading>
          <Typography style={"text-[0.98rem] md:text-base leading-loose "}>
            Depending on your location, data transfers may involve transferring
            and storing your information in a country other than your own. You
            are entitled to learn about the legal basis of information transfers
            to a country outside the European Union or to any international
            organization governed by public international law or set up by two
            or more countries, such as the UN, and about the security measures
            taken by us to safeguard your information. If any such transfer
            takes place, you can find out more by checking the relevant sections
            of this document or inquire with us using the information provided
            in the Contact section.
          </Typography>
        </div>

        <div className=" lg:w-[50%] w-[97%] sm:w-[80%] md:w-[70%] mx-auto py-5">
          <Heading style={" font-semibold  py-3  text-2xl"}>Contacts</Heading>
          <Typography style={" text-[0.98rem] md:text-base leading-loose "}>
            We immdiately send you emails when you fill out a form on this site.
            You may choose to stop receiving emails from us by mentioning that
            when filling any form in this site. However, you will continue to
            receive essential transactional emails.
          </Typography>
        </div>
      </section>
    </Container>
  );
}
