import Image from "next/image";
import bgImg from "../public/background.png";
import logo from "../public/Logo.png";

export default function Home() {
  const navCompo = [
    {
      navLink: "#",
      menuTitle: "Home",
    },
    {
      navLink: "#",
      menuTitle: "Plant type",
      secondary: {
        navLink: "#",
        menuTitle: "CERC Chruch",
      },
    },
    {
      navLink: "#",
      menuTitle: "More",
    },
    {
      navLink: "#",
      menuTitle: "Contact",
    },
  ];

  return (
    <main>
      <section
        className={`h-screen w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <nav className="container">
          <Image src={logo} height={48} />
        </nav>
      </section>
    </main>
  );
}
