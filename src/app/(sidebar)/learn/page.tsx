import NavDropdownHeader from "@/components/header/nav-dropdown-header"
import { LEARN_LINKS } from "@/constants";

export default function Learn() {
  return (
    <div>
      <NavDropdownHeader links={LEARN_LINKS} />
      <h1>
        Learn
      </h1>
    </div>
  );
}