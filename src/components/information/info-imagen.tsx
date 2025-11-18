"use client";

import { DetailImageInterface } from "@/interface";
import { useEffect, useState } from "react";
import Image from "next/image";
import { InfoImagenSkeleton } from "./info-imagen-skeleton";

interface InfoImagenInterface {
  data: DetailImageInterface[] | DetailImageInterface | string | undefined;
}

export function InfoImagen({ data }: InfoImagenInterface) {
  const [main, setMain] = useState<string | null>(null);
  const [images, setImages] = useState<DetailImageInterface[]>([]);

  useEffect(() => {
    if (!data) {
      setImages([]);
      setMain('/placeholder-product.png');
      return;
    }

    if (typeof data === "string") {
      setImages([{ url: data, isMain: true }]);
      setMain(data);
      return;
    }

    if (!Array.isArray(data)) {
      setImages([data]);
      setMain(data.url);
      return;
    }

    setImages(data);
    const mainImg = data.find((img) => img.isMain) || data[0];
    if (mainImg === undefined) {
      return
    }
    setMain(mainImg.url);
  }, [data]);

  if (!main) {
    return <div className="text-gray-400 text-sm">
      <InfoImagenSkeleton/>
    </div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full rounded-xl overflow-hidden">
        <Image
          src={main}
          width={600}
          height={600}
          unoptimized
          alt="imagen principal"
          className="object-contain w-[500] h-[500px] rounded-6xl rounded-2xl"
        />
      </div>

      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setMain(img.url)}
              className={`w-20 h-20 cursor-pointer border border-primary rounded-lg overflow-hidden
                ${main === img.url ? "ring-2 ring-secondary border-secondary" : ""}`}
            >
              <Image
                src={img.url}
                width={100}
                height={100}
                alt="miniatura"
                unoptimized
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}