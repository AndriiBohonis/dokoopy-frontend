export const EditIcon = () => {
  return (
    <div className="edit-icon">
      <style>
        {`
          .edit-icon path {
            stroke: #646464;
            stroke-width: 1.5;
            stroke-linecap: round;
            stroke-linejoin: round;
            transition: stroke 0.3s ease;
          }

          .edit-icon:hover path {
            stroke: #2672E4;
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10 16.6667H17.5"
        />
        <path
          d="M13.75 2.91669C14.0815 2.58517 14.5312 2.39893 15 2.39893C15.2321 2.39893 15.462 2.44465 15.6765 2.53349C15.891 2.62233 16.0858 2.75254 16.25 2.91669C16.4142 3.08084 16.5444 3.27572 16.6332 3.4902C16.722 3.70467 16.7678 3.93455 16.7678 4.16669C16.7678 4.39884 16.722 4.62871 16.6332 4.84319C16.5444 5.05766 16.4142 5.25254 16.25 5.41669L5.83333 15.8334L2.5 16.6667L3.33333 13.3334L13.75 2.91669Z"
        />
      </svg>
    </div>
  );
};