import NavDropdownHeader from "@/components/header/nav-dropdown-header";
import { HOME_LINKS } from "@/constants";

export default function Home() {
  return (
    <div>
      <NavDropdownHeader links={HOME_LINKS} />
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}
