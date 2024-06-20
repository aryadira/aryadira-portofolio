import Container from "./Container";

export default function MainLayout({ children }: any) {
  return (
    <main className='w-full mx-[200px]'>
      <Container>{children}</Container>
    </main>
  );
}
