import { RevolvingDot } from 'react-loader-spinner';

export default function Loader() {
  return (
    <RevolvingDot
      height="500"
      width="500"
      color="tomato"
      secondaryColor=""
      ariaLabel="revolving-dot-loading"
      wrapperStyle={{ margin: 'auto' }}
      wrapperClass=""
      visible={true}
    />
  );
}
