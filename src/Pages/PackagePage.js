import React from "react";

const PackagePage = (props) => {
  const { packagePrice } = props;
  return (
    <div className="md:p-10 bg-[#dbc3ab] text-[#3B2E22] min-h-screen mt-[70px] text-[#3B2E22]">
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-center p-6 font-semibold">
        {packagePrice}
      </h2>
      <p className="px-6 sm:px-10 md:px-24 py-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sunt
        nemo iusto ullam excepturi dolorum blanditiis, delectus corrupti
        perspiciatis voluptatibus libero. Vero nulla eaque, veritatis quidem at
        blanditiis consectetur laborum sed itaque consequuntur ad explicabo,
        minima deserunt commodi suscipit quisquam officia incidunt ea quasi
        iste? Quam pariatur sunt, laborum incidunt porro officiis exercitationem
        corporis debitis architecto. Iste magnam culpa ad dolor sint quos quo
        expedita cupiditate blanditiis inventore accusamus, repellendus officiis
        possimus, quae vitae reiciendis, ducimus recusandae pariatur perferendis
        voluptatibus dolore sequi. Reiciendis dolorem asperiores rerum
        consequatur voluptatem omnis repellendus, voluptatibus laudantium
        ratione numquam recusandae nostrum assumenda architecto provident
        voluptas officia quam consectetur, sapiente cum esse nam non. Aspernatur
        sed facilis vel? Unde, ipsum et nemo debitis numquam ipsam error dolorum
        quibusdam illum eum magnam ab quas earum corrupti vero cupiditate harum.
        Adipisci quaerat eaque quisquam omnis. Molestiae, praesentium sunt! Ab
        hic quae optio quos voluptas doloremque omnis, eum odit iure adipisci
        harum laborum dolorem molestiae molestias obcaecati, deleniti iste
        praesentium totam! Quam cumque dicta temporibus? Amet aliquid doloribus
        delectus dolorem exercitationem esse rem at, est quaerat beatae tenetur
        temporibus in id asperiores error dolorum harum corrupti. Reiciendis
        incidunt earum sint, temporibus sequi magnam nulla ducimus praesentium
        laudantium veniam vero.
      </p>
    </div>
  );
};

export default PackagePage;
