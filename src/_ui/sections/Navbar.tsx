import { HeadInfoListComponent } from "../components/HeadInfoList";
import { NavbarList } from "../components/NavbarList";

export function NavbarSection() {
  return (
    <section className="max-h-size-of-navbar-to-main min-h-size-of-navbar-to-main fixed top-0 left-0 right-0 bottom-size-of-navbar-to-main z-10 bg-white">
      <NavbarList />

      <HeadInfoListComponent />
    </section>
  );
}
