export default function Container({ className, children }: any) {
  return <div className={`container mx-auto px-[20px] lg:px-[200px] w-full ${className}`}>{children}</div>;
}
