import React from 'react';

interface StarsProps {
  count?: number;
  defaultRating?: number;
  icon?: string;
  color?: string;
  iconSize?: string;
}

const DEFAULT_COUNT = 5;
const DEFAULT_ICON = '⭐';
const DEFAULT_UNSELECTED_COLOR = 'grey';
const DEFAULT_COLOR = 'yellow';

function Stars({ count, defaultRating, icon, color, iconSize }: StarsProps) {
  const [rating, setRating] = React.useState(defaultRating || 0);
  const [temperaryRating, setTemperaryRating] = React.useState(0);

  if (!Number(iconSize)) {
    throw Error('Icon size must be a number');
  }

  function handleRatingsClick(rating: number) {
    setRating(rating);
  }

  const stars = Array(count || DEFAULT_COUNT).fill(icon || DEFAULT_ICON);
  return (
    <div className='flex flex-row'>
      {stars.map((_, i) => {
        const isActiveColor =
          (rating || temperaryRating) && (i < rating || i < temperaryRating);

        let elementColor = '';

        if (isActiveColor) {
          elementColor = color || DEFAULT_COLOR;
        } else {
          elementColor = DEFAULT_UNSELECTED_COLOR;
        }

        return (
          <div
            className='cursor-pointer transition hover:scale-125'
            key={i}
            style={{
              fontSize: iconSize ? `${iconSize}px` : '14px',
              color: elementColor,
              filter: `${isActiveColor ? 'grayscale(0)' : 'grayscale(100%)'}`,
            }}
            onMouseEnter={() => setTemperaryRating(i + 1)}
            onMouseLeave={() => setTemperaryRating(0)}
            onClick={() => handleRatingsClick(i + 1)}>
            {icon ? icon : DEFAULT_ICON}
          </div>
        );
      })}
    </div>
  );
}
export default Stars;
