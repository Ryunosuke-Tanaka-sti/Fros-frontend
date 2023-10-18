import FrosLogo from '@/assets/FrosLogo.png';

// type FooterComponentProps = {};

export const FooterComponent = () => {
  // const {} = props;
  return (
    <footer className="flex flex-row content-center justify-center border-t border-pick-default px-8 py-6">
      <img src={FrosLogo} className="h-full w-auto object-contain" alt="" />
    </footer>
  );
};
