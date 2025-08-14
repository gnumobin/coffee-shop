import IconList from "../ui/icons/IconList";

const CopyRight = () => {
  return (
    <div className="text-bright-shade-2 text-xl xl:text-lg border-t border-yellow-shade-1  mt-28 px-52 2xl:px-18 xl:!px-8 pt-8 pb-7">
      <div className="container flex lg:flex-col-reverse gap-4 items-center justify-between">
        <p>کلیه حقوق این سایت متعلق به قهوه کافینا می باشد.</p>
        <IconList />
      </div>
    </div>
  );
};

export default CopyRight;
