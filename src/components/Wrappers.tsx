export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col place-items-center m-4">
      {children}
    </div>
  );
}

export function HeroSectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 place-items-center m-4 mb-12 w-full h-full lg:flex-row lg:justify-around">
      {children}
    </div>
  );
}

export function HeroContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white row-start-1 row-end-1 lg:row-auto h-fit text-center mt-4 lg:px-8 lg:text-left">
      {children}
    </div>
  );
}

export function HeroIllustrationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="object-contain mt-12 lg:mt-4 w-full row-start-2 px-8 row-end-3 lg:row-auto h-full max-w-fit max-h-fit group">
      {children}
    </div>
  );
}
