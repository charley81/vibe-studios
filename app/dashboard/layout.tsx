import SideNav from '../components/dashboard/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNav />
      <div>{children}</div>
    </div>
  );
}
