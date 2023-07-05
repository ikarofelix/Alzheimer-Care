import { LoaderContainer, Loader } from "./loader-styles";

export const LoaderComponent = () => {
  return (
    <LoaderContainer>
      <Loader>
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32"></circle>
        </svg>
      </Loader>
    </LoaderContainer>
  );
};
