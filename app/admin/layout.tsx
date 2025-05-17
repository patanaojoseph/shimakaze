import { Separator } from "@/components/ui/separator";
import SideBar from "./Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className='text-2xl pl-4'>Dashboard</h2>
      <Separator className='mt-2' />
      <section className='grid lg:grid-cols-12 gap-12 mt-12'>
        <div className='lg:cols-span-2'>
          <SideBar />
        </div>
        <div className='lg:cols-span-10 px-4'>{children}</div>
      </section>
    </>
  );
}

export default DashboardLayout;
