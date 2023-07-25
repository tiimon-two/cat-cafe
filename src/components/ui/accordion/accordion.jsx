import { useState } from "react";
import { Ul } from "/src/components/styled";
import AccordionItem from "./accordion-item";
import { StyledLi } from "./styles";

export default function Accordion({
  titleComponent, // компонент для отрисовки заголовка
  textComponent, // компонент для отрисовки текста
  content, // массив, содержащий контент аккордеона
  isHtml // есть ли HTML в тексте
}) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
            titleComponent={titleComponent}
            textComponent={textComponent}
            title={item.title}
            text={item.description}
            open={index === openItemIndex}
            onClick={() => {
              setOpenItemIndex(index !== openItemIndex ? index : null);
            }}
            isHtml={isHtml}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}
