import NavDropdownHeader from "@/components/header/nav-dropdown-header";
import { HOME_LINKS } from "@/constants";

export default function About() {
  return (
    <div>
      <NavDropdownHeader links={HOME_LINKS} />
      <main>
        <h1>About</h1> 
        <p>Learn how to solve the Rubik's Cube with our beginner's guide.</p>
      </main>
    </div>
  );
}