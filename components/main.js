import { Header } from "./header";
import { Navbar } from "./navbar";
import { Section } from "./section";

export function Main() {
  return (
    <main className="container min-h-screen mx-auto pt-4">
      <div>
        <Header />
        <Navbar />
      </div>
      <Section />
    </main>
  );
}
