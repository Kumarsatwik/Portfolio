import ContactForm from "./components/ContactForm";
import ProfileOverview from "./components/ProfileOverview";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
export default function Home() {
  return (
    <>
      <ProfileOverview />
      {/* <Projects /> */}
      <WorkExperience />
      <Skills />
      <ContactForm />
    </>
  );
}
