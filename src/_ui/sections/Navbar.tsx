import { HeadInfoListComponent } from "../components/HeadInfoList";
import { NavbarList } from "../components/NavbarList";

export function Navbar() {
  return (
    <div>
      <NavbarList />

      <HeadInfoListComponent />
    </div>
  );
}
