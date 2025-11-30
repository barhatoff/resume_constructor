import { constant } from "../../constants/constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ButtonDemo from "../../ui/button-demo";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import { useSearchParams } from "react-router-dom";

type ConstantKey = keyof typeof constant;

export default function Demo() {
  const [searchParams, _] = useSearchParams();
  const target = searchParams.get("target");

  const allowedTargets = ["project_1", "project_2"];
  if (target && allowedTargets.includes(target)) {
    const project_id = target.split("_")[1];

    const galeryKey = `galery_${project_id}` as ConstantKey;
    const dataKey = `${galeryKey}_data` as ConstantKey;

    const projectGallery = constant[galeryKey];
    const projectData = constant[dataKey];

    console.log(projectData.url.length > 0);

    return (
      <div className="w-10/12 mx-auto xl:mt-10 md:mt-30 mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {projectGallery.map((url: string, i: number) => (
            <SwiperSlide key={`slide_1_${i}`}>
              <img src={url} alt={`galery_img_${i}`} className="w-full h-[800px] object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
        {projectData.url.length > 0 ? (
          <ButtonDemo
            event={() => {
              window.open(projectData.url);
            }}
          >
            <p>{projectData.title}</p>
          </ButtonDemo>
        ) : null}
      </div>
    );
  }
  return (
    <div>
      <h1>{target} query not allowed or query "target" is empty</h1>
    </div>
  );
}
