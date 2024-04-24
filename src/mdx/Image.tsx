'use client';

import { FC } from 'react';

import LobeImage, { type ImageProps as LobeImageProps } from '@/Image';

export interface ImageProps extends LobeImageProps {
  cover?: boolean;
  inStep?: boolean;
}
const Image: FC<ImageProps> = ({
  style,
  width = 800,
  height,
  cover,
  inStep,
  alt = 'cover',
  ...rest
}) => {
  const size = cover
    ? { height: 300, width: 800 }
    : inStep
      ? {
          height,
          width: 780,
        }
      : {
          height,
          width,
        };

  return (
    <LobeImage
      alt={alt}
      height={size.height}
      preview={{ mask: false }}
      style={{
        borderRadius: 'calc(var(--lobe-markdown-border-radius) * 1px)',
        marginBlock: 'calc(var(--lobe-markdown-margin-multiple) * 1em)',
        ...style,
      }}
      width={size.width}
      {...rest}
    />
  );
};

export default Image;
