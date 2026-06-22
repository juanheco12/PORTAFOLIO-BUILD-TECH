export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[36rem] h-[36rem] rounded-full bg-cyan/10 blur-[110px] animate-drift" />
      <div className="absolute top-[35%] right-[-15%] w-[32rem] h-[32rem] rounded-full bg-azul/10 blur-[110px] animate-drift [animation-delay:4s] [animation-duration:24s]" />
      <div className="absolute bottom-[-15%] left-[15%] w-[34rem] h-[34rem] rounded-full bg-verde/10 blur-[120px] animate-drift [animation-delay:8s] [animation-duration:28s]" />
    </div>
  );
}
