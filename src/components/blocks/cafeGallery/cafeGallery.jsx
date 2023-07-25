import Gallery from "../../ui/gallery/gallery";
import { StyledTitle, StyledSection } from "./styles";
import { TitleSize } from "/src/components/ui/title/title";

export default function CafeGallery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}
