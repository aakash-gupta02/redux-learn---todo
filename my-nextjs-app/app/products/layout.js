import NavBar from "@/components/NavBar";

export default function pageLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
